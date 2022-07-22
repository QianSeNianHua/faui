import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import setRouter from '@/router/index'
import setSvgIcon from '@/components/svg-icon'
import 'virtual:svg-icons-register'

const app = createApp(App)

setRouter(app)
setSvgIcon(app)

app.mount('#app')
