/*
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 22:08:15
 * @LastEditTime: 2020-07-26 11:51:52
 * @LastEditors: 雪中无处寻
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局配置文件
import $conf from '@com/config/config.js'
Vue.prototype.$conf = $conf

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
