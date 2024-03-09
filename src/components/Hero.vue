<script setup>
import { ref, onMounted } from 'vue'
import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import Facebook from './Icons/Facebook.vue';
import Vue from './Icons/Vue.vue';
import { useI18n } from 'vue-i18n';

const matery = ref(['Vue.js 2', 'Pinia State Manegement', 'Nuxt.js 2', 'Vuex', 'Quasar', 'Vue.js 3', 'Nuxt.js 3', 'Supabase'])
const currentMatery = ref(0)
const { locale } = useI18n({ useScope: 'global' })
const windowWidth = ref(null)

onMounted(() => {
    windowWidth.value = window.innerWidth
})

setInterval(() => {
    if (currentMatery.value == matery.value.length - 1) {
        currentMatery.value = -1
    }
    currentMatery.value += 1
}, 2500)
</script>

<template>
    <div class="block md:grid grid-cols-2 bg-[#fbeee4]">
        <div class="bg-dotted flex justify-center items-center relative">
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
            <div class="mx-auto w-[90%] md:w-[70%] h-fit my-auto block md:py-0 py-10">
                <h1
                    class="px-4 py-2 w-fit text-[28px] max-[380px]:text-[26px] md:text-[40px] font-bold bg-[#FBEEE4] shadow">
                    {{ $t('hero_title') }}
                </h1>
                <div
                    class="px-4 py-2 w-fit text-[28px] max-[380px]:text-[26px] md:text-[40px] font-bold bg-[#FBEEE4] mt-3 shadow flex items-center">
                    <span class="mr-1">{{ $t('most_equipped') }}</span>
                    <Vue class="flex md:hidden" v-if="locale == 'id'" />
                </div>
                <div class="bg-black px-3 py-2 mt-6 mb-3 max-[380px]:text-[12px] text-white w-fit text-sm shadow">{{
                $t('hero_description') }}
                </div>
                <div class="bg-black px-3 py-2 max-[380px]:text-[12px] text-white w-fit text-sm shadow">
                    <span>{{ matery[currentMatery] }}</span>
                </div>
            </div>
        </div>
        <!-- Sign up Form -->
        <div class="flex justify-center items-center">
            <div class="block w-[90%] md:w-[60%] py-8 md:py-12">
                <span class="font-semibold text-[18px] md:text-[22px]">{{ $t('hero_signup_branding') }}</span><br>
                <label class="mt-5 block text-sm font-normal mb-2" for="email">
                    Email
                </label>
                <input
                    class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text" :placeholder="$t('enter_your_email')">
                <label class="mt-5 block text-sm font-normal mb-2" for="password">
                    Password
                </label>
                <input
                    class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="text" :placeholder="$t('enter_your_password')">
                <button class="bg-[#387ADF] py-2 w-full text-white font-medium rounded-md mt-8 mb-4">{{ $t('sign_up')
                    }}</button>
                <span class="font-light text-sm">{{ $t('accept_tos') }}</span>
                <div class="my-5 text-base">{{ $t('register_option') }}</div>
                <div class="flex">
                    <div class="bg-white border border-black px-3 py-3 rounded-lg cursor-pointer">
                        <Google />
                    </div>
                    <div class="bg-white border mx-3 border-black px-3 py-3 rounded-lg cursor-pointer">
                        <Github />
                    </div>
                    <div class="bg-white border border-black px-3 py-3 rounded-lg cursor-pointer">
                        <Facebook />
                    </div>
                </div>
                <div class="mt-4 text-light text-[16px]">{{ $t('already_register') }}<a class="ml-1"
                        href="https://www.google.com">Login</a></div>
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

input,
input::placeholder {
    font-size: 14px;
}
</style>