<script setup>
import LayoutDefault from '@/layouts/Default.vue'
import Login from '@/components/Login.vue'
import { useSeoMeta } from '@unhead/vue';

onMounted(() => {
  window.scrollTo(0,0)
})

useSeoMeta({
  title: "Kakakak",
  description: "Lahhhh"
})
</script>

<template>
  <LayoutDefault>
    <Login/>
  </LayoutDefault>
</template>
