<script setup>
import { ref } from 'vue';

const mark = ref('我是子组件给父组件的传值');

const changeMark = () => {
    mark.value = '我是子组件给父组件改变后的传值'
}

</script>

<template>
    <div>
        <p>我是子组件</p>
        <slot></slot>
        <!-- 具名插槽,向父组件穿参mark -->
        <slot name="subtitle" :mark="mark"></slot>
        <button @click="changeMark">修改mark</button>
    </div>
</template>
