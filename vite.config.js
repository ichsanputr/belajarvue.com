import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import 'vite-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue'],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '@/stores/theme': [
            'useThemeStore',
          ],
        },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
