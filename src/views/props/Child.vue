<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';
// 接收父组件props数据
defineProps(['count']);

// 向父组件传值
const title = 'Hello Parent';
const emit = defineEmits(['update:title']);
onMounted(() => {
    setTimeout(() => {
        emit('update:title', title);
    }, 2000)
})

</script>

<template>
    <div>{{ count }}</div>
</template>
