<script setup>
import { useRoute } from 'vue-router';
import { onMounted, computed, ref } from 'vue';

import Search from './Icons/Search.vue';
import Night from './Icons/Night.vue';
import Hamburger from './Icons/Hamburger.vue';
import Article from './Icons/Article.vue';
import Series from './Icons/Series.vue';
import Home from './Icons/Home.vue';
import Challenge from './Icons/Challenge.vue';
import Login from './Icons/Login.vue';
import Lang from './Partials/Lang.vue';

const router = useRoute()
const stickyActive = ref(false)
const windowWidth = ref(window.innerWidth)

onMounted(async () => {
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
    });
    document.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            stickyActive.value = true
        } else {
            stickyActive.value = false
        }
    });
})

const headerClass = computed(() => {
    if (stickyActive.value) {
        return 'bg-white border-b border-black'
    }

    return 'bg-[#fbeee4]'
})
</script>

<template>
    <header class="sticky top-0 z-50" :class="headerClass">
        <div v-if="windowWidth > 600" class="flex justify-between items-center py-4 mx-auto w-[75%]">
            <span class="font-semibold text-xl">BelajarVue.com _< </span>
                    <div class="flex justify-between items-center">
                        <span class="cursor-pointer">{{ $t('home') }}</span>
                        <span class="mx-6 cursor-pointer">Series</span>
                        <span class="cursor-pointer">{{ $t('article') }}</span>
                        <span class="ml-6 mr-3 cursor-pointer">Challenge</span>
                        <span class="mx-4">|</span>
                        <Lang class="mx-2" :is-sticky="stickyActive" />
                        <Night v-if="router.path != '/'" />
                        <Search class="ml-2 cursor-pointer" />
                    </div>
        </div>
        <!-- Header Mobile -->
        <div v-else class="flex justify-between items-center px-4 py-3">
            <div class="font-semibold text-lg">BelajarVue.com _< </div>
                    <div class="flex items-center">
                        <Lang class="mr-3" :is-sticky="stickyActive" />
                        <div class="drawer drawer-end">
                            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                            <div class="drawer-content">
                                <label for="my-drawer" class="drawer-button">
                                    <Hamburger />
                                </label>
                            </div>
                            <div class="drawer-side">
                                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                                <div style="width: 20rem;" class="pa-4 menu min-h-full bg-base-200">
                                    <div class="flex items-center justify-between px-3 my-2">
                                        <span class="font-medium text-lg">BelajarVue.com </span>
                                                <label for="my-drawer" aria-label="close sidebar"
                                                    class="font-normal rounded-full py-[7px] px-[7px] border border-black"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                        viewBox="0 0 16 16">
                                                        <path fill="currentColor" fill-rule="evenodd"
                                                            d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </label>
                                    </div>
                                    <label class="input my-4 mx-3 input-bordered flex items-center gap-2">
                                        <input type="text" class="grow"
                                            :placeholder="$t('search_article_placeholder')" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="w-4 h-4 opacity-70">
                                            <path fill-rule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                    <ul class="text-base-content">
                                        <li><a>
                                                <Home /> Home
                                            </a></li>
                                        <li><a>
                                                <Article /> {{ $t('article') }}
                                            </a></li>
                                        <li><a>
                                                <Series /> Series
                                            </a></li>
                                        <li><a>
                                                <Challenge /> Challenge
                                            </a></li>
                                        <div class="border-t-2 my-3 border-slate-200" />
                                        <li><a>
                                                <Login /> Login
                                            </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </header>
</template>