<script setup>
import SeriesLight from './Icons/SeriesLight.vue';
import Tag from './Icons/Tag.vue';

const themeStore = useThemeStore()
const props = defineProps(['date', 'title', 'description', 'series', 'tag'])
const bg = computed(() => {
    if (themeStore.theme == 'default'){
        return 'bg-dotted-default'
    }  
    
    if (themeStore.theme == 'light'){
        return 'bg-dotted-light'
    }

    if (themeStore.theme == 'dark') {
        return 'bg-dotted-dark'
    }
})

const bgText = computed(() => {
    if (themeStore.theme == 'dark') {
        return 'bg-black'
    }

    if (themeStore.theme == 'light') {
        return 'bg-white'
    }

    return "bg-[#FBEEE4]"
})

const textTheme = computed(() => {
    if (themeStore.theme == 'dark') {
        return 'text-white'
    }

    return "text-dark"
})
</script>
<template>
    <div :class="themeStore.theme == 'default' ? 'bg-[#FBEEE4]' : 'bg-white'">
        <div :class="bg" class="flex justify-center items-center relative py-10 border-b border-slate-300">
            <div :class="textTheme" class="mx-auto w-[90%] md:w-[75%] h-fit my-auto block max-w-screen-xl">
                <p :class="bgText" class="shadow px-4 py-2 w-fit text-xs md:text-sm">{{ props.date }}</p>
                <h1 :class="bgText" class="px-4 py-2 font-bold shadow w-fit md:max-w-[70%] my-5">
                    {{  props.title }}
                </h1>
                <p :class="bgText" class="shadow mt-3 px-4 py-3 text-xs md:text-sm md:w-[65%] w-fit">{{ props.description }}</p>
                <div class="flex items-center w-fit mt-6" v-if="props.series">
                    <div class="rounded-xl bg-[black] text-white px-2 py-1 text-xs flex items-center">
                        <SeriesLight class="text-[12px] mr-1" />
                        <span>{{props.series}}</span>
                    </div>
                </div>
                <div class="flex items-center w-fit mt-4">
                    <div class="rounded-xl bg-[black] text-white px-2 py-1 text-xs flex items-center">
                        <Tag class="text-[12px] mr-1" />
                        <span>Fundamental</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
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