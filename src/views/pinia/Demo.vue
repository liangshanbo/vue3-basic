<script setup>
import { storeToRefs } from 'pinia';
import useCounterStore from '../../store/counterStore';
const counterStore = useCounterStore();

// action 的方法直接解构
const { add } = counterStore;
// state 的数据使用storeToRefs后再解构
const { count } =  storeToRefs(counterStore);
console.log('counterStore', counterStore);

</script>

<template>
    <div>
        <h1>Pinia</h1>
        <h2>{{count}}</h2>
        <button @click="add">add</button>
    </div>
</template>
