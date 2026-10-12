# 영어판 빌드 도구: 한글이 든 소스 줄을 해시로 찾아 en/<part>.txt 의 번역 줄로 바꿈
import re, hashlib, sys, os
D = '/workspace/v3src/'
HG = re.compile(r'[\uac00-\ud7a3\u3131-\u318e]')
def h(line): return hashlib.sha1(line.rstrip('\n').encode()).hexdigest()[:10]
def need(line):
    s = line.strip()
    return bool(HG.search(s)) and not s.startswith('//') and not (s.startswith('/*') and s.endswith('*/')) and not s.startswith('<!--')
def table(part):
    f = D + 'en/' + part + '.txt'
    if not os.path.exists(f): return {}
    t, cur = {}, None
    for ln in open(f, encoding='utf-8').read().split('\n'):
        m = re.match(r'^@@ ([0-9a-f]{10})\s*$', ln)
        if m: cur = m.group(1); t[cur] = []; continue
        if cur is not None: t[cur].append(ln)
    return {k: '\n'.join(v).rstrip('\n') for k, v in t.items()}
def translate(part, src):
    t = table(part); out, miss, used = [], [], set()
    for line in src.split('\n'):
        k = h(line)
        if k in t: out.append(t[k]); used.add(k)
        elif need(line) and ' // ' in line and not HG.search(line.split(' // ')[0]): out.append(line.split(' // ')[0])
        elif need(line): miss.append((k, line)); out.append(line)
        elif HG.search(line) and line.strip().startswith('//'): out.append(re.sub(r'//.*', '//', line))
        else: out.append(line)
    return '\n'.join(out), miss, set(t) - used
if __name__ == '__main__':
    part = sys.argv[1]
    src = open(D + part, encoding='utf-8').read()
    _, miss, unused = translate(part, src)
    for k, l in miss: print('@@', k); print(l)
    if unused: print('UNUSED', unused, file=sys.stderr)
