'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "409fe92fab5f1bc3b52938a237aa90be",
"assets/LICENSE": "8afd706a316b80af4bb09a49971f5a63",
"assets/assets/photo.jpeg": "be50b0a6de44eb2b38a750fd8b0dce1d",
"assets/packages/mdi/fonts/materialdesignicons-webfont.ttf": "9bfeb985a91e5545d78b906676d8e6fb",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/SourceSansPro-Bold.ttf": "8669b8706bbbdd1482e2fccc4ed96850",
"assets/fonts/SourceSansPro-Light.ttf": "81cd217e4a8160a930c6d5fb8d1e8e82",
"assets/fonts/SourceSansPro-SemiBold.ttf": "83476a890be79f84e97b792c9c40d743",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/FontManifest.json": "f3887fde7ecfc5b749b527d04c4cbb66",
"main.dart.js": "c8945a59bdef44690358c84484addb75",
"index.html": "3bec37987e603ce424d85ca0e366753b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
