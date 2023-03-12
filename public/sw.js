
const PATH_PREFIX = 'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/'
importScripts(PATH_PREFIX + 'workbox-sw.js')

workbox.setConfig({
  modulePathPrefix: PATH_PREFIX
});
const reFetch =  async (newUrl) => {

  return fetch(newUrl)
}
const isSupportWebp = () => {
  return window.document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
}

const fixWebp = async ({ event }) => {
  const { request } = event
  if (isSupportWebp()) {
    event.respondWith(fetch(request))
  } else {
    event.respondWith(reFetch(request.url.replace('png', 'webp')))
  }
}

workbox.routing.registerRoute(
  new RegExp('\\.png$'),
  fixWebp
);
