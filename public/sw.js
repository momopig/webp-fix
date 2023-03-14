
const PATH_PREFIX = 'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/'
importScripts(PATH_PREFIX + 'workbox-sw.js')

workbox.setConfig({
  modulePathPrefix: PATH_PREFIX
});
const reFetch =  async (newUrl) => {

  return fetch(newUrl)
}
const isSupportWebp = (request) => {
  debugger
  return request.headers.get('accept').includes('webp')
}

const fixWebp = async ({ event }) => {
  const { request } = event
  if (!isSupportWebp(request)) {
    debugger
    event.respondWith(fetch(request))
  } else {
    debugger
    event.respondWith(reFetch(request.url.replace('png', 'webp')))
  }
}

workbox.routing.registerRoute(
  new RegExp('\\.png$'),
  fixWebp
);
