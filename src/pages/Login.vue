<script setup>
import { useHead } from '@vueuse/head'
import LayoutDefault from '@/layouts/Default.vue'
import Login from '@/components/Login.vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
  title: "Kakakak"
})
</script>

<template>
  <LayoutDefault>
    <Login/>
  </LayoutDefault>
</template>
