<script setup>
import Header from '../components/Header.vue'
import ArticlesList from '../components/ArticlesList.vue'
import Footer from '../components/Footer.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})
</script>

<template>
  <Header />
  <ArticlesList />
  <Footer />
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>
