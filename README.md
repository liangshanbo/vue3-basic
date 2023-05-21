# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 1、搭建第一个Vite项目
兼容性注意：Vite 需要 Node.js 版本 >= 12.0.0

安装vite
```
npm init vite
Need to install the following packages:
  create-vite
Ok to proceed? (y) y
✔ Project name: … vue3-basics
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript

Scaffolding project in /Users/wanglonghai/private/web/vue/vue3-basics...

Done. Now run:

  cd vue3-basics
  npm install
  npm run dev
```
## 2、Vue3  模版语法
```
// 1、js代码引用
<script type="module" src="/src/app.js"></script>

// 2、Vue 组件初始化和挂载
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// 3、模块引用 
<script setup>
    import HelloWorld from './components/HelloWorld.vue';
    const count = ref(0);
</script>
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <p>{{ count }}</p>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
```
## 3、Vue3 响应式基础
```
<script setup>
    import { ref, reactive } from 'vue';
    
    const state = reactive({ count: 0 });
    const count = ref(0);
    
    function increment() {
        state.count++    
    }
    const add = () => {
        count.value++    
    }
</script>
<template>
    <button @click="increment">{{ state.count }}</button>
    <button @click="add">{{ count }}</button>
</template>
```
## 4、事件处理
```
<script setup>
    import { ref } from 'vue';
    
    const name = ref('vue.js');
    
    function greet(event) {
        console.log('Hello' + name.value);
        if (event) {
            console.log(event.target.tagName)        
        }
    }
    
    const changeName = () => {
        name.value = 'Hello Vue.js'    
    }
</script>
<template>
    <button @click="greet($event),changeName()">Greet</button>
</template>
```
## 5、侦听器
watch 和 watchEffect 都能响应式地执行有副作用的回调函数，它们之间的主要区别是追踪响应式依赖的方式：
* watch 只追踪明确侦听的源，它不会追踪任何在回调中访问到的东西。另外，仅在响应源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
* watchEffect 会在副作用发生期间追踪依赖，它会在同步执行过程中，自动追踪所有能访问到的响应式property。这更方便，而且代码往往更简洁，但其响应性依赖关系不那么明确。
## 6、组件注册
```
// 1、全局组件
import { createApp } from 'vue';
import App from './App.vue';
import GlobalComponent from './components/Global.vue'

const app = createApp(App);
// 注册全局组件
app.component('GC', GlobalComponent);
app.mount('#app');

// 2、局部组件
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld />
  </div>
</template>
```
## 7、Props
```
// 父组件
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

// 子组件
<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';
// 接收父组件props数据
defineProps(['count']);

// 向父组件传值
const title = 'Hello Parent';
const emit = defineEmits(['update:title']);
onMounted(() => {
    setTimeout(() => {
        emit('update:title', title);
    }, 2000)
})

</script>

<template>
    <div>{{ count }}</div>
</template>
```
## 8、插槽
```
// 父组件
<script setup>
import { ref } from 'vue';
import Child from './Child.vue';

const title = ref('Hello')

</script>

<template>
    <div>
        <Child>
            <h2>{{ title }}</h2>
            <!-- 具名插槽,接收子组件参数data -->
            <template v-slot:subtitle="data">
                <h2>subtitle - {{data.mark}}</h2>
            </template>
        </Child>
    </div>
</template>

// 子组件
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
```
## 9、依赖注入
注意事项：inject()只能放在setup()生命周期里运行，不能放在别的周期里运行，也不能放在事件周期里运行。
```
// Demo.vue
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

//Child1.vue
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
 
 //Child2.vue
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

//Grandson.vue
<script setup>
import { ref, inject } from 'vue';

const title = inject('title');

</script>

<template>
    <div style="border: 1px solid #999">
        <p>我是孙子组件，子组件2的子组件 - {{ title.title }}</p>
    </div>
</template>
```
## 10、Hooks
```
// Demo.vue
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

// useCount.js
import { ref } from 'vue';

function useCount(defaultValue) {
    const count = ref(defaultValue || 0);
    const setCount = (value) => {
        count.value = value;
    }
    return [count, setCount];
}

export default useCount;
```
## 11、Router
```
// 安装 vue-router
npm install vue-router@4
```
```
// main.js
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './views/router/Demo.vue';
import Home from './views/router/Home.vue';
import About from './views/router/About.vue';

// 定义一些路由，每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
  ]
  
  // 3. 创建路由实例并传递 `routes` 配置，你可以在这里输入更多的配置，但我们在这里暂时保持简单
  const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

const app = createApp(App);

//整个应用支持路由。
app.use(router);
app.mount('#app');

// Demo.vue
<template>
    <div>
        <router-link to="/home">首页</router-link>|
        <router-link to="/about">关于</router-link>
        <router-view />
    </div>
</template>
```
## 12、Pinia
```
// 安装
npm i pinia -S
// ./views/pinia/Demo.vue
```
## 13、本地mock数据
```
// 本地安装mock服务
npm i json-server -g

// 启动本地mock服务
json-server ./src/mock/products.json -p 9000

// 安装 axios
npm i axios -S

// 加载数据
axios.get('http://localhost:9000/data').then(result => {
    this.products = result.data;
})
```
## 14、购物车
```
./views/product/Demo.vue
```
