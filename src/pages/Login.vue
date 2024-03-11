<script setup>
import { useHead } from '@unhead/vue'
import LayoutDefault from '../layouts/Default.vue'
import Login from '../components/Login.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
    title: "Login - Belajarvue" 
})
</script>

<template>
  <LayoutDefault>
    <Login/>
  </LayoutDefault>
</template>
