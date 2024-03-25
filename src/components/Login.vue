<script setup>
import { useTokenStore } from '@/stores/token'

import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import Facebook from './Icons/FacebookPlain.vue';

const axios = inject('axios')
const router = useRouter()
const tokenStore = useTokenStore()
const themeStore = useThemeStore()

const loadingLogin = ref(false)
const showPassword = ref(false)
const form = reactive({
    email: '',
    password: ''
})

const bg = computed(() => {    
    if (themeStore.theme == 'light'){
        return 'bg-dotted-light'
    }

    if (themeStore.theme == 'default') {
        return 'bg-dotted-default'
    }

    if (themeStore.theme == 'dark') {
        return 'bg-dotted-dark'
    }
})

const textTheme = computed(() => {
    if (themeStore.theme == 'dark'){
        return "text-white"
    }

    return 'text-black'
})

async function login() {
    loadingLogin.value = true
    try {
        const { data: { token } } = await axios.post('/login', form)
        setTimeout(() => {
            loadingLogin.value = false
            tokenStore.token = token
            router.push('/')
        }, 500)
    } catch (err) {
        setTimeout(() => {
            loadingLogin.value = false
        }, 500)
    }
}
</script>

<template>
    <div :class="bg" class="py-10 md:py-14 border-t border-slate-300">
        <div :class="textTheme" class="mx-auto max-[900px]:w-[90%] md:w-[30%]">
            <h1 class="font-semibold">Masuk ke Belajarvue.com</h1>
            <label class="form-control w-full mt-4">
                <div class="label">
                    <span :class="textTheme" class="label-text font-medium">Email</span>
                </div>
                <input v-model="form.email" type="text" placeholder="Masukkan email Anda"
                    class="input input-bordered w-full" :class="{ 'border-red-400 border': errEmail }" />
            </label>
            <label class="form-control w-full mt-4">
                <div class="label">
                    <span :class="textTheme" class="label-text font-medium">Password</span>
                </div>
                <label class="input input-bordered flex items-center gap-2"
                    :class="{ 'border-red-400 border': errPassword }">
                    <input v-if="!showPassword" v-model="form.password" type="password" minlength="6"
                        placeholder="••••••" maxlength="20" class="w-full outline-none" />
                    <input v-else v-model="form.password" type="text" minlength="6" placeholder="••••••" maxlength="20"
                        class="w-full outline-none" />
                    <div class="text-black cursor-pointer" @click="showPassword = !showPassword">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path
                                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor"
                                    d="M12 5c3.679 0 8.162 2.417 9.73 5.901c.146.328.27.71.27 1.099c0 .388-.123.771-.27 1.099C20.161 16.583 15.678 19 12 19c-3.679 0-8.162-2.417-9.73-5.901C2.124 12.77 2 12.389 2 12c0-.388.123-.771.27-1.099C3.839 7.417 8.322 5 12 5m0 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4" />
                            </g>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />
                        </svg>
                    </div>
                </label>
            </label>
            <div class="mt-4">
                <span @click="$router.push('/reset-password')" class="underline text-sm text-[#4349ff] cursor-pointer">Lupa password?</span>
            </div>
            <button @click="login"
                class="bg-[#4349ff] py-2 text-white font-medium rounded-md text-sm mt-4 mb-4 w-[100px]">
                <span v-if="!loadingLogin">Login</span>
                <span v-else class="loading loading-spinner loading-xs"></span>
            </button>
            <div class="mb-4">
                <span class="font-medium text-sm md:text-md">Atau masuk dengan:</span>
            </div>
            <div class="flex">
                <div
                    class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Google class="w-[16px] md:w-[20px]" />
                </div>
                <div
                    class="text-black bg-white mx-3 border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Github class="w-[16px] md:w-[20px]" />
                </div>
                <div
                    class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Facebook class="w-[16px] md:w-[20px]" />
                </div>
            </div>
            <div class="mt-4">
                <span class="text-sm">Belum mempunyai akun? <span class="underline text-[#4349ff] cursor-pointer"
                        @click="$router.push('/signup')">Daftar</span></span>
            </div>
        </div>
    </div>
</template>
<style scoped>
li {
    margin-top: 12px;
    font-weight: 300;
    font-size: 14px;
}
</style>