/*
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 15:47:28
 * @LastEditTime: 2020-06-13 17:01:52
 * @LastEditors: 雪中无处寻
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@com/config/router'

Vue.use(VueRouter)

// 防止重复点击路由时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
