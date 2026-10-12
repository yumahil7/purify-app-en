import sys, re
sys.path.insert(0,'/workspace/v3src'); from i18n import h
part = sys.argv[1]; src = open('/workspace/v3src/'+part, encoding='utf-8').read().split('\n')
f = '/workspace/v3src/en/'+part+'.txt'
t = open(f, encoding='utf-8').read()
t = re.sub(r'^@@ L(\d+)\s*$', lambda m: '@@ ' + h(src[int(m.group(1))-1]), t, flags=re.M)
open(f,'w',encoding='utf-8').write(t)
