<script setup>
import { ref, reactive, onMounted, onBeforeMount, watchEffect, watch, defineProps } from 'vue';
    
const state = reactive({ count: 0 });
const count = ref(0);

function increment() {
    state.count++    
}
const add = () => {
    count.value++    
}
    
const name = ref('vue.js');
const textValue = ref('');

function greet(event) {
    console.log('Hello' + name.value);
    if (event) {
        console.log(event.target.tagName)        
    }
}

const changeName = () => {
    name.value = 'Hello Vue.js'    
}

onBeforeMount(() => {
    console.log('onBeforeMount');
})

onMounted(() => {
    console.log('onMounted');
})

const handleClick = () => {
  count.value++;
  name.value = 'Hello React';
}

watchEffect(() => {
  console.log('count变化了' + count.value);
  console.log(name.value);
})

watch(count, () => {
  console.log('watch');
})

defineProps(['msg']);

</script>

<template>
  <h1>{{ msg }}</h1>
  <GC></GC>
  <h2>{{name}}</h2>
  <h3>{{textValue}}</h3>
  <input type="text" v-model="textValue" />
  <button @click="increment">{{ state.count }}</button>
  <button @click="handleClick">handleClick</button>
  <button @click="add">{{ count }}</button>
  <button @click="greet($event),changeName()">Greet</button>
  <div class="card">
    <button type="button" @click="count+=2">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
