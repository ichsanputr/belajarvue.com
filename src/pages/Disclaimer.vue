<script setup>
import LayoutDefault from '../layouts/Default.vue'
import Disclaimer from '../components/Pages/Disclaimer.vue'
import { useSeoMeta } from '@unhead/vue';

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0,0)
})

useSeoMeta({
  title: "Disclaimer - Belajarvue",
})
</script>

<template>
  <LayoutDefault>
    <Disclaimer />
  </LayoutDefault>
</template>
