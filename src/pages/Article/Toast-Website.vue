<script setup>
import Header from '@/components/Header.vue'
import HeroArticle from '@/components/HeroArticle.vue'
import Footer from '@/components/Footer.vue'
import BodyArticle from '@/components/BodyArticle.vue';
import { useSeoMeta } from '@unhead/vue';

onMounted(() => {
  window.scrollTo(0, 0)
})

useSeoMeta({
  title: "Apa itu Toast di Website? - Belajarvue",
})
</script>

<template>
  <Header />
  <HeroArticle date="Minggu, 17 Maret 2024" title="Apa itu Toast di Website?"
    description="Apa itu Toast? Toast merupakan komponen bebentuk modal yang biasanya berukuran kecil yang berisi informasi singkat tanpa diikuti aksi seperti form, atau menampilkan sebuah aksi."
    series="Belajar Komponen Dasar Website" />
  <BodyArticle>
    <img class="thumbnail" src="https://ik.imagekit.io/uvma3bkbp/toast_pt4G2T-HE.jpg?updatedAt=1710655822748">
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