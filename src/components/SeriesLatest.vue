<template>
    <div class="bg-[#FBEEE4] py-8 pb-20">
        <div class="mx-auto w-full md:w-[85%] pb-8">
            <div class="mt-4 mb-8 md:mx-0 mx-8">
                <h2 class="font-semibold text-[20px]">{{ $t('article_latest') }}</h2>
                <p class="text-[14px] mt-2">{{ $t('article_latest_description') }}</p>
            </div>
            <div class="w-full px-8 md:px-0 mx-auto block md:grid grid-cols-3 gap-16">
                <div v-for="i in 6" class="w-full cursor-pointer my-10 md:my-0">
                    <img width="100%" class="rounded-lg shadow"
                        src="https://ik.imagekit.io/vpaoovtzwz/tr:h-360,w-640/images/series/01HPSP40F09A2TBD92SNP0X8P3.jpg?tr=n-thumbnail" />
                    <div class="my-3 font-semibold text-[18px] mt-6">Membuat Aplikasi Donasi dengan Vue 3, Firebase, Tailwind CSS</div>
                    <div class="my-3 font-normal text-[14px] md:text-[16px]">Pelajari cara kerja Blueprint untuk
                        mempercepat
                        pembuatan model, controller, dan komponen aplikasi....</div>
                </div>
            </div>
            <div @click="$router.push('/article')" class="cursor-pointer float-right mx-8 md:mx-0 text-[#4349ff] md:text-[16px] text-[14px] font-medium flex items-center mt-0 md:mt-3 hover:bg-[white] hover:shadow px-2 py-2 rounded-lg">
                <span class="mr-1">{{ $t('see_more') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01" />
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
}
</style>