<script setup>
import FacebookDark from './Icons/FacebookDark.vue';
import Github from './Icons/Github.vue';
import Instagram from './Icons/Instagram.vue';
</script>

<template>
    <div class="bg-[#FBEEE4] pt-8">
        <div class="mx-auto w-full md:w-[90%]">
            <div class="px-4 md:px-0 block md:grid grid-cols-3 gap-6 mb-4 md:mb-10">
                <div class="block">
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
                        <div class="font-semibold text-[16px] mt-6">TOC</div>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div class="block mt-5 md:mt-0">
                        <div class="font-semibold text-[16px]">{{$t('contact') }}</div>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Email</li>
                            <li>Instagram</li>
                        </ul>
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