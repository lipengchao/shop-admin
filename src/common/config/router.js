/*
 * @Description: 路由配置
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 16:55:47
 * @LastEditTime: 2020-06-13 22:35:25
 * @LastEditors: 雪中无处寻
 */
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: 'home',
    children: [
      {
        // path: '/index',
        // name: 'index',
        // component: () => import('@views/index/index.vue')
        meta: { title: '后台首页' },
        component: 'index/index'
      },
      {
        meta: { title: '商品列表' },
        component: 'shop/goods/list'
      }
    ]
  },
  {
    // path: '/login',
    // name: 'login',
    // component: () => import('@views/login/index.vue')
    meta: { title: '登录页' },
    component: 'login/index'
  },
  {
    path: '*',
    redirect: '/index'
  }
]

/**
 * 获取路由信息方法
 */
const getRoutes = () => {
  createRoute(routes)
  return routes
}

/**
 * 自动生成路由
 * @param {*} arr
 */
const createRoute = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].component) return
    // 去除index
    const val = getValue(arr[i].component)
    // 生成name
    arr[i].name = arr[i].name || val.replace(/\//g, '_')
    // 生成path
    arr[i].path = arr[i].path || `/${val}`
    // 自动生成component
    const componentFun = import(`@views/${arr[i].component}.vue`)
    // 路由中的component赋值
    arr[i].component = () => componentFun
    // 判断子路由是否存在并在数组是不是大于0，如果大于0递归调用
    if (arr[i].children && arr[i].children.length > 0) {
      createRoute(arr[i].children)
    }
  }
}

/**
 * 去除index
 * @param {*} str
 */
const getValue = (str) => {
  // 获取最后一个/的索引
  const index = str.indexOf('/')
  // 获取最后一个/后面的值
  const val = str.substring(index + 1, str.length)
  // 判断是不是index结尾
  if (val === 'index') {
    return str.substring(index, -1)
  }
  return str
}

export default getRoutes()
