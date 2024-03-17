<script setup>
import Header from '../../components/Header.vue'
import HeroArticle from '../../components/HeroArticle.vue'
import Footer from '../../components/Footer.vue'
import BodyArticle from '@/components/BodyArticle.vue';

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <Header />
  <HeroArticle />
  <BodyArticle>
    <p>Dalam artikel ini kita akan belajar bagaimana cara men-deploy Next.js App menggunakan Laravel Forge.
      Tentu ini sangat mudah dilakukan karena pada dasarnya, kita sendiri bisa membuat template nginx
      sendiri di dalam dashboard nya.</p>
    <h2 class="font-semibold">Setup Nginx Template</h2>
    <p v-for="i in 7">Dalam artikel ini kita akan belajar bagaimana cara men-deploy Next.js App menggunakan
      Laravel Forge. Tentu ini sangat mudah dilakukan karena pada dasarnya, kita sendiri bisa membuat
      template nginx sendiri di dalam dashboard nya.</p>
    <CodeHighlighter lang="php" code="echo 'hello world';" />
    <p v-for="i in 2">Dalam artikel ini kita akan belajar bagaimana cara men-deploy Next.js App menggunakan
      Laravel Forge. Tentu ini sangat mudah dilakukan karena pada dasarnya, kita sendiri bisa membuat
      template nginx sendiri di dalam dashboard nya.</p>
    <div class="divider text-sm py-9 font-medium">Selesai 🎉</div>
  </BodyArticle>
  <Footer />
</template>