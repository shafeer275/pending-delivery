var C='pending-delivery-v1';
var F=['index.html','pending-delivery-manifest.webmanifest','pending-delivery-icon-192.png','pending-delivery-icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put(e.request,cp)});return res}).catch(function(){return caches.match('index.html')})}))});
