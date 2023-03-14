let isRegistring = true
const register = async () => {
  if (navigator.serviceWorker) {
    await navigator.serviceWorker.register('/sw.js')
    isRegistring = false
  } else {
    console.error('当前浏览器不支持serviceWorker，或者您不在https或localhost下访问')
  }
}
register()
while(isRegistring) {
  await new Promise(resolve => {
    let i = setInterval(() => {
          if (!isRegistring) {
              clearInterval(i)
              resolve()
          }
      }, 10)
  })
  console.log(isRegistring)
}


