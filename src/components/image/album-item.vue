<template>
  <li
    class="list-group-item list-group-item-action d-flex align-items-center"
    style="cursor: pointer"
    @click.stop="albumChange(index)"
    :class="{'active sum-active': active}"
  >
    {{item.name}}
    <el-dropdown class="ml-auto">
      <span class="btn btn-light btn-sm border">
        {{item.num}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.stop.native="openAlbumModal({index, item})">修改</el-dropdown-item>
        <el-dropdown-item @click.stop.native="albumDel(index)">删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </li>
</template>

<script>
  export default {
    name: 'album-item',
    props: {
      item: Object,
      index: Number,
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      albumChange(index) {
        this.$emit('albumChange', index)
      },
      openAlbumModal({ index, item }) {
        this.$emit('openAlbumModal', { index, item })
      },
      albumDel(index) {
        this.$emit('albumDel', index)
      }
    }
  }
</script>

<style scoped>

</style>
