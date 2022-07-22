import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'MaterielList', component: () => import('@/views/AppFrame/MaterielList') },
  { path: '/preview', name: 'Preview', component: () => import('@/views/Preview/Preview') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default function setRouter(app) {
  app.use(router)
}
