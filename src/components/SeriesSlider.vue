<script setup>
import { ref, onMounted, nextTick } from 'vue'
const series = ref([
    {
        title: 'Vue.js 3 Fundamental',
        description: "Tingkatkan level keahlian Anda melalui screencast dan artikel yang mendalam. Pelajari beragam topik"
    }
])

onMounted(async () => {
    await nextTick()
    document.getElementById("scrollSeries").scrollLeft += document.getElementById("scrollSeries").scrollWidth / 2;
})
</script>

<template>
    <div class="bg-[#10162F] py-8">
        <div class="w-[85%] mx-auto mt-4 mb-8">
            <h2 class="text-white font-medium text-[20px]">Ingin belajar apa hari ini?</h2>
            <p class="text-white text-[14px] mt-2">Hei, ada banyak pilihan menarik di sini, loh! Yuk, temukan sesuatu
                yang seru untuk dipelajari.</p>
        </div>
        <div class="flex w-full justify-between items-center overflow-x-scroll my-12" id="scrollSeries" style="scrollbar-width: none">
            <div v-for="(i,index) in 15" :class="{'ml-10' : index == 0}"
                class="shadow bg-white relative w-[300px] mr-10 rounded-sm flex flex-none h-[200px] flex-col py-6 space-y-1">
                <div class="block px-4 mt-6">
                    <div class="font-semibold text-[16px]">Vue.js + Supabase</div>
                    <div class="text-[14px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div class="absolute top-0 bg-[#EAFDC6] w-full rounded-b-md text-center font-medium py-1">
                    12 article
                </div>
                <div class="absolute text-[14px] bottom-0 w-full rounded-b-md px-4 pb-2 border-t-2 border-dotted font-medium py-1">
                    Vue.js 3, Supabase, Firebase, Pinia
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
}</style>