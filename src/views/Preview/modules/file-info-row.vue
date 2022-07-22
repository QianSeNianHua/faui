<template>
  <div class="row-box">
    <h3>{{ title }}</h3>
    <slot>
      <p>{{ value }}</p>
    </slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineOptions({ name: 'FileInfoRow' })

defineProps({
  title: String,
  value: String
})
</script>

<style lang="less" scoped>
.row-box {
  & > h3 {
    padding-top: 8px;
    margin-top: 8px;
    font-size: 16px;
    color: #757575;
  }
  & > p {
    margin: 8px 0 16px;
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>