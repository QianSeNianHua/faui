<template>
  <div class="document-box">
    <iframe ref="elIframe" src="http://127.0.0.1:5173/#/" frameborder="0" :height="iframeHeight" @load="onLoadIframe"></iframe>
    <div class="doc-info">
      <!-- 安装信息 -->
      <file-import />

      <!-- 总下载量，版本 -->
      <div class="flex-row-2">
        <file-info-row title="总下载量" value="15" />
      </div>
      <div class="flex-row-2">
        <file-info-row title="版本">
          <el-select v-model="versionVal">
            <el-option v-for="item in versionList" :key="item.id" :value="item.id" :label="item.value" />
          </el-select>
        </file-info-row>
      </div>

      <!-- 文件信息 -->
      <div class="flex-row-2">
        <file-info-row title="文件大小" value="19.4KB" />
        <file-info-row title="文件数量" value="2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FileImport from './modules/file-import'
import FileInfoRow from './modules/file-info-row'
import { getIframeHeight } from '@/utils/baseUtil'

defineOptions({ name: 'DocumentPreview' })

// 版本
const versionVal = ref('1.0.8')
const versionList = [
  { id: '1.0.0', value: '1.0.0' },
  { id: '1.0.2', value: '1.0.2' },
  { id: '1.0.4', value: '1.0.4' },
  { id: '1.0.6', value: '1.0.6' },
  { id: '1.0.8', value: '1.0.8' }
]

const elIframe = ref(null)
let iframeHeight = ref(0)
// iframe加载完成触发
function onLoadIframe() {
  setTimeout(() => {
    let tmp = getIframeHeight(elIframe.value)
    iframeHeight.value = tmp
  }, 400)
}
</script>

<style lang="less" scoped>
.document-box {
  display: flex;
}
iframe {
  flex: 1;
  margin-right: 40px;
}
.doc-info {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 400px;
}
.flex-row-2 {
  display: flex;
  border-bottom: 1px solid #eaecef;

  .row-box {
    flex: 1;
  }
}
.el-select {
  margin: 8px 0 16px;
}
</style>