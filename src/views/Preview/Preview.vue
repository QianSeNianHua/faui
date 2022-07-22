<template>
  <div class="preview">
    <!-- 信息 -->
    <div class="header-box">
      <!-- 标题 -->
      <div class="header-title">
        <el-avatar :size="40" :src="avatarSrc">
          <el-icon :size="20">
            <Avatar />
          </el-icon>
        </el-avatar>
        <h1 class="package-name">aui-menu</h1>
      </div>

      <!-- 版本，时间信息 -->
      <div class="header-version">
        <tag use="version" value="v1.0.8" />
        <tag use="time" value="3 years old" />
      </div>
    </div>

    <el-tabs>
      <el-tab-pane label="Doc">
        <document-preview />
      </el-tab-pane>
      <el-tab-pane label="Code"></el-tab-pane>
      <el-tab-pane label="Example"></el-tab-pane>
      <el-tab-pane label="Dependencies"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Avatar } from '@element-plus/icons-vue'
import Tag from './modules/tag'
import DocumentPreview from './DocumentPreview'

defineOptions({ name: 'Preview' })

// 头像地址
const avatarSrc = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
</script>

<style lang="less" scoped>
.preview {
  margin: 0 80px;
}
.header-box {
  display: flex;
  flex-direction: column;
  padding: 30px 0 10px;
}
.header-title {
  display: flex;
  align-items: center;
}
.package-name {
  font-weight: bold;
  font-size: 40px;
  margin: 0;
  margin-left: 20px;
  line-height: 1;
  font-family: 'CircularProBlack';
}
.header-version {
  display: flex;
  align-items: center;
  padding: 12px 0;

  .tag:not(:first-child) {
    margin-left: 25px;
  }
}
</style>