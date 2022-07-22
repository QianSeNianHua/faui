<template>
  <!-- 搜索 -->
  <div class="category-box">
    <category v-model="rankVal" :list="rankList" />
    <category v-model="frameVal" :list="frameList" />
    <category v-model="typeVal" :list="typeList" />
  </div>
  <!-- 列表 -->
  <div class="materiel-box">
    <template v-for="item in cardList" :key="item">
      <router-link to="/preview">
        <materiel-card />
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import Category from './modules/category'
import MaterielCard from './modules/materiel-card'

defineOptions({ name: 'MaterielList' })

// 类型列表
const typeVal = ref('all')
const typeList = ref([
  { id: 'all', value: '全部' },
  { id: 'button', value: '按钮' },
  { id: 'button1', value: '按钮1' },
  { id: 'button2', value: '按钮2' },
  { id: 'button3', value: '按钮3' }
])

// 排序列表
const rankVal = ref('latest')
const rankList = ref([
  { id: 'latest', value: '最新的' },
  { id: 'active', value: '最活跃的' }
])

// 框架列表
const frameVal = ref('vue')
const frameList = ref([
  { id: 'vue', value: 'Vue' },
  { id: 'react', value: 'React' }
])

// 卡片列表
const cardList = ref([1, 2, 3, 4, 5, 6])
</script>

<style lang="less" scoped>
.limitWidth {
  max-width: 1200px;
  margin: 0 auto;
}

.category-box {
  padding: 20px 0;
  .limitWidth();
}
.category:not(:last-child) {
  margin-bottom: 12px;
}
.materiel-box {
  .limitWidth();
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 32px;
  padding: 15px 0 20px;
}
</style>