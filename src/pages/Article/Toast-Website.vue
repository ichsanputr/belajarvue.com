<script setup>
import Header from '@/components/Header.vue'
import HeroArticle from '@/components/HeroArticle.vue'
import Footer from '@/components/Footer.vue'
import BodyArticle from '@/components/BodyArticle.vue';
import CodeHighlighter from '@/components/Partials/CodeHighlighter.vue';

const code = ref(`import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();
// Memunculkan toast
let instance = $toast.success('You did it!');

// Menutup toast setelah 3 detik
setTimeout(() => {
  $toast.clear();
}, 3000)`)

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <Header />
  <HeroArticle date="Minggu, 17 Maret 2024" title="Apa itu Toast di Website?"
    description="Apa itu Toast? Toast merupakan komponen berbentuk modal yang biasanya berukuran kecil yang berisi informasi singkat tanpa diikuti aksi seperti form, atau menampilkan sebuah aksi."
    series="Belajar Komponen Dasar Website" />
  <BodyArticle>
    <img class="thumbnail" src="https://ik.imagekit.io/uvma3bkbp/toast_pt4G2T-HE.jpg?updatedAt=1710655822748">
    <p>Toast merupakan komponen berbentuk modal yang biasanya berukuran kecil yang berisi informasi singkat tanpa
      diikuti oleh sebuah aksi layaknya form. Kita pasti sudah sering melihat komponen ini di berbagai framework
      frontend populer seperti Vue.js maupun React.js</p>
    <p>Toast digunakan untuk menampilkan sebuah informasi ringan dari sebuah event yang telah dilakukan sebelumnya. Toast sering digunakan untuk aplikasi
      berbasis crud dimana sistem tersebut pastinya memiliki banyak sekali aksi didalamnya.
    </p>
    <p>Notifikasi toast bisa ditampilkan dalam bentuk chip dengan warna background yang custom dengan informasi teks didalamnya. Biasanya
      sebuah toast hanyak memiliki 1 aksi yaitu <span class="italic">Closable</span> baik dalam bentuk button X atau <span class="italic">Swipeable</span>.
    </p>
    <h2 class="font-semibold">Kapan waktu penggunaanya?</h2>
    <p>Sebagai frontend developer atau UI/UX kita harus mempertimbangkan tempat dan waktu yang tepat untuk menggunakan 
      toast notifikasi ini, anda bisa menggunakan toast notifikasi di beberapa kondisi berikut ini.
    </p>
    <ul class="list-inside">
      <li>Menampilkan pesan error, sukses, atau informasi terkait dengan sebuah aksi yang telah dilakukan user</li>
      <li>Menampilkan status informasi realtime sistem, contohnya seperti jika server down atau internet hilang dsb</li>
      <li>Memberikan 2 opsi antara konfirmasi atau membatalkan sebuah aksi seperti saat kita mengirim sebuah email melalui gmail</li>
      <li>Informasi yang memiliki tingkat rendah untuk ditampilkan</li>
    </ul>
    <p>Penggunaan toast ini memanglah sangat bermanfaat dengan dibalut ui nya yang simpel, tetapi menggunakan toast terlalu banyak pada satu halaman
      dapat mengganggu kenyamanan pengguna website anda.
    </p>
    <h2 class="font-semibold">Contoh penggunaan Toast dengan Vue JS</h2>
    <p>
      Ada banyak package yang bisa kita gunakan untuk menampilkan toast pada aplikasi kita, contohnya kita bisa memakai package <span class="italic">vue-toast-notification</span>.
      Kode di bawah ini bisa anda pakai untuk menampilkan toast sukses dan error dengan interval 5 detik dan aksi close.
    </p>
    <CodeHighlighter :code="code" title="Vue" lang="js"/>
    <p>
      Jika dijalankan maka toast akan muncul di posisi yang anda tentukan dengan interval yang anda tentukan juga seperti gambar di bawah ini.
    </p>
    <img class="mx-auto" src="https://i.ibb.co/ydkyzMQ/image.png"/>
    </BodyArticle>
  <Footer />
</template>