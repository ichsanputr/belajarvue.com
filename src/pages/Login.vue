<script setup>
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Footer from '../components/Footer.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})
</script>

<template>
  <Header />
  <Login />
  <Footer />
</template>
