<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disclaimer from '../components/Pages/Disclaimer.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})
</script>

<template>
  <Header />
  <Disclaimer />
  <Footer />
</template>
