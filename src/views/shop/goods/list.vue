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
            <el-input class="goods-search" v-model="queryFrom.name" placeholder="请求输入商品名称" size="mini"></el-input>
            <el-button type="info" size="mini">搜索</el-button>
            <el-button size="mini" @click="superSearch = true">高级搜索</el-button>
          </div>
        </div>
        <el-card class="box-card" v-show="superSearch">
          <div slot="header" class="search-card-header">
            <span>高级收搜</span>
            <el-button type="text" @click="superSearch = false">收起</el-button>
          </div>
          <el-form inline ref="form" :model="queryFrom" label-width="80px">
            <el-form-item label="商品名称">
              <el-input v-model="queryFrom.name" placeholder="请输入商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品编码">
              <el-input v-model="queryFrom.code" placeholder="请输入商品编码"></el-input>
            </el-form-item>
            <el-form-item label="商品类型">
              <el-select v-model="value" filterable placeholder="请选择商品类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品分类">
              <el-input v-model="queryFrom.category"></el-input>
            </el-form-item>
            <el-form-item class="form-btn">
              <el-button type="info" size="mini" @click="searchEvent">搜索</el-button>
              <el-button size="mini" @click="clearSearch">清空筛选条件</el-button>
            </el-form-item>
          </el-form>
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
      queryFrom: {
        name: '',
        code: '',
        type: '',
        category: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
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
    },

    /**
     * 搜索
     */
    searchEvent() {},

    /**
     * 清空搜索条件
     */
    clearSearch() {
      this.queryFrom = this.$options.data().queryFrom
      this.superSearch = false
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
  .form-btn {
    margin-left: 20px;
  }
</style>
