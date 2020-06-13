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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
