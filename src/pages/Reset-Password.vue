<script setup>
import { useHead } from '@unhead/vue'
import LayoutDefault from '../layouts/Default.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
    title: "Forgot Password - Belajarvue" 
})
</script>

<template>
  <LayoutDefault>
    <ForgotPassword/>
  </LayoutDefault>
</template>
