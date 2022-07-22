<template>
  <div class="package-copy">
    <h1 class="title">faui</h1>
    <div class="content">
      <p class="content-desc">
        Import
        <span class="spec-name">aui-menu</span> as source code
      </p>
      <el-input value="faui i aui-menu" readonly>
        <template #append>
          <el-button :icon="CopyDocument" type="primary" @click="copyCommand">Copy</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CopyDocument } from '@element-plus/icons-vue'

defineOptions({ name: 'FileImport' })

const cmdVal = ref('faui i aui-menu')

/**
 * 复制命令
 */
function copyCommand() {
  navigator?.clipboard?.writeText(cmdVal.value)
  ElMessage.success('复制成功')
}
</script>

<style lang="less" scoped>
.package-copy {
  width: 400px;
  border: 1px solid #eaecef;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #f6f6f6;
  box-sizing: border-box;
}
.title {
  height: 50px;
  padding: 0 40px;
  line-height: 50px;
  margin: 0;
  border-bottom: 2px solid #eaecef;
  color: rgba(0, 0, 0, 0.7);
}
.content {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 15px;
}
.content-desc {
  font-size: 18px;
  margin: 15px 0;
}
.spec-name {
  color: #409eff;
}
:deep(.el-input-group__append button.el-button) {
  .removeCss {
    border-color: var(--el-button-border-color);
    background-color: var(--el-button-bg-color);
    color: var(--el-button-text-color);
    display: flex;
    align-items: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .removeCss();
  &:hover {
    .removeCss();
    border-color: var(--el-button-hover-border-color);
    background-color: var(--el-button-hover-bg-color);
    color: var(--el-button-hover-text-color);
  }
  &:active {
    border-color: var(--el-button-active-border-color);
    background-color: var(--el-button-active-bg-color);
    color: var(--el-button-active-text-color);
  }
}
:deep(.el-input__inner) {
  font-family: 'Consolas';
}
</style>