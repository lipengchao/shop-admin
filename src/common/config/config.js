export default {
  logo: 'shop-Admin',
  navBar: {
    active: '0',
    list: [
      {
        name: '首页',
        subActive: '0',
        submenu: [
          {
            icon: 'el-icon-s-home',
            name: '后台首页',
            pathname: 'index'
          },
          {
            icon: 'el-icon-s-claim',
            name: '商品列表',
            pathname: 'shop_goods_list'
          }
        ]
      },
      {
        name: '商品',
        subActive: '1',
        submenu: [
          {
            icon: 'el-icon-s-claim',
            name: '商品列表',
            pathname: 'shop_goods_list'
          }
        ]
      },
      { name: '订单' },
      { name: '会员' },
      { name: '设置' }
    ]
  }
}
