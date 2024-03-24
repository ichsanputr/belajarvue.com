<script setup>
const series = ref([
    {
        title: 'Vue.js 3 Fundamental',
        description: "Tingkatkan level keahlian Anda melalui screencast dan artikel yang mendalam. Pelajari beragam topik"
    }
])

onMounted(async () => {
    await nextTick()
})
</script>

<template>
    <div class="bg-[#10162F] py-8">
        <div class="w-[85%] mx-auto mt-4 mb-8">
            <h2 class="text-white font-medium text-[20px] mb-1">Ingin belajar apa hari ini?</h2>
            <p class="text-white text-[14px]">Belajar materi secara bertahap dengan kumpulan artikel yang berkelanjutan dalam bentuk series.</p>
        </div>
        <div class="w-[85%] mx-auto flex justify-between items-center overflow-x-scroll my-12" id="scrollSeries" style="scrollbar-width: none">
            <div v-for="(i,index) in 8" @click="$router.push('/series')"
                class="shadow bg-white relative w-[300px] mr-10 rounded-lg flex flex-none h-[380px] flex-col py-0 space-y-0">
                <div class="bg-[#EAFDC6] text-sm w-full rounded-t-lg text-center font-medium py-1">
                    1 artikel
                </div>
                <div class="mb-8">
                    <img src="https://ik.imagekit.io/uvma3bkbp/Blue%20and%20Yellow%20Playful%20Doodle%20Digital%20Brainstorm%20Presentation_iWrSwqpUm.jpg?updatedAt=1710649477016">
                </div>
                <div class="block px-4 mt-8">
                    <div class="font-semibold text-[16px] mt-6">Belajar Komponen Dasar Frontend</div>
                    <div class="text-[14px] mt-2">
                        Belajar mengenai arti dan fungsi dari komponen dasar frontend seperti tooltip, modal, slider, carousel dan lainya.
                    </div>
                </div>
                <div class="absolute text-[14px] bottom-0 w-full rounded-b-lg px-4 pb-2 border-t-2 border-dotted font-medium py-1">
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