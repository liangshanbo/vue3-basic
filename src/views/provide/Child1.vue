<script setup>
import { inject } from 'vue';

console.log("inject('title')", inject('title'));

const { changeTitle } = inject('title');

</script>

<template>
    <div style="border: 1px solid #F0F">
        <p>我是子组件1</p>
        <button @click="changeTitle('修改title的值')">修改title的值</button>
    </div>
</template>
