<!-- 依赖注入 -->
<!-- Child1 向 Grandson 传递数据 -->
<script setup>
import { ref, provide } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

const title = ref('Hello');

function changeTitle(value) {
    title.value = value;
}
provide('title', { title, changeTitle });

</script>

<template>
    <div style="border: 1px solid #0FF">
        <h2>我是父组件</h2>
        <Child1 />
        <Child2 />
    </div>
</template>
