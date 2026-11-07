self.addEventListener('install', e => {
  e.waitUntil(caches.open('apw-tbessa-v1').then(c => c.addAll(['./','./index.html','./tahar.jpg','./manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
