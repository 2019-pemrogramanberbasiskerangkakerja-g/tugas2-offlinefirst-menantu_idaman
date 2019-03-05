importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pbkk').then(function(cache) {
      return cache.addAll([
        `/`,
        `/login/login.html`
        // `/css/login.css`
      ]);
    })
  );
 });
  
  // self.addEventListener('activate', event => {
  //   event.waitUntil(self.clients.claim());
  // });
  
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});