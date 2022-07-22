<template>
  <div class="category">
    <el-button
      v-for="item in list"
      :key="item.id"
      size="small"
      :type="toggleAttr(item.id).type"
      :text="toggleAttr(item.id).text"
      @click="toggleSelBtn(item.id)"
    >{{ item.value }}</el-button>
  </div>
</template>

<script setup>
/**
 * @props {string} v-model
 * @props {{ id: string, value: string }[]} list
 */
import { defineProps, defineEmits, computed, ref } from 'vue'

defineOptions({ name: 'Category' })

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  list: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['update:modelValue'])

// v-model
const vModel = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

/**
 * 点击按钮切换为被选中样式
 * @param {string} id props.modelValue
 */
function toggleAttr(id) {
  const isCorrect = vModel.value === id
  return {
    type: isCorrect ? 'primary' : '',
    text: !isCorrect
  }
}

/**
 * 切换按钮状态
 * @param {string} id props.modelValue
 */
function toggleSelBtn(id) {
  vModel.value = id
}
</script>


<style lang="less" scoped>
.el-button {
  border-radius: 16px;
  padding-left: 20px;
  padding-right: 20px;

  &.is-text {
    border-width: 1px;
  }
}
</style>