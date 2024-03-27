<script setup>
import FacebookDark from './Icons/FacebookDark.vue';
import Github from './Icons/Github.vue';
import Instagram from './Icons/Instagram.vue';

const themeStore = useThemeStore()

const bg = computed(() => {
    if (themeStore.theme == 'default') {
        return 'bg-[#FBEEE4]'
    } else if (themeStore.theme == 'light') {
        return 'bg-white'
    }

    return "bg-[#080808]"
}) 

const textTheme = computed(() => {
    if (themeStore.theme == 'dark'){
        return "text-white"
    }

    return 'text-black'
})
</script>

<template>
    <div :class="bg" class="pt-8 border-t border-slate-300">
        <div :class="textTheme" class="mx-auto w-full md:w-[90%]">
            <div class="px-4 md:px-0 block md:grid grid-cols-6 gap-6 mb-4 md:mb-10">
                <div class="block col-span-2">
                    <img v-if="themeStore.theme != 'dark'" class="text-white" src="../assets/images/logo.png" width="80" />
                    <img v-else class="text-white" src="../assets/images/logo-dark.png" width="80" />
                    <div class="font-semibold text-[20px] mt-3 mb-4">Belajarvue.com _< </div>
                            <div class="font-light text-[14px]">Belajarvue merupakan website platform online yang
                                membahas khusus mengenai salah satu framework
                                populer Javascript yaitu Vue.js secara detail. Kami menyediakan berbagai artikel dalam
                                bentuk series guna mempermudah dalam proses belajar.
                            </div>
                            <div class="flex mt-3 md:mt-5">
                                <a class="text-black" href="https://www.facebook.com/ichsanputr/" target="_blank">
                                    <FacebookDark />
                                </a>
                                <a class="text-black mx-2" href="https://github.com/ichsanputr" target="_blank">
                                    <Github />
                                </a>
                                <a class="text-black" href="https://www.instagram.com/sannm.f/" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                    </div>
                    <div class="block mt-6 md:mt-0">
                        <div class="font-semibold text-[16px]">Indeks</div>
                        <ul class="cursor-pointer">
                            <li @click="$router.push('/article')">Artikel</li>
                            <li @click="$router.push('/series')">Series</li>
                        </ul>
                        <div class="font-semibold text-[16px] mt-6">Terms of Service</div>
                        <ul class="cursor-pointer">
                            <li @click="$router.push('/privacy-policy')">Privacy Policy</li>
                            <li @click="$router.push('/disclaimer')">Disclaimer</li>
                            <li @click="$router.push('/terms')">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div class="block mt-6 md:mt-0">
                        <div class="font-semibold text-[16px]">Platform</div>
                        <ul class="cursor-pointer">
                            <li @click="$router.push('/article')">Belajarvue.com</li>
                            <li @click="$router.push('/series')">Belajardekstopdev.com</li>
                        </ul>
                        <div class="font-semibold text-[16px] mt-6">{{ $t('contact') }}</div>
                        <ul>
                            <li>
                                <a :class="textTheme" href="https://www.instagram.com/sannm.f/" target="_blank">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a :class="textTheme" href="https://www.facebook.com/ichsanputr/" target="_blank">
                                    Facebook
                                </a>
                            </li>
                            <li><a :class="textTheme" href="mailto:ichsanfadhil67@gmail.com" target="_blank">
                                    Email
                                </a></li>
                            <li><a :class="textTheme" href="https://twitter.com/needsannn" target="_blank">
                                    Twitter
                                </a></li>
                        </ul>
                    </div>
                    <div class="block mt-6 md:mt-0 col-span-2 pb-6">
                        <div class="font-semibold text-[16px]">{{ $t('newsletter') }}</div>
                        <div class="font-light text-[14px] my-4 mb-5">Dapatkan notifikasi secara update melalui email
                            ketika kami menerbitkan sebuah artikel.</div>
                        <div
                            class="w-full md:w-[75%] flex justify-between items-center bg-white py-2 rounded-3xl px-2 text-[14px] bprder border-black shadow">
                            <input class="pl-3 outline-none" placeholder="Email Address" />
                            <div
                                class="cursor-pointer flex justify-between items-center bg-[#4349ff] py-2 rounded-3xl px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 32 32">
                                    <path fill="white"
                                        d="M19 24H4L3.997 8.906l11.434 7.916a1 1 0 0 0 1.138 0L28 8.91V18h2V8a2.003 2.003 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h15Zm6.799-16L16 14.784L6.201 8Z" />
                                    <circle cx="26" cy="24" r="4" fill="white" />
                                </svg>
                                <div class="text-white ml-1">Langganan</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t border-slate-300 mt-5" />
                <div class="block md:flex justify-between py-4 px-4 md:px-0 md:py-6 mx-2 md:mx-0">
                    <div class="text-[14px] mb-1 md:mb-0">© Copyright 2024 Belajarvue. All rights reserved.</div>
                    <div class="text-[14px]">Made with ❤️ by <a href="">Muhammad Ichsan</a></div>
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