<script setup>
import { onMounted, ref } from 'vue';
import useCount from './useCount';

const [count, setCount] = useCount(11);
const countHandle = () => {
    setCount(count.value + 1);
}

</script>

<template>
    <div>
        {{ count }}
        <button @click="countHandle">Change</button>
    </div>
</template>
