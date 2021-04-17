// Должно быть true в production
const doCache = true

// Имя кэша
const CACHE_NAME = "react-chat-cache"

// Очищает старый кэш
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key)
            return caches.delete(key)
          }
        }),
      ),
    ),
  )
})

self.addEventListener("install", function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        fetch("manifest/manifest.json")
          .then((response) => {
            response.json()
          })
          .then((assets) => {
            const urlsToCache = ["", "/chat/*"]
            cache.addAll(urlsToCache)
            console.log("cached")
          })
      }),
    )
  }
})

self.addEventListener("fetch", function (event) {
  console.log("fetch", event.request)
  event.respondWith(
    (async function () {
      if (!(event.request.url.indexOf("http") === 0)) {
        return
      }

      try {
        const res = await fetch(event.request)
        const cache = await caches.open("cache")
        cache.put(event.request.url, res.clone())
        return res
      } catch (error) {
        return caches.match(event.request)
      }
    })(),
  )
})
