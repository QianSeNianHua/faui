<template>
  <div class="navbar">
    <router-link to="/">
      <span class="site-name">faui</span>
    </router-link>
    <div class="quick-link">
      <el-input :suffix-icon="Search" />
      <a class="link-a" href="javascript:void(0);" target="_blank">文档</a>
      <a class="link-a" href="https://github.com/QianSeNianHua/faui" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'

defineOptions({
  name: 'Navbar'
})
</script>

<style lang="less" scoped>
.navbar {
  padding: 0 24px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaecef;
  box-sizing: border-box;
  background-color: #fff;
}
.site-name {
  font-weight: bold;
  font-size: 26px;
  color: #409eff;
  cursor: pointer;
}
.quick-link {
  display: flex;
  align-items: center;
}
.el-input :deep(.el-input__wrapper) {
  border-radius: 16px;
}
.link-a {
  flex-shrink: 0;
  color: inherit;
  font-weight: bold;
  font-size: 16px;
  margin: 0 12px;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #409eff;
  }
}
</style>