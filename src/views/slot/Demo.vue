<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const title = ref('Hello')

</script>

<template>
    <div>
        <Child>
            <h2>{{ title }}</h2>
            <!-- 具名插槽,接收子组件参数 -->
            <template v-slot:subtitle="data">
                <h2>subtitle - {{data.mark}}</h2>
            </template>
        </Child>
    </div>
</template>
