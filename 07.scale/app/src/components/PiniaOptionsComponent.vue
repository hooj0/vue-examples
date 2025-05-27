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
}
</script>

<template>
    <div>calculate: {{ calculate }}</div>
</template>

<style scoped>

</style>