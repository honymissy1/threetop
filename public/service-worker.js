self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cacheResponse) => {
        if (cacheResponse) {
          return cacheResponse;
        }
  
        // If the request is not in the cache, fetch it from Firestore
        return fetch(event.request).then((networkResponse) => {
          // Optionally, cache the response for future use
          caches.open('client_data').then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
  
          return networkResponse;
        });
      })
    );
  });
  