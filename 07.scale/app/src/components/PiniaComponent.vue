<script>
import {mapActions, mapState, mapStores} from "pinia";
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
            // 它可以访问 `this`，但它没有标注类型...
            magicValue(store) {
                // 访问上面的 mapState 注册属性
                return store.double + this.double + this.doublePlus
            },
        })
    },
    methods: {
        add() {
            // 可以访问 counterStore，通过上面的 mapStores
            this.counterStore.increment();
        },
        // 可以访问 increment()
        ...mapActions(useCounterStore, ["increment"]),
    }
};
</script>

<template>
    <div>count: {{counterStore.count}}</div>
    <div>name: {{counterStore.name}}</div>
    <div>double : {{ double }}</div>
    <div>doublePlus : {{ doublePlus }}</div>
    <div>myDouble : {{ myDouble }}</div>
    <div>ohDouble : {{ ohDouble }}</div>
    <div>magicValue: {{magicValue}}</div>
    <button @click="add">add</button>
    <button @click="increment">increment</button>
</template>

<style scoped>

</style>