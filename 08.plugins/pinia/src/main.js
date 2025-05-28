import {createApp, markRaw, ref, toRef} from 'vue'
import {createPinia} from 'pinia';

import './style.css'
import App from './App.vue'
import { useCounterStore } from "./libs/CounterComposition.js";

const app = createApp(App);

// 注册pinia组件
const pinia = createPinia();
pinia.use((context) => {
    console.log('pinia context', context);
    console.log(
        context.pinia, // 用 `createPinia()` 创建的 pinia。
        context.app, // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
        context.store, // 该插件想扩展的 store
        context.options, // 定义传给 `defineStore()` 的 store 的可选对象。
    );
});
pinia.use(() => ({
    hello: 'world'
}));

pinia.use(({store}) => {
    store.hallo = 'world';
    store.world = ref('abc');
    store.userName = 'jack';

    if (store.$state.hasOwnProperty('errorMessage')) {
        store.$state.errorMessage = 'errorMessage is bug.';
    }

    store.errorMessage = toRef(store.$state, 'errorMessage');

    // 添加外部属性
    store.router = markRaw({a:1, b: 2});
});

app.use(pinia);
app.provide('appProvided', 'abc.xyz');
app.mount('#app');

//-----以下是pinia示例代码------------------------------------------------------------------------------
// pinia 要在 app 挂载之后实例化
const counterStore = useCounterStore();
console.log(counterStore.count);

counterStore.increment();
console.log(counterStore.count);

// 访问插件中的属性
console.log(counterStore.hello, counterStore.hallo, counterStore.world, counterStore.userName, counterStore.router);