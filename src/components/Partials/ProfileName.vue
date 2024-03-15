<script setup>
import { defineProps } from 'vue';

const props = defineProps(['letter'])
</script>
<template>
    <div class="bg-[#4349FF] flex justify-center items-center w-[24px] h-[24px] rounded-full">
        <span class="font-medium text-white text-[12px] uppercase">{{ props.letter }}</span>
    </div>
</template>