<script setup>
import Share from '../Icons/Share.vue';
import Bookmark from '../Icons/Bookmark.vue';
import Checked from '../Icons/Checked.vue';
import Whatsapp from '../Icons/Whatsapp.vue';
import Twitter from '../Icons/Twitter.vue';
import InstagramColor from '../Icons/InstagramColor.vue';
import Telegram from '../Icons/Telegram.vue';
import Facebook from '../Icons/Facebook.vue';
import Pinterest from '../Icons/Pinterest.vue';

import { onMounted, ref } from 'vue';

const titlePost = ref('')
const urlPost = ref('')

onMounted(() => {
    titlePost.value = document.title.replace(' - Belajarvue', '')
    urlPost.value = window.location.href
})
</script>
<template>
    <div class="block md:sticky top-24 md:px-12 px-0">
        <div class="flex items-center">
            <div class="dropdown dropdown-bottom">
                <div tabindex="0" role="button">
                    <div class="px-3 cursor-pointer py-2 flex rounded-lg border border-black mr-3">
                        <Share class="mr-1" />
                        <span class="text-xs">Bagikan</span>
                    </div>
                </div>
                <ul tabindex="0"
                    class="dropdown-content z-[1] menu px-4 py-3 mt-3 shadow-md bg-[#FBEEE4] border border-black rounded-xl w-[16rem] sm:w-[17rem] md:w-[18rem]">
                    <p class="text-sm font-semibold mb-2">{{ titlePost }}</p>
                    <p class="text-sm">Bagikan artikel ini ke sosial mediamu.</p>
                    <div class="flex justify-between items-center">
                        <a target="_blank" :href="'https://web.whatsapp.com/send?text=' + urlPost"><Whatsapp class="cursor-pointer text-[20px]" /></a>
                        <Twitter class="cursor-pointer text-[21px]" />
                        <Facebook class="cursor-pointer text-[20px]" />
                        <Pinterest class="cursor-pointer text-[20px]" />
                        <InstagramColor class="cursor-pointer text-[20px]" />
                        <Telegram class="cursor-pointer text-[20px]" />
                    </div>
                </ul>
            </div>
            <div class="px-3 cursor-pointer py-2 flex rounded-lg border border-black">
                <Bookmark class="mr-1" />
                <span class="text-xs">{{ $t('save') }}</span>
            </div>
        </div>
        <div class="block mt-6">
            <div class="text-light text-sm mb-3">Ditulis oleh</div>
            <div class="flex">
                <div class="flex-none mt-3 mr-4">
                    <img src="https://www.gravatar.com/avatar/6d999db3cd931c3ed11d21c36d533a5e?s=200&d=mp"
                        class="rounded-full" width="32">
                </div>
                <div class="block flex-auto">
                    <div class="font-medium text-sm">
                        <span>Muhammad Ichsanul F.</span>
                    </div>
                    <div class="text-sm">
                        <span>Hanya seorang manusia yang suka menulis dengan bahasa pemrograman</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="block mt-8">
            <div class="text-light text-sm mb-3">Series dalam artikel ini</div>
            <div class="flex items-center mt-6" v-for="(i, index) in 6">
                <div class="flex-none mr-3 bg-black rounded-full w-[26px] h-[26px] flex justify-center items-center">
                    <span class="text-white font-medium text-xs" v-if="index != 3">{{ index + 1 }}</span>
                    <span class="text-white font-medium text-xs" v-else>
                        <Checked />
                    </span>
                </div>
                <div class="flex-auto">
                    <div class="text-sm font-normal">
                        <span :class="{ 'font-semibold': index == 3 }">Instalisasi & Konfigurasi Server Nginx di
                            Ubuntu</span>
                    </div>
                </div>
            </div>
            <div class="mt-5 cursor-pointer">
                <span class="text-sm underline">Lihat series</span>
            </div>
        </div>
    </div>
</template>