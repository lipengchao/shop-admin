<!--
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 16:35:27
 * @LastEditTime: 2020-07-26 11:55:39
 * @LastEditors: 雪中无处寻
-->
<template>
  <div>
    <el-container style="overflow: hidden; position: absolute; left: 0; right: 0; top: 0; bottom: 0;">
      <el-header class="d-flex align-items-center" style="background: #545c64;">
        <a class="h5 text-light mb-0 mr-auto">{{$conf.logo}}</a>
         <el-menu
          :default-active="navBar.active"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item :index="index + ''" v-for="(item, index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
          <el-submenu index="100">
            <template slot="title">
              <el-avatar size="small" :src="circleUrl"></el-avatar>
              lipc
            </template>
            <el-menu-item index="100-1">修改</el-menu-item>
            <el-menu-item index="100-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container style="height: 100%; padding-bottom: 60px">
        <!-- 侧边布局 -->
        <el-aside width="200px">
          <el-menu
            :default-active="slideMenuActive"
            @select="slideSelect"
           >
            <el-menu-item :index="index + ''" v-for="(item, index) in slideMenus" :key="index">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主布局 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      navBar: {
        active: '0',
        list: [
          {
            name: '首页',
            subActive: '0',
            submenu: [
              {
                icon: 'el-icon-s-home',
                name: '后台首页'
              },
              {
                icon: 'el-icon-s-claim',
                name: '商品列表'
              }
            ]
          },
          {
            name: '商品',
            subActive: '0',
            submenu: [
              {
                icon: 'el-icon-s-home',
                name: '后台首页'
              },
              {
                icon: 'el-icon-s-claim',
                name: '商品列表'
              }
            ]
          },
          { name: '订单' },
          { name: '会员' },
          { name: '设置' }
        ]
      }
    }
  },
  computed: {
    // 当前激活的navbar
    currenNavBar () {
      return this.navBar.list[this.navBar.active] || {}
    },

    // 根据header计算当前要显示的侧边栏
    slideMenus () {
      return this.currenNavBar.submenu || []
    },

    // 侧边栏当前激活的navbar索引
    slideMenuActive: {
      get () {
        return this.currenNavBar.subActive || '0'
      },
      set (val) {
        this.currenNavBar.subActive = val
      }
    }
  },
  methods: {
    /**
     * 头部导航栏选择事件
     * @param {Object} key
     * @param {Object} keyPath
     */
    handleSelect (key, keyPath) {
      this.navBar.active = key
    },
    /**
     * 侧边栏选择事件
     */
    slideSelect (key, keyPath) {
      this.slideMenuActive = key
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
