// Mars Cydonia Connection - Service Worker
const CACHE_NAME = 'mars-cydonia-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/html/index.html',
  '/html/about.html',
  '/html/services.html',
  '/html/links.html',
  '/html/live.html',
  '/css/style.css',
  '/css/links-style.css',
  '/js/app.js',
  '/manifest.json',
  '/img/Mars.jpg',
  '/img/MarsSurface.jpg',
  '/img/Marswater.jpg',
  '/img/Martian_face_viking_cropped.jpg',
  '/img/Olympusmons.png',
  '/img/Sheep2_small.jpg',
  '/img/Valles_marineris_enhanced.jpg',
  '/img/logo_brush.png',
  '/img/logo_css.png',
  '/img/logo_html.png',
  '/img/micecap.jpg',
  '/img/mriverbed.jpg',
  '/img/showcase.jpg'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise try to fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();

            // Add the new response to cache for future
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // If both cache and network fail, serve a fallback page for HTML requests
            if (event.request.url.match(/\.(html|htm)$/)) {
              return caches.match('/html/index.html');
            }
          });
      })
  );
});