<script setup>
import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import Facebook from './Icons/Facebook.vue';
</script>

<template>
    <div class="bg-[#FBEEE4] py-10 md:py-14 border-t border-slate-300">
        <div class="mx-auto max-[900px]:w-[90%] md:w-[30%]">
            <h1 class="font-semibold">Buat akun Belajarvue.com</h1>
            <label class="mt-5 block text-sm font-normal mb-2" for="email">
                Nama
            </label>
            <input
                class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text" placeholder="Masukkan nama Anda">
            <label class="mt-5 block text-sm font-normal mb-2" for="email">
                Email
            </label>
            <input
                class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="text" placeholder="Masukkan email Anda">
            <label class="mt-5 block text-sm font-normal mb-2" for="password">
                Password
            </label>
            <input
                class="py-4 w-full shadow appearance-none rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="••••••">
            <button
                class="bg-[#4349ff] py-2 text-white font-medium rounded-md text-sm mt-6 mb-4 w-[100px]">Daftar</button>
            <div class="mb-4">
                <span class="font-medium text-sm md:text-md">Atau daftar dengan:</span>
            </div>
            <div class="flex">
                <div class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Google class="w-[16px] md:w-[20px]" />
                </div>
                <div class="bg-white mx-3 border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Github class="w-[16px] md:w-[20px]" />
                </div>
                <div class="bg-white border border-black w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-lg justify-center items-center flex cursor-pointer">
                    <Facebook class="w-[16px] md:w-[20px]" />
                </div>
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