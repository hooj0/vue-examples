<script>
import {mapActions, mapState, mapStores, mapWritableState} from "pinia";
import {useCounterStore} from "../libs/CounterOptions.js";

export default {
    computed: {
        // 可使用 this.counterStore 访问state
        ...mapStores(useCounterStore),
        // 读取 double
        ...mapState(useCounterStore, ["double", "doublePlus"]),
        ...mapState(useCounterStore, {
            // 注册double 到 myDouble
            myDouble: "double",
            // 自定义方法
            ohDouble: (store) => store.double * 2,
            // 它可以访问 `this`
            magicValue(store) {
                // 访问上面的 mapState 注册属性
                return store.double + this.double + this.doublePlus
            },
        }),
        // 可以读写的状态（不能返回函数）
        ...mapWritableState(useCounterStore, ["count", "name"])
    },
    methods: {
        add() {
            // 可以访问 counterStore，通过上面的 mapStores
            this.counterStore.increment();
        },
        // 可以访问 increment()
        ...mapActions(useCounterStore, ["increment"]),
        ...mapActions(useCounterStore, {
            // 映射 `this.myCustomMethod()` 到 `counterStore.increment()`
            myCustomMethod: "increment",
        }),
    }
};
</script>

<template>
    <div>counterStore.count: {{counterStore.count}}</div>
    <div>counterStore.name: {{counterStore.name}}</div>
    <div>double : {{ double }}</div>
    <div>doublePlus : {{ doublePlus }}</div>
    <div>myDouble : {{ myDouble }}</div>
    <div>ohDouble : {{ ohDouble }}</div>
    <div>magicValue: {{magicValue}}</div>
    <button @click="add">method - add</button>
    <button @click="increment">method - increment</button>
    <button @click="myCustomMethod">method - myCustomMethod</button>
    <button @click="count = 1">Writable - count</button>
    <button @click="name = 'jack'">Writable - name</button>
    <button @click="double = 11">ERROR - readOnly</button>
</template>

<style scoped>

</style>