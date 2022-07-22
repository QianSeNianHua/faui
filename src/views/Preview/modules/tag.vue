<template>
  <div class="tag">
    <svg-icon :use="use" color="#6c707c" :size="18" />
    <span>{{ props.value }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  use: String,
  value: String
})
</script>

<style lang="less" scoped>
.tag {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #6c707c;

  & > span {
    margin-left: 7px;
  }
}
</style>