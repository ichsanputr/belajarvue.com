<script setup>
import { useHead } from '@unhead/vue'
import LayoutDefault from '../layouts/Default.vue'
import PrivacyPolicy from '../components/Pages/PrivacyPolicy.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useHead({
    title: "Privacy Policy - Belajarvue" 
})
</script>

<template>
  <LayoutDefault>
    <PrivacyPolicy />
  </LayoutDefault>
</template>
