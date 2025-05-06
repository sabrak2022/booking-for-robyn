self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('booking-cache-v1').then(function(cache) {
      return cache.addAll([
        '/booking-for-robyn/',
        '/booking-for-robyn/index.html',
        '/booking-for-robyn/manifest.json',
        '/booking-for-robyn/icons/icon-192x192.png',
        '/booking-for-robyn/icons/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
