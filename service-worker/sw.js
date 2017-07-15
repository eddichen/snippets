var CACHE_NAME = 'sw-example-cache';
var urlsToCache = [
    '/service-worker/index.html',
    './css/normalize.css'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
});
