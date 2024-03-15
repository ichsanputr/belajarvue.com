<script setup>
import { useHead } from '@unhead/vue'
import Hero from '../components/Hero.vue'
import SeriesSlider from '../components/SeriesSlider.vue'
import ArticlesLatest from '../components/ArticlesLatest.vue'
import LayoutDefault from '../layouts/Default.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

useHead({
    title: "Belajarvue - Platform Belajar Vue Js Bahasa Indonesia" 
})

const base_url = import.meta.env.VITE_BASE_URL_API
</script>

<template>
  <LayoutDefault>
    {{ base_url }}
    <Hero />
    <SeriesSlider />
    <ArticlesLatest />
  </LayoutDefault>
</template>
