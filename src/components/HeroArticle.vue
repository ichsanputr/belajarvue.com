<script setup>
import { onMounted, ref } from 'vue'
import SeriesLight from './Icons/SeriesLight.vue';
import Tag from './Icons/Tag.vue';
import Sidebar from './Partials/Sidebar.vue';
import Exchange from './Icons/Exchange.vue';
import ArrowLeft from './Icons/ArrowLeft.vue';
import ArrowRight from './Icons/ArrowRight.vue';
import CodeHighlighter from './Partials/CodeHighlighter.vue';

const showArrowLeft = ref(false)
const showArrowRight = ref(false)

onMounted(() => {
})

function onScrollRecomendation() {
    const scroll = document.getElementById('reccomendation').scrollLeft

    if (scroll > 20) {
        showArrowLeft.value = true
        console.log(scroll)
        if (scroll > 1167 - 50) {
            showArrowRight.value = false
        } else {
            showArrowRight.value = true
        }
    } else {
        showArrowLeft.value = false
    }
}

function increaseScrollRecomendation() {
    document.getElementById('reccomendation').scrollLeft += 140
}

function decreaseScrollRecomendation() {
    document.getElementById('reccomendation').scrollLeft -= 140
}
</script>
<template>
    <div class="bg-[#FBEEE4] pb-10">
        <div class="bg-dotted flex justify-center items-center relative py-10 border-b border-slate-300">
            <div class="mx-auto w-[75%] h-fit my-auto block max-w-screen-xl">
                <p class="bg-[#FBEEE4] shadow px-4 py-2 w-fit text-xs md:text-sm">Senin, 18 September 2023</p>
                <h1 class="px-4 py-2 font-bold bg-[#FBEEE4] shadow w-fit md:max-w-[70%] my-5">
                    Belajar Integrasi Vue.js 3 dengan Websocket RPC
                </h1>
                <p class="text-black bg-[#FBEEE4] shadow mt-3 px-4 py-3 text-sm md:w-[65%] w-fit">Ingin menghemat waktu
                    dan usaha dalam pembuatan Admin Panel dengan Laravel? Artikel ini akan membahas tutorial Filament
                    yang akan memandu Anda mulai dari nol.</p>
                <div class="flex items-center w-fit mt-6">
                    <div class="rounded-xl bg-[black] text-white px-2 py-1 text-xs flex items-center">
                        <SeriesLight class="text-[12px] mr-1" />
                        <span>Integrasi Vue.js 3 dengan Supabase</span>
                    </div>
                </div>
                <div class="flex items-center w-fit mt-4">
                    <div class="rounded-xl bg-[black] text-white px-2 py-1 text-xs flex items-center">
                        <Tag class="text-[12px] mr-1" />
                        <span>Vue.js 3, Supabase, dan Mariadb</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Article body -->
        <div class="mx-auto w-full md:w-[75%] py-8 pt-[4rem] block md:flex max-w-screen-xl">
            <div class="w-[90%] md:w-[65%] md:mx-0 mx-auto">
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
                <!-- Reccomendation -->
                <div class="mt-6 flex justify-between items-center">
                    <div>
                        <span class="font-medium text-lg">Rekomendasi Konten Pilihan</span>
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <span class="text-sm font-medium mr-1">series</span>
                        <Exchange />
                    </div>
                </div>
                <div class="relative">
                    <div id="reccomendation" @scroll="onScrollRecomendation"
                        class="w-full flex justify-between items-center scroll-smooth overflow-x-auto md:mt-10"
                        style="scrollbar-width: none">

                        <div v-for="(i, index) in 6" class="w-[220px] cursor-pointer flex-none my-10 md:my-0"
                            :class="{ 'mr-12': index != 5 }">
                            <img width="100%" class="rounded-lg shadow"
                                src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" />
                            <div class="my-3 font-semibold text-[16px] mt-6">Membuat Aplikasi Donasi dengan Vue 3,
                                Firebase,
                                Tailwind CSS</div>
                            <div class="my-3 font-normal text-[12px] md:text-[14px]">Pelajari cara kerja Blueprint untuk
                                mempercepat
                                pembuatan model, controller, dan komponen aplikasi....</div>
                        </div>
                    </div>
                    <Transition>
                        <div @click="decreaseScrollRecomendation" v-if="showArrowLeft"
                            class="z-50 cursor-pointer absolute shadow-lg rounded-full left-2 px-1 py-1 top-[50%] bg-[black]">
                            <ArrowLeft class="text-[16px] text-white" />
                        </div>
                    </Transition>
                    <Transition>
                        <div @click="increaseScrollRecomendation" v-if="showArrowRight"
                            class="absolute z-50 right-2 shadow-lg top-[50%] bg-[black] px-1 py-1 rounded-full">
                            <ArrowRight class="text-[16px] text-white" />
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="w-[90%] mx-auto md:w-[35%] relative">
                <Sidebar />
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-dotted {
    background-color: #FBEEE4;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23FBEEE4' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23f8ece2' href='%23s' y='2'/%3E%3Cuse fill='%23f8ece2' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='2'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23eee2d8'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23FBEEE4'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23ebdfd6'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>