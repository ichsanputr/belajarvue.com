<script setup>
import { defineProps, ref } from 'vue'
import ArrowLeftDouble from '../Icons/ArrowLeftDouble.vue';
import ArrowRightDouble from '../Icons/ArrowRightDouble.vue';
import ArrowLeft from '../Icons/ArrowLeft.vue';
import ArrowRight from '../Icons/ArrowRight.vue';

const props = defineProps(['totalPage'])
const currentPage = ref(1)
</script>
<template>
    <div class="w-fit flex items-center">
        <div class="cursor-pointer px-2 py-2 border border-black rounded-lg">
            <ArrowLeftDouble/>
        </div>
        <div class="cursor-pointer ml-2 px-2 py-2 border border-black rounded-lg">
            <ArrowLeft/>
        </div>
        <div class="cursor-pointer flex items-center mx-4">
            <span>{{ currentPage }} / {{ props.totalPage }}</span>
        </div>
        <div class="cursor-pointer px-2 py-2 border border-black rounded-lg">
            <ArrowRightDouble/>
        </div>
        <div class="cursor-pointer ml-2 px-2 py-2 border border-black rounded-lg">
            <ArrowRight/>
        </div>
    </div>
</template>