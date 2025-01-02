self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
            '/RoyMustang/',  // Update this path
            '/RoyMustang/index.html',  // Update this path
            '/RoyMustang/styles/styles.css',  // Update this path
            '/RoyMustang/scripts/script.js',  // Update this path
            '/RoyMustang/favicons/favicon-192x192.png',  // Update this path
            '/RoyMustang/favicons/favicon-512x512.png'  // Update this path
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });