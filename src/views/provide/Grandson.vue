<script setup>
import { ref, inject } from 'vue';

const title = inject('title');

</script>

<template>
    <div style="border: 1px solid #999">
        <p>我是孙子组件，子组件2的子组件 - {{ title.title }}</p>
    </div>
</template>
