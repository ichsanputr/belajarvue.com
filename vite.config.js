import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import 'vite-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
