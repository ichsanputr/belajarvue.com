import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import Toast from "vue-toastification";
import routes from '~pages'
import vue3StarRatings from "vue3-star-ratings";
import VOtpInput from "vue3-otp-input";
import axios from 'axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/main.css'
import "vue-toastification/dist/index.css";

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

    pinia.use(piniaPluginPersistedstate)
  
    app.use(pinia)
    app.use(Toast);
    app.use(head)
    app.use(i18n)
    app.component("vue3-star-ratings", vue3StarRatings)
    app.component('v-otp-input', VOtpInput)

    const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL_API
    });

    app.provide('axios', axiosInstance);
  },
)

