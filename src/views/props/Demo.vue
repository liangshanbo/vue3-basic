<script setup>
import { onMounted, ref } from 'vue';
import Child from './Child.vue';

const count = ref(0);
const title = ref('我是父组件');

onMounted(() => {
    setTimeout(() => {
        count.value = 100;        
    }, 3000)    
})

</script>

<template>
    <div>
        {{ title }}
        <!-- v-model:title="title" 接收子组件的数据 -->
        <Child v-model:title="title" :count="count" />
    </div>
</template>
