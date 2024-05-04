const cacheName = "resources";

const resources = [
  "/",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/main.css",
  "/main.js",
  "/maskable_icon.png",
  "/site.webmanifest",
  "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
];

/**
 * @arg {RequestInfo | URL} request
 */
const get = async (request) => {
  /** @type {Response | undefined} */
  let response;

  try {
    response = await fetch(request);
  } catch (_ignored) {
    return response;
  }

  if (response.ok) {
    (await caches.open(cacheName)).put(request, response.clone());
  }

  return response;
};

/**
 * @arg {RequestInfo | URL} request
 */
const responseFor = async (request) =>
  (await get(request)) || (await caches.match(request)) || Response.error();

addEventListener("fetch", (e) => {
  const event = /** @type {FetchEvent} */ (e);
  event.respondWith(responseFor(event.request));
});

const install = async () =>
  await (await caches.open(cacheName)).addAll(resources);

addEventListener("install", (event) =>
  /** @type {ExtendableEvent} */ (event).waitUntil(install()),
);
