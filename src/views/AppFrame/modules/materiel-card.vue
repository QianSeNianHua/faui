<template>
  <div class="materiel-card">
    <!-- 图片 -->
    <div class="item-img">
      <el-image style="width: 100%; height: 100%;" :src="imgSrc" fit="cover">
        <template #error>
          <div class="error-wrapper">
            <el-icon :size="30" color="#c7c7c7">
              <Picture />
            </el-icon>
          </div>
        </template>
      </el-image>
    </div>

    <!-- 内容 -->
    <div class="item-info">
      <!-- 用户头像 -->
      <el-avatar :size="38">
        <el-icon :size="20">
          <Avatar />
        </el-icon>
      </el-avatar>
      <!-- 标题 -->
      <div class="info-content">
        image
        v1.0.2
        Template component for images.
      </div>
    </div>

    <!-- 操作 -->
    <div class="item-action">
      <el-tag type="info" effect="plain" round size="small">react</el-tag>
      <span class="action-download">
        <el-icon :size="12">
          <Download />
        </el-icon>
        {{estimatNum(23)}}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Picture, Avatar, Download } from '@element-plus/icons-vue'
import { estimatNum } from '@/utils/baseUtil'

defineOptions({ name: 'MaterielCard' })

const imgSrc = ref(
  'https://screenshots.imgix.net/danilowoz/react-content-loader/content-loader/4.2.2/5d594ea2766dc90015616d69/85aa25ab-b3f5-4858-82c0-da9b676e1ecb.png?w=300&h=200&fit=fillmax&fm=webp'
)
</script>

<style lang="less" scoped>
.materiel-card {
  width: 200px;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgb(163 177 191 / 35%);
  background: #fafafa;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 3;

  &:hover {
    box-shadow: 0 8px 24px rgb(51 126 204 / 35%);
  }
}
.item-img {
  width: inherit;
  height: 120px;
  padding: 4px;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
}
.error-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-info {
  position: relative;
  width: inherit;
  height: 133px;
  padding: 21px 16px 16px;
  line-height: 23px;
  box-sizing: border-box;
}
.el-avatar {
  position: absolute;
  top: -19px;
  right: 19px;
  background-color: #c7c7c7;
}
.info-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-weight: bold;
}
.item-action {
  display: flex;
  justify-content: space-between;
  width: inherit;
  height: 32px;
  padding: 0 16px 16px;
  box-sizing: border-box;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
.el-tag {
  height: 16px;

  &:deep(.el-tag__content) {
    height: 14px;
  }
}
.action-download {
  display: flex;
  align-items: center;
}
</style>