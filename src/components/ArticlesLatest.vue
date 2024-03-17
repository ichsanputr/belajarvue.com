<script setup>
</script>
<template>
    <div class="bg-[#FBEEE4] py-8 pb-20">
        <div class="mx-auto w-full md:w-[85%] pb-8">
            <div class="mt-4 mb-8 md:mx-0 mx-8">
                <h2 class="font-semibold text-[20px] mb-1">Artikel Terbaru</h2>
                <p class="text-[14px] mt-2">Artikel terbaru yang kami terbitkan.</p>
            </div>
            <div class="w-full px-8 md:px-0 mx-auto block md:grid grid-cols-3 gap-16">
                <div v-for="i in 1" class="w-full cursor-pointer my-10 md:my-0" @click="$router.push('/article/toast-website')">
                    <img width="100%" class="rounded-lg shadow-md"
                        src="https://ik.imagekit.io/uvma3bkbp/toast_pt4G2T-HE.jpg?updatedAt=1710655822748" />
                    <div class="my-3 font-semibold text-[18px] mt-6">Apa itu Toast di Website?</div>
                    <div class="my-3 font-normal text-[14px] md:text-[16px]">Toast merupakan komponen bebentuk modal yang biasanya berukuran kecil yang berisi informasi singkat tanpa diikuti aksi seperti form, atau menampilkan...</div>
                </div>
            </div>
            <div @click="$router.push('/article')" class="cursor-pointer float-right mx-8 md:mx-0 text-[#4349ff] md:text-[16px] text-[14px] font-medium flex items-center mt-0 md:mt-3 hover:bg-[white] hover:shadow px-2 py-2 rounded-lg">
                <span class="mr-1 text-sm">Lihat semua</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01" />
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
}
</style>