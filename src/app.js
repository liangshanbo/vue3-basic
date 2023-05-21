import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import App from './App.vue';
// import App from './views/props/Demo.vue';
// import App from './views/attribute/Demo.vue';
// import App from './views/slot/Demo.vue';
// import App from './views/provide/Demo.vue';
// import App from './views/hooks/Demo.vue';
// import App from './views/router/Demo.vue';
// import App from './views/pinia/Demo.vue';
import App from './views/product/Demo.vue';
import router from './views/router/router';
import GlobalComponent from './components/Global.vue';

const app = createApp(App);

//整个应用支持路由。
app.use(router);
app.use(createPinia());
// 全局组件
app.component('GC', GlobalComponent);
app.mount('#app');