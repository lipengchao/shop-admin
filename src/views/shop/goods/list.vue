<!--
 * @Description:
 * @Author: 雪中无处寻
 * @Date: 2020-06-13 22:23:35
 * @LastEditTime: 2020-06-13 22:23:47
 * @LastEditors: 雪中无处寻
-->
<template>
  <div class="goods-wrapper">
    <el-tabs v-model="tabIndex" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabBars"
        :label="item.name"
        :key="index"
      >
        <div class="d-flex align-items-center">
          <!-- 左边 -->
          <el-button type="success" size="mini">发布商品</el-button>
          <el-button type="danger" size="mini">批量删除</el-button>
          <!-- 右边 -->
          <div class="ml-auto" v-show="!superSearch">
            <el-input class="goods-search" v-model="form.keyword" placeholder="请求输入商品名称" size="mini"></el-input>
            <el-button type="info" size="mini">搜索</el-button>
            <el-button size="mini" @click="superSearch = true">高级搜索</el-button>
          </div>
        </div>
        <el-card class="box-card" v-show="superSearch">
          <div slot="header" class="search-card-header">
            <span>高级收搜</span>
            <el-button type="text" @click="superSearch = false">收起</el-button>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  data () {
    return {
      tabIndex: 0,
      tabBars: [
        { name: '审核中' },
        { name: '出售中' },
        { name: '已下架' },
        { name: '库存预警' },
        { name: '回收站' }
      ],
      superSearch: false,
      form: {
        keyword: ''
      }
    }
  },
  methods: {
    /**
     * 点击tab加载数据
     * @param tab
     * @param event
     */
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .goods-wrapper {
    margin: -20px;
    margin-top: -1rem;
    padding: 0 20px;
    background-color: #fff;
  }
  ::v-deep .el-tabs {
    padding-bottom: 20px;
  }
  .goods-search {
    margin-right: 4px;
    width: 200px;
  }
  .box-card {
    margin-top: 20px;
  }
  ::v-deep .el-card__header {
    padding: 8px 10px !important;
  }
  .search-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
