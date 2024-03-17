<script setup>
import { useRouter } from 'vue-router';
import { onMounted, computed, ref } from 'vue';
import { useJwt } from '@vueuse/integrations/useJwt'

import Search from './Icons/Search.vue';
import Night from './Icons/Night.vue';
import Light from './Icons/Light.vue';
import Theme from './Icons/Theme.vue';
import Hamburger from './Icons/Hamburger.vue';
import Article from './Icons/Article.vue';
import Series from './Icons/Series.vue';
import Home from './Icons/Home.vue';
import Challenge from './Icons/Challenge.vue';
import Login from './Icons/Login.vue';
import Website from './Icons/Website.vue';
import Profile from './Icons/Profile.vue';
import ProfileName from './Partials/ProfileName.vue';
import { useTokenStore } from '@/stores/token'

const tokenStore = useTokenStore()
const stickyActive = ref(false)
const windowWidth = ref(null)
const headerReady = ref(false)
const hideDropdown = ref(false)
const name = ref('')
const router = useRouter()

onMounted(async () => {
    windowWidth.value = window.innerWidth
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

    decodeToken()
    headerReady.value = true
})

const headerClass = computed(() => {
    if (stickyActive.value) {
        return 'bg-white border-b border-black'
    }

    return 'bg-[#fbeee4]'
})

function logout() {
    tokenStore.token = ""
    hideDropdown.value = false
    decodeToken()
    window.location.href = '/'
}

function decodeToken() {
    const { payload } = useJwt(tokenStore.token)
    name.value = payload.value?.username
}
</script>

<template>
    <dialog id="search_modal" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
    <header class="sticky top-0 z-30" :class="headerClass" v-if="headerReady">
        <div v-if="windowWidth > 600" class="flex justify-between items-center py-3 mx-auto w-[90%]">
            <span @click="$router.push('/')" class="cursor-pointer font-semibold text-lg">BelajarVue.com _< </span>
                    <div class="flex justify-between items-center text-sm">
                        <span @click="$router.push('/')" class="cursor-pointer">{{ $t('home') }}</span>
                        <span @click="$router.push('/series')" class="mx-6 cursor-pointer">Series</span>
                        <span @click="$router.push('/article')" class="cursor-pointer mr-3">{{ $t('article') }}</span>
                        <span class="mx-4">|</span>
                        <!-- <Lang class="mx-2" :is-sticky="stickyActive" /> -->
                        <Search onclick="search_modal.showModal()" class="ml-2 cursor-pointer" />
                        <div class="dropdown dropdown-bottom dropdown-end mx-3">
                            <div tabindex="0" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 20 20">
                                    <path fill="currentColor"
                                        d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                                </svg>
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[9rem]">
                                <li><a class="flex">
                                        <Night class="w-[16px]" />
                                        <span>Dark</span>
                                    </a></li>
                                <li><a class="flex">
                                        <Light class="w-[16px]" />
                                        <span>Light</span>
                                    </a></li>
                                <li><a class="flex">
                                        <Website class="w-[16px]" />
                                        <span>Default</span>
                                    </a></li>
                            </ul>
                        </div>
                        <div class="dropdown dropdown-bottom dropdown-end">
                            <div @click="hideDropdown = !hideDropdown" tabindex="0" role="button">
                                <ProfileName :letter="name?.charAt(0)" v-if="tokenStore.token.length > 0"
                                    class="cursor-pointer ml-1" />
                                <Profile v-else class="cursor-pointer" />
                            </div>
                            <Transition>
                                <div v-if="hideDropdown" tabindex="0"
                                    class="dropdown-content z-[1] menu shadow bg-base-100 rounded-xl w-[12rem]">
                                    <div class="flex items-center my-3 px-3">
                                        <span v-if="name" class="font-medium">Halo {{ name }}
                                            👋</span>
                                        <span v-else class="font-medium">Siapa kamu?</span>
                                    </div>
                                    <hr>
                                    <ul v-if="!name">
                                        <li><a @click="$router.push('/login')">Login</a></li>
                                    </ul>
                                    <ul v-else>
                                        <li><a @click="logout">Logout</a></li>
                                    </ul>
                                </div>
                            </Transition>
                        </div>
                    </div>
        </div>
        <!-- Header Mobile -->
        <div v-else class="flex justify-between items-center px-2 py-3">
            <div class="flex items-center">
                <Lang class="mr-3" :is-sticky="stickyActive" />
                <div class="drawer drawer-start">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label for="my-drawer" class="drawer-button flex">
                            <Hamburger />
                        </label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                        <div style="width: 20rem;" class="pa-4 menu min-h-full bg-[#fbeee4]">
                            <div class="flex items-center justify-between px-3 my-2">
                                <span class="font-semibold text-lg">BelajarVue.com </span>
                                <label for="my-drawer" aria-label="close sidebar"
                                    class="font-normal rounded-full py-[7px] px-[7px] border border-black"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <label class="input my-4 mx-3 input-bordered flex items-center gap-2">
                                <input type="text" class="grow" :placeholder="$t('search_article_placeholder')" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                    class="w-5 h-5 opacity-70">
                                    <path fill-rule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </label>
                            <ul class="text-base-content">
                                <li><a @click="$router.push('/')">
                                        <Home /> Home
                                    </a></li>
                                <li><a @click="$router.push('/article')">
                                        <Article /> {{ $t('article') }}
                                    </a></li>
                                <li><a @click="$router.push('/series')">
                                        <Series /> Series
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
            <div @click="$router.push('/')" class="font-semibold text-lg">BelajarVue.com _< </div>
                    <div class="dropdown dropdown-bottom dropdown-end pr-1">
                        <div tabindex="0" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 20 20">
                                <path fill="currentColor"
                                    d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                            </svg>
                        </div>
                        <ul tabindex="0"
                            class="dropdown-content z-[1] menu text-[12px] p-1 shadow bg-base-100 rounded-box w-[7rem]">
                            <li><a class="flex">
                                    <Night class="w-[16px]" />
                                    <span>Dark</span>
                                </a></li>
                            <li><a class="flex">
                                    <Light class="w-[16px]" />
                                    <span>Light</span>
                                </a></li>
                            <li><a class="flex">
                                    <Website class="w-[16px]" />
                                    <span>Default</span>
                                </a></li>
                        </ul>
                    </div>
            </div>
    </header>
</template>
<style scoped>
a {
    color: black;
}

.dropdown-bottom .dropdown-content {
    top: 200% !important
}

.rounded-box {
    border-radius: 12px !important;
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