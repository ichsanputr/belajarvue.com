<script setup>
import { onMounted, ref } from 'vue'
import Pagination from './Partials/Pagination.vue'

const category = ref(['Vue.js 3', 'Pinia', 'Quasar', 'Supabase', 'Firebase'])
const categorySelected = ref('')
const windowWidth = ref(null)

onMounted(() => {
    windowWidth.value = window.innerWidth
})
</script>
<template>
    <div class="bg-[#FBEEE4] py-8 pb-10">
        <div class="mx-auto w-full md:w-[85%] pb-8">
            <div class="mt-4 mb-8 md:mx-0 mx-8">
                <h2 class="font-semibold text-[20px]">{{ $t('article_latest') }}</h2>
                <p class="text-[14px] mt-2">{{ $t('article_list_description') }}</p>
            </div>
            <div class="flex overflow-x-auto overflow-auto text-[14px] w-full my-12 border-b border-[#CFC6C1]">
                <div @click="categorySelected = item" v-for="(item, index) in category"
                    :class="[index == 0 && windowWidth < 680 ? 'pl-7' : '']" style="height: calc(100% + 200px);"
                    class="cursor-pointer relative flex flex-none justify-center pr-7 pb-4">
                    <span class="mx-auto w-fit" :class="{ 'font-medium': categorySelected == item }">{{ item }}</span>
                    <div class="absolute bottom-0 border-b-2 w-full border-[#1F2937]" v-if="categorySelected == item" />
                </div>
            </div>
            <div class="w-full px-8 md:px-0 mx-auto block md:grid grid-cols-3 gap-16">
                <div v-for="i in 6" class="w-full cursor-pointer my-10 md:my-0">
                    <img width="100%" class="rounded-lg shadow"
                        src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" />
                    <div class="my-3 font-semibold text-[18px] mt-6">Membuat Aplikasi Donasi dengan Vue 3, Firebase,
                        Tailwind CSS</div>
                    <div class="my-3 font-normal text-[14px] md:text-[16px]">Pelajari cara kerja Blueprint untuk
                        mempercepat
                        pembuatan model, controller, dan komponen aplikasi....</div>
                </div>
            </div>
            <div class="flex justify-center mt-10">
                <Pagination totalPage="8" />
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0;
}
</style>