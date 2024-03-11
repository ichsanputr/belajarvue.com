<script setup>
import { useHead } from '@unhead/vue'
import Hero from '../components/Hero.vue'
import SeriesSlider from '../components/SeriesSlider.vue'
import SeriesLatest from '../components/SeriesLatest.vue'
import LayoutDefault from '../layouts/Default.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
    title: "Belajarvue - Platform Belajar Vue Js Bahasa Indonesia" 
})
</script>

<template>
  <LayoutDefault>
    <Hero />
    <SeriesSlider />
    <SeriesLatest />
  </LayoutDefault>
</template>
