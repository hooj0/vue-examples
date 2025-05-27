<script setup>
import {storeToRefs} from "pinia";
import {useCounterStore} from "./libs/CounterOptions.js";
import PiniaOptionsComponent from "./components/PiniaOptionsComponent.vue";
import PiniaComponent from "./components/PiniaComponent.vue";

const counterStore = useCounterStore();

// 访问getter函数 犹如属性
counterStore.hasChanged = false;
counterStore.isAdmin = true;

const replace = function () {
    counterStore.$patch({count: 100, name: '张三2'});
};

const updateItems = function () {
    counterStore.$patch(state => {
        state.count = 200;
        state.name = '张三3';
        state.items.push('item-' + Math.round(Math.random() * 100));
    });
    counterStore.hasChanged = true;
};

// 订阅状态
counterStore.$subscribe((mutation,  state) => {
    console.log('状态被修改：', mutation, state);
});

// 解构 getter 函数（提取为 ref）
// 跳过所有的 action 或非响应式 (不是 ref 或 ) 的属性
const { getItem, getActiveItem } = storeToRefs(counterStore);

// 作为 action 的 increment 可以直接解构
const { increment, output } = counterStore
</script>

<template>
    <div>
        <h3>Pinia Example</h3>
        <div>COUNT: {{ counterStore.count }}</div>
        <div>DOUBLE COUNT: {{ counterStore.double }}</div>
        <div>DOUBLE PLUS COUNT: {{ counterStore.doublePlus }}</div>
        <div>NAME: {{ counterStore.name }}</div>
        <div>ITEMS: {{ counterStore.items }}</div>
        <div>is admin: {{ counterStore.isAdmin }}</div>
        <div>hasChanged: {{ counterStore.hasChanged }}</div>
        <div>raw getItem: {{counterStore.getItem(0)}}</div>
        <div>getItem: {{getItem(0)}}</div>
        <div>getActiveItem: {{getActiveItem(0)}}</div>
        <div>otherStore: {{counterStore.otherStore}}</div>

        <hr/>
        <div>
            <button @click="counterStore.increment()">增加</button>
            <button @click="counterStore.$reset()">重置</button>
            <button @click="replace">替换</button>
            <button @click="updateItems">变更</button>
            <button @click="counterStore.pushItems('item-' + Math.round(Math.random() * 100))">添加数组</button>
            <button @click="counterStore.output()">输出日志</button>
            <button @click="output()">输出日志</button>
            <button @click="increment()">增加</button>
        </div>
        <hr/>
    </div>

    <div>
        <h3>Options Component</h3>
        <PiniaOptionsComponent></PiniaOptionsComponent>
        <hr/>
        <PiniaComponent></PiniaComponent>
    </div>
</template>

