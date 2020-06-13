/*
 * @Description: 路由配置
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 16:55:47
 * @LastEditTime: 2020-06-13 17:18:06
 * @LastEditors: 雪中无处寻
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('@views/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@views/index/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/login/index.vue')
  },
  {
    path: '*',
    redirect: '/index'
  }
]

export default routes
