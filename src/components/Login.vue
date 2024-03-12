<script setup>
import Google from './Icons/Google.vue';
import Github from './Icons/Github.vue';
import Facebook from './Icons/Facebook.vue';
</script>

<template>
    <div class="bg-dotted py-10 md:py-14 border-t border-slate-300">
        <div class="mx-auto max-[900px]:w-[90%] md:w-[30%]">
            <h1 class="font-semibold">Masuk ke Belajarvue.com</h1>
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
            <div class="mt-4">
                <span class="underline text-sm text-[#4349ff] cursor-pointer">Lupa password?</span>
            </div>
            <button
                class="bg-[#4349ff] py-2 text-white font-medium rounded-md text-sm mt-4 mb-4 w-[100px]">Masuk</button>
            <div class="mb-4">
                <span class="font-medium text-sm md:text-md">Atau masuk dengan:</span>
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
            <div class="mt-4">
                <span class="text-sm">Belum mempunyai akun? <span class="underline text-[#4349ff] cursor-pointer" @click="$router.push('/signup')">Daftar</span></span>
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

.bg-dotted {
    background-color: #FBEEE4;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23FBEEE4' stroke-width='0.4' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23f8ece2' href='%23s' y='2'/%3E%3Cuse fill='%23f8ece2' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f6e9df' href='%23s'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='2'/%3E%3Cuse fill='%23f3e7dd' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f1e4db'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23eee2d8'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23FBEEE4'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23ebdfd6'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23EEE2D8'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>