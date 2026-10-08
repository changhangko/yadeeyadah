const CACHE = "changhangko-preview-v1";
const SHELL = ["/", "/manifest.webmanifest", "/icons/icon.svg"];
self.addEventListener("install", event => {event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));self.skipWaiting();});
self.addEventListener("activate", event => {event.waitUntil((async () => {for(const key of await caches.keys()) if(key.startsWith("changhangko-preview-") && key!==CACHE) await caches.delete(key);await self.clients.claim();})());});
self.addEventListener("fetch", event => {const request=event.request;if(request.method!=="GET"||request.mode!=="navigate"||new URL(request.url).origin!==self.location.origin)return;event.respondWith(fetch(request).catch(()=>caches.match("/") ));});
