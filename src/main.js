import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import routes from '~pages'
import vue3StarRatings from "vue3-star-ratings";
import axios from 'axios'

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
    const head = createHead()
    const pinia = createPinia()
    const i18n = createI18n({
      legacy: false,
      locale: 'id',
      fallbackLocale: 'en',
      messages: {
        en,
        id
      },
    })
  
    app.use(pinia)
    app.use(head)
    app.use(i18n)
    app.component("vue3-star-ratings", vue3StarRatings)

    const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL_API
    });

    app.provide('axios', axiosInstance);
  },
)

