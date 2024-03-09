import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'
import { createI18n } from 'vue-i18n'

import './assets/main.css'

import en from './locales/en.json'
import id from './locales/id.json'

export const createApp = ViteSSG(
  App,
  {
    base: '/',
    routes,
  },
  ({ app }) => {
    const i18n = createI18n({
      legacy: false,
      locale: 'id',
      fallbackLocale: 'en',
      messages: {
        en,
        id
      },
    })

    app.use(i18n)
  },
)
