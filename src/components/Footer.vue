<script setup>
import FacebookDark from './Icons/FacebookDark.vue';
import Github from './Icons/Github.vue';
import Instagram from './Icons/Instagram.vue';
</script>

<template>
    <div class="bg-[#FBEEE4] pt-8 border-t border-slate-300">
        <div class="mx-auto w-full md:w-[90%]">
            <div class="px-4 md:px-0 block md:grid grid-cols-6 gap-6 mb-4 md:mb-10">
                <div class="block col-span-2">
                    <img src="../assets/images/logo.png" width="80" />
                    <div class="font-semibold text-[20px] mt-3 mb-4">Belajarvue.com _< </div>
                            <div class="font-light text-[14px]">Parsinta is a online learning platform intended for web
                                developers.Through series-series such as Laravel, Reactjs, Vuejs, InertiaJs, HTML,
                                Bootstrap, Tailwind CSS, and more.</div>
                            <div class="flex mt-3 md:mt-5">
                                <FacebookDark />
                                <Github class="mx-3" />
                                <Instagram />
                            </div>
                    </div>
                    <div class="block mt-6 md:mt-0">
                        <div class="font-semibold text-[16px]">Indeks</div>
                        <ul>
                            <li>Challenge</li>
                            <li>{{ $t('article') }}</li>
                            <li>Series</li>
                        </ul>
                        <div class="font-semibold text-[16px] mt-6">Terms of Service</div>
                        <ul class="cursor-pointer">
                            <li>Privacy Policy</li>
                            <li @click="$router.push('/disclaimer')">Disclaimer</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div class="block mt-5 md:mt-0">
                        <div class="font-semibold text-[16px]">{{ $t('contact') }}</div>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Email</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div class="block mt-5 md:mt-0 col-span-2">
                        <div class="font-semibold text-[16px]">{{ $t('newsletter') }}</div>
                        <div class="font-light text-[14px] my-4 mb-5">{{ $t('newsletter_description') }}</div>
                        <div class="w-full md:w-[75%] flex justify-between items-center bg-white py-2 rounded-3xl px-2 text-[14px] bprder border-black shadow">
                            <input class="pl-3 outline-none" placeholder="Email Address" />
                            <div class="cursor-pointer flex justify-between items-center bg-[#4349ff] py-2 rounded-3xl px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" viewBox="0 0 32 32">
                                    <path fill="white"
                                        d="M19 24H4L3.997 8.906l11.434 7.916a1 1 0 0 0 1.138 0L28 8.91V18h2V8a2.003 2.003 0 0 0-2-2H4a2.002 2.002 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h15Zm6.799-16L16 14.784L6.201 8Z" />
                                    <circle cx="26" cy="24" r="4" fill="white" />
                                </svg>
                                <div class="text-white ml-1">{{ $t('subscribe') }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t border-slate-300 mt-5" />
                <div class="block md:flex justify-between py-4 px-4 md:px-0 md:py-8 mx-2 md:mx-0">
                    <div class="text-[14px] mb-1 md:mb-0">© Copyright 2024 Belajarvue. All rights reserved.</div>
                    <div class="text-[14px]">Made with ❤️ by Muhammad Ichsan</div>
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