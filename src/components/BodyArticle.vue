<script setup>
import Sidebar from './Partials/Sidebar.vue';
import Exchange from './Icons/Exchange.vue';
import ArrowLeft from './Icons/ArrowLeft.vue';
import ArrowRight from './Icons/ArrowRight.vue';

const showArrowLeft = ref(false)
const showArrowRight = ref(false)
const themeStore = useThemeStore()

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

const bg = computed(() => {
    if (themeStore.theme == 'default'){
        return 'bg-[#FBEEE4]'
    } 
    
    if (themeStore.theme == 'light'){
        return 'bg-white'
    }

    return "bg-[#080808]"
}) 

const textTheme = computed(() => {
    if (themeStore.theme == 'dark') {
        return 'text-[#D1D5DB]'
    }

    return "text-dark"
})
</script>
<template>
    <!-- Article body -->
    <div :class="bg">
        <div :class="textTheme" class="pt-16 mx-auto w-full md:w-[75%] py-8 block md:flex max-w-screen-xl">
            <div class="w-[90%] md:w-[65%] md:mx-0 mx-auto">
                <div class="block">
                    <slot/>
                </div>
                <!-- Reccomendation -->
                <div class="mt-6 flex justify-between items-center">
                    <div>
                        <span class="font-medium text-md">Rekomendasi Konten Pilihan</span>
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

                        <div v-for="(i, index) in 6" class="w-[180px] md:w-[220px] cursor-pointer flex-none my-10 md:my-0"
                            :class="{ 'mr-12': index != 5 }">
                            <img width="100%" class="rounded-lg shadow"
                                src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" />
                            <div class="my-3 font-semibold text-[14px] md:text-[16px] mt-6">Membuat Aplikasi Donasi dengan Vue 3,
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
                            <ArrowLeft class="w-[18px] text-white" />
                        </div>
                    </Transition>
                    <Transition>
                        <div @click="increaseScrollRecomendation" v-if="showArrowRight"
                            class="absolute z-50 right-2 shadow-xl top-[50%] bg-[black] px-1 py-1 rounded-full">
                            <ArrowRight class="w-[18px] text-white" />
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