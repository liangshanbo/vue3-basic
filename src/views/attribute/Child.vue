<script setup>
import { defineProps, useAttrs, ref } from 'vue';
// 接收父组件props数据
defineProps(['count']);
const attr = useAttrs();
console.log(attr.name);

</script>

<template>
    <div>{{ count }}</div>
</template>
