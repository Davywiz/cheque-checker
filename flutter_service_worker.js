'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b1c565f165d3c7432aefae6694f38dca",
".git/config": "b4198fe29af9ab5de1c534852fb4c835",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a818b2c816d720a55fb411a548c056b1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c53c3ae3c33bc1eb7b4ed3eb1d938209",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe03e00fe1582952b7d1b5c0bcd0ad94",
".git/logs/refs/heads/master": "fe03e00fe1582952b7d1b5c0bcd0ad94",
".git/logs/refs/remotes/origin/gh-pages": "d730c02a12cf293f1e42dd76b810ac88",
".git/logs/refs/remotes/origin/master": "473d2749263b002e490d52ca827ea976",
".git/objects/05/bf3106efabdff6a9083a03ab013892ab3d352d": "9f7abfeda3b6ff0e4f7749c4ee6a54a3",
".git/objects/0a/44bdc7df10732d6dd83d832d407987c391fc09": "7c93970428d9299eb94743561d9d9be0",
".git/objects/0b/fb09e6280b7c3cf701bace975e7ee3a9412358": "4c3311954d1c81651987c82a62c02274",
".git/objects/0f/7830467a48d7403bbdc26cab710bb296579edd": "cc00e12392be12afab148053c40fe997",
".git/objects/11/a33d62659958ead812a19f96e2e3ec7af3976e": "d92f1b9b49c1a951fe3029175a17cab2",
".git/objects/1f/e675d7b31325f56dbdfaff9d2fd4ab2e52d8fb": "84685b974ac85a80f769e6f5d19bcbe1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1e714a27539c53f065d42c1bc8b3b9a85fb65a": "d83d76e4ba9a288afc1ba24222b9db83",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/24/45b146d4bdfa900f4f253384aae87cebb810e8": "3542bd9fa9814d81a990e01348b12f05",
".git/objects/26/a1bcf4235d716c853a1671e07d48fd6cd7ccb3": "1431a5873b5d748975642c75b75e3ebd",
".git/objects/27/a4013545392b4553608c74f73a43d97ff64353": "be5634f65aadeb2f1b99c7780259feea",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/825b8f994eff11fa2820d290e29bc996101fbb": "bb805a96b046074a6e171ea845aaa183",
".git/objects/41/89037efbad0a6d88cebb67d2088905ce9a8a2d": "4068e7fb955d948b49b884f1f4ee8e4f",
".git/objects/44/0e2aeaa48b0e87505e6542c56b1d9571db7231": "04a0d2d7c0e559387b9d827a5710e41d",
".git/objects/45/39e00f3dad0d4ab499b427bf81c34243aba985": "23c369567b01a90720bfb45ced5dda74",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/02135c38f945056f1a60fd783c7b45b9e02b8d": "3a80bc22df198eae935c465d61640a78",
".git/objects/62/2cc6d8f25784f7518f6f0d92e8877d343cd606": "da46fdce189f7498b9bd54ced7822623",
".git/objects/6f/22af9dacdc6756bb3010ef1d2962ff12d55bd1": "7061585b9ec54f29c017515d61ff06c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5e0a7b8062ee77743d90256c92cdc75d384497": "6efc8ce8794f2fbae68ac519c3477ef4",
".git/objects/7c/c046f8b6669dd7ab4185f3a5ef96e510713f62": "54af59688740fa154b5d29a3b059a43f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a7fc7a07f6efac8c1a286f132e00f56e809469": "eb041470524b48142beb3656fc20e350",
".git/objects/8a/20b449d83edc434b6e0e195ae9eb69f54b0869": "2e993ec90319b6c2a02534fb1cf0ddc3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c0dc3320386c8ff4c8a6b54da50391e845722f": "9776f4bfe8fb0e671e668c63bbe6c6db",
".git/objects/93/0fc97fd419e9216bafb9cc2206a38eb2371592": "87137e87803a31a72a331bd0bfac5aa9",
".git/objects/99/50062de5741dbcd0341923955b945f617f9223": "f9f648930d8bc6d37374bd180e0f1785",
".git/objects/9f/357f49f2b3f22e660ea84ca595f56116e023c0": "5c1f532eb46c2b05b6a68a37d91dea6c",
".git/objects/a1/22a6aade6a9f14e397b8a0ace947cdab88194f": "87272898dfe64ac1859c34ad0ce9439b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/d4/b2b1d89761c9821f4e79cb4e62a8b414edfd25": "16060f941f77b3a69afdc2e29c82d436",
".git/objects/db/46474e9cf1ee88db4dcf9990c2ad15dd6c68e0": "f3a2e77f008560305e9a544657dbb97b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f9/55a63bae669a55bd302de6f2e84135c3da8ac1": "f0708661455d79f5b476d4a5131022cc",
".git/objects/fc/6f91df7ae40d8b4109861251af4f8f909537e3": "1bc7961b40a2fa58b0cfb02c07f27467",
".git/ORIG_HEAD": "191b9a6d49b5800126438d4958ff5fb2",
".git/refs/heads/master": "8bced459a684213b9c4c674c910c053f",
".git/refs/remotes/origin/gh-pages": "a18a21c56949cc16fc063f5d1a31e475",
".git/refs/remotes/origin/master": "8bced459a684213b9c4c674c910c053f",
"assets/AssetManifest.json": "173769d2ddb15c721ed380fd071697a8",
"assets/assets/images/cheque.png": "8d5331f7d689914a0464f67379f80d84",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6602e2393b0f42301fcda3ed511a19b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f3db9bc9c9383b54e759932eb322f539",
"/": "f3db9bc9c9383b54e759932eb322f539",
"main.dart.js": "90883257cd0ea47d318547f0eb2e6524",
"manifest.json": "22b2e00dc154aa9a355e463e73dae672",
"README.md": "e2d3e7d8b7a135dcba4c8aa629939012",
"version.json": "88aace628b8844accd0e89e539b403cf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
