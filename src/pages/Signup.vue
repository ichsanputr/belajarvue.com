<script setup>
import { useHead } from '@unhead/vue'
import LayoutDefault from '@/layouts/Default.vue'
import SignUp from '@/components/SignUp.vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
    title: "Daftar - Belajarvue" 
})
</script>

<template>
  <LayoutDefault>
    <SignUp/>
  </LayoutDefault>
</template>
