import {createApp} from 'vue'
import {createPinia} from 'pinia';

import './style.css'
import App from './App.vue'
import { useCounterStore } from "./libs/CounterComposition.js";

const app = createApp(App);

// 注册pinia组件
const pinia = createPinia();
app.use(pinia);
app.provide('appProvided', 'abc.xyz');
app.mount('#app');

//-----以下是pinia示例代码------------------------------------------------------------------------------
// pinia 要在 app 挂载之后实例化
const counterStore = useCounterStore();
console.log(counterStore.count);

counterStore.increment();
console.log(counterStore.count);