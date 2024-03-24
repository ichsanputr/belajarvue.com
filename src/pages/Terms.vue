<script setup>
import { useHead } from '@unhead/vue'
import LayoutDefault from '@/layouts/Default.vue'
import Terms from '@/components/Pages/Terms.vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
    title: "Term & Conditions - Belajarvue" 
})
</script>

<template>
  <LayoutDefault>
    <Terms />
  </LayoutDefault>
</template>
