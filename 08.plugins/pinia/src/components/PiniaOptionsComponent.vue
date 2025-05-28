<script>
import {useCounterStore} from "../libs/CounterOptions.js";

export default {
    name: "PiniaOptionsComponent",
    setup() {
        const counterStore = useCounterStore();
        counterStore.increment();

        return {
            counterStore
        };
    },
    computed: {
        calculate() {
            return this.counterStore.count * 2;
        }
    },
    methods: {
        add() {
            this.counterStore.increment();
        }
    }
}
</script>

<template>
    <div>calculate: {{ calculate }}</div>
    <button @click="add">add</button>
</template>

<style scoped>

</style>