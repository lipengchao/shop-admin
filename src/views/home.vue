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
      <el-container style="height: 100%;">
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
        <el-main class="bg-light" style="padding-bottom: 40px; position: relative;">
          <!-- 面包屑导航 -->
          <div class="border-bottom breadcrumb-div mb-3 bg-white" v-if="breads.length > 0">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item
                v-for="(item, index) in breads"
                :key="item.name"
                :to="{ path: item.path }"
                @click="selectMenu(index + 1)"
               >
               {{item.title}}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 主内容 -->
          <router-view></router-view>
          <el-backtop target=".el-main" :bottom="100">
            <div
              style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
              }"
            >
              UP
            </div>
          </el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: '',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        navBar: this.$conf.navBar,
        breads: []
      }
    },
    created () {
      this.getRouterBreads()
      // 初始化选中菜单
      this._initNavBar()
    },
    watch: {
      '$route' (to, from) {
          // 本地存储
          localStorage.setItem('navActive', JSON.stringify({
            hIndex: this.navBar.active,
            sIndex: this.slideMenuActive
          }))
          this.getRouterBreads()
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
        if (key === '100-1') {
          return console.log('修改资料')
        }
        if (key === '100-2') {
          return console.log('退出登录')
        }
        this.navBar.active = key
        // 默认选中跳转到当前激活那个
        this.slideMenuActive = '0'
        if (this.slideMenus) {
          this.$router.push({
            name: this.slideMenus[this.slideMenuActive].pathname
          })
        }
      },
      /**
       * 侧边栏选择事件
       */
      slideSelect (key, keyPath) {
        this.slideMenuActive = key
        // 跳转到指定页面
        this.$router.push({
          name: this.slideMenus[key].pathname
        })
      },

      /**
       * 获取面包屑导航
       */
      getRouterBreads () {
        const b = this.$route.matched.filter(v => v.name)
        const arr = []
        b.forEach((v, k) => {
          // 过滤home和index
          if (v.name === 'index' || v.name === 'home') return
          arr.push({
            name: v.name,
            path: v.path,
            title: v.meta.title
          })
        })
        if (arr.length > 0) {
          arr.unshift({ name: 'index', path: '/index', title: '后台首页' })
        }

        this.breads = arr
      },

      selectMenu (index) {
        console.log(this.navBar.active, index)
        this.navBar.active = this.navBar.active - index
      },

      /**
       * 初始化选中菜单
       */
      _initNavBar () {
       let navObj =  localStorage.getItem('navActive')
       if (navObj) {
         navObj = JSON.parse(navObj)
         this.navBar.active = navObj.hIndex
         this.slideMenuActive = navObj.sIndex
       }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .breadcrumb-div {
    padding: 20px;
    margin: -20px;
  }
  .el-menu {
    height: 100%;
  }
</style>
