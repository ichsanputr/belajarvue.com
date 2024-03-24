import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return { theme: 'default' }
  },
  persist: true
})