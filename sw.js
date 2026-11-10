// v27.22 (P1) - Service Worker. It caches ONE thing: content-addressed blobs.
//
// A blob's URL is derived from its bytes, so it can be served from the cache forever without asking the
// network whether it changed - it cannot have changed, or it would be at a different URL. That is what
// makes a second visit instant and an offline replay possible.
//
// Everything else - the page, the player scripts, the manifest - is deliberately NOT cached here. Those
// are mutable: a manifest changes when a lesson is re-bundled, and a stale one would point at blobs that
// are no longer the lesson. Caching the immutable thing aggressively and the mutable thing not at all is
// simpler to reason about than any expiry policy, and it cannot go stale.
var CACHE = 'lesson-blobs-v1';

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.pathname.indexOf('/blobs/') === -1) return;
  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(e.request).then(function (hit) {
        if (hit) return hit;
        return fetch(e.request).then(function (r) {
          // Only a complete, successful response is worth keeping; a partial or error response cached
          // under an immutable URL would be permanent.
          if (r && r.status === 200 && r.type !== 'opaque') {
            try { cache.put(e.request, r.clone()); } catch (err) { /* best-effort */ }
          }
          return r;
        });
      });
    })
  );
});
