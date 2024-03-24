<script setup>
import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import FacebookPlain from './Icons/FacebookPlain.vue';
import { useSignupStore } from '@/stores/signup'

const signupStore = useSignupStore()
const themeStore = useThemeStore()
const router = useRouter()
const matery = ref(['Vue.js 2', 'Pinia State Manegement', 'Nuxt.js 2', 'Vuex', 'Quasar', 'Vue.js 3', 'Nuxt.js 3', 'Supabase'])
const currentMatery = ref(0)
const windowWidth = ref(null)
const email = ref('')
const password = ref('')

onMounted(() => {
    windowWidth.value = window.innerWidth
})

setInterval(() => {
    if (currentMatery.value == matery.value.length - 1) {
        currentMatery.value = -1
    }
    currentMatery.value += 1
}, 2500)

function redirectSignup(){
    signupStore.password = password.value
    router.push(`/signup?email=${email.value}`)
}

const bgHero = computed(() => {    
    if (themeStore.theme == 'light'){
        return 'bg-white bg-dotted-light'
    }

    if (themeStore.theme == 'default'){
        return 'bg-[#fbeee4] bg-dotted-default'
    }
})

const bg = computed(() => {    
    if (themeStore.theme == 'light'){
        return 'bg-white'
    }

    if (themeStore.theme == 'default'){
        return 'bg-[#fbeee4]'
    }
})

const bgText = computed(() => {    
    if (themeStore.theme == 'light'){
        return 'bg-white'
    }

    if (themeStore.theme == 'default'){
        return 'bg-[#fbeee4]'
    }
})
</script>

<template>
    <div :class="bg" class="block md:grid grid-cols-2">
        <div :class="bgHero" class="flex justify-center items-center relative">
            <div v-if="windowWidth > 768" class="block">
                <div class="absolute flex w-fit bottom-4 left-5 z-0">
                    <img width="110px" style="transform: rotate(12deg);height: 85px;" src="../assets/images/vue.png" />
                </div>
                <div class="absolute flex w-fit bottom-4 right-8 z-0 h-[120px]">
                    <img height="50" style="transform: rotate(-20deg);" src="../assets/images/pinia.png" />
                </div>
                <div class="absolute flex w-fit top-4 left-6 z-0 h-[120px]">
                    <img width="120px" style="height: 80px;transform: rotate(-15deg)" src="../assets/images/nuxt.png" />
                </div>
                <div class="absolute flex w-fit top-4 right-8 z-0 h-[120px]">
                    <img width="90px" style="height: 90px;transform: rotate(15deg)"
                        src="../assets/images/typescript.png" />
                </div>
            </div>
            <div class="mx-auto w-[90%] md:w-[70%] h-fit my-auto block md:py-0 pt-[3.5rem] pb-[1rem]">
                <h1 :class="bgText"
                    class="px-3 py-2 w-fit text-[28px] max-[380px]:text-[26px] md:text-[36px] font-bold shadow">
                    Belajarvue.com
                </h1>
                <h2 :class="bgText"
                    class="mt-6 px-3 py-2 text-wrap max-[380px]:text-[14px] text-[16px] md:text-[16px] font-normal shadow">
                    Platform belajar Vue JS bahasa indonesia berbasis artikel dan series ditambah dengan fitur tantangan
                    koding yang seru.
                </h2>
                <div class="mt-6 bg-black px-3 py-2 mb-3 max-[380px]:text-[12px] text-white w-fit text-sm shadow">Buat
                    akun untuk menikmati semua fitur di website ini
                </div>
                <div class="bg-black px-3 py-2 max-[380px]:text-[12px] text-white w-fit text-sm shadow">
                    <span>{{ matery[currentMatery] }}</span>
                </div>
                <div v-if="windowWidth < 768" class="flex w-full justify-between items-center mt-8">
                    <img class="w-[50px] h-[80px]" style="transform: rotate(-20deg);" src="../assets/images/pinia.png" />
                    <img width="80px" style="height: 55px;" src="../assets/images/vue.png" />
                    <img width="70px" style="height: 50px;transform: rotate(15deg)" src="../assets/images/nuxt.png" />
                </div>
            </div>
        </div>
        <!-- Sign up Form -->
        <div class="flex justify-center items-center">
            <div class="block w-[90%] md:w-[60%] py-8 md:py-12">
                <span class="font-semibold text-[18px] md:text-[22px]">Daftar akun untuk menikmati semua fitur di website ini</span><br>
                <label class="mt-5 block text-sm font-normal mb-2" for="email">
                    Email
                </label>
                <input v-model="email"
                    class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" :placeholder="$t('enter_your_email')">
                <label class="mt-5 block text-sm font-normal mb-2" for="password">
                    Password
                </label>
                <input v-model="password"
                    class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="text" :placeholder="$t('enter_your_password')">
                <button @click="redirectSignup" class="bg-[#4349ff] py-2 w-full text-white font-medium rounded-md mt-8 mb-4">Daftar</button>
                <span class="font-light text-sm">Dengan mendaftar akun, Anda menyetujui <span
                        class="text-[#4349FF] underline cursor-pointer" @click="$router.push('/privacy-policy')">Terms
                        of Service
                    </span> & <span class="text-[#4349FF] underline cursor-pointer"
                        @click="$router.push('/privacy-policy')">Privacy
                        Policy</span> BelajarVue.</span>
                <div class="my-5 text-sm">Atau daftar dengan:</div>
                <div class="flex">
                    <div
                        class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                        <Google class="w-[16px] md:w-[20px]" />
                    </div>
                    <div
                        class="bg-white mx-3 border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                        <Github class="w-[16px] md:w-[20px]" />
                    </div>
                    <div
                        class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                        <FacebookPlain class="w-[16px] md:w-[20px]" />
                    </div>
                </div>
                <div class="mt-4 text-light text-sm">Sudah memiliki akun?
                    <span class="underline text-[#4349ff] cursor-pointer" @click="$router.push('/login')">Login</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
input,
input::placeholder {
    font-size: 14px;
}
</style>