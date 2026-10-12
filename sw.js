// Purify (English) service worker — offline cache (user data lives in localStorage; the SW never touches it)
const CACHE = 'purify-en-v3';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './favicon.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png', './icons/apple-touch-icon.png',
  './audio/purify-bgm.mp3', './audio/ave-maria.mp3',
  './audio/chant-salve.mp3', './audio/chant-veni.mp3', './audio/chant-avemaris.mp3', './audio/chant-pange.mp3', './audio/chant-ubi.mp3'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('purify-en-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Serve cached audio for <audio> Range requests with 206 (iOS Safari)
async function rangeResponse(req, res) {
  const buf = await res.arrayBuffer(), total = buf.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  let start = 0, end = total - 1;
  if (m) {
    if (m[1] === '' && m[2] !== '') { start = Math.max(0, total - +m[2]); }
    else { start = +m[1] || 0; if (m[2] !== '') end = Math.min(+m[2], total - 1); }
  }
  if (start >= total) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + total } });
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream',
    'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' } });
}
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Pages: network first (picks up updates), cache when offline
    e.respondWith(fetch(req).then(res => { if (res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); } return res; })
      .catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  if (req.headers.has('range')) {
    e.respondWith(caches.match(req.url).then(hit => hit ? rangeResponse(req, hit) : fetch(req)));
    return;
  }
  // Static files: cache first, else network and store (200 only)
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
