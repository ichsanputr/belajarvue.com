import { defineStore } from 'pinia'

export const useSignupStore = defineStore('signup', {
  state: () => {
    return { password: '' }
  },
})