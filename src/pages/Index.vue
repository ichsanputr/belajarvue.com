<script setup>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import SeriesSlider from '../components/SeriesSlider.vue'
import SeriesLatest from '../components/SeriesLatest.vue'
import Footer from '../components/Footer.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})
</script>

<template>
  <Header />
  <Hero />
  <SeriesSlider/>
  <SeriesLatest />
  <Footer />
</template>
