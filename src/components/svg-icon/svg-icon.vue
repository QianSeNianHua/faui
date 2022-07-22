<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.size" :height="props.size">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup>
/**
 * @props {string} use svg名称，路径在 src/assets/svg
 * @props {string} color 填充颜色
 * @props {number} size 大小
 */
import { computed } from 'vue'

defineOptions({ name: 'SvgIcon' })

const props = defineProps({
  use: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#fff'
  },
  size: {
    type: Number,
    default: 20
  }
})

const symbolId = computed(() => `#fa-${props.use}`)
</script>
