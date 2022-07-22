import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const FILENMAE = fileURLToPath(import.meta.url)
const DIRNAME = path.dirname(FILENMAE)

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(DIRNAME, 'src')
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue']
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    DefineOptions(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(DIRNAME, 'src/assets/svg')],
      symbolId: 'fa-[dir]-[name]'
    })
  ]
})
