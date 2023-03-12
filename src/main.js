import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// if (navigator.serviceWorker) {
//   debugger
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/sw.js').then(function() {
//       console.log('Service Worker 注册成功！')
//     }).catch(function(err) {
//       console.error('Service Worker 注册失败！', err);
//     });
//   });
// } else {
//   console.error('当前浏览器不支持serviceWorker，或者您不在https或localhost下访问')
// }
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

