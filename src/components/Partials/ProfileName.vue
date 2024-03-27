<script setup>
const props = defineProps(['letter'])
</script>
<template>
    <div class="bg-[#4349FF] flex justify-center items-center w-[20px] h-[20px] rounded-full">
        <span class="font-medium text-white text-[12px] uppercase">{{ props.letter }}</span>
    </div>
</template>