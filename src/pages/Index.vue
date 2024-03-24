<script setup>
import { useHead } from '@unhead/vue'
import Hero from '@/components/Hero.vue'
import SeriesSlider from '@/components/SeriesSlider.vue'
import ArticlesLatest from '@/components/ArticlesLatest.vue'
import LayoutDefault from '@/layouts/Default.vue'

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
    <ArticlesLatest />
  </LayoutDefault>
</template>
