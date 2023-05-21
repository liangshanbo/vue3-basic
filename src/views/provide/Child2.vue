<script setup>
import { ref } from 'vue';
import Grandson from './Grandson.vue';
const mark = ref('我是子组件给父组件的传值');

const changeMark = () => {
    mark.value = '我是子组件给父组件改变后的传值'
}

</script>

<template>
    <div style="border: 1px solid #F00">
        <p>我是子组件2</p>
        <Grandson />
    </div>
</template>
