import { computed, ref, inject } from 'vue';
import {defineStore} from 'pinia'

/*
ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions
*/
export const useCounterStore = defineStore('counter2', () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
        count.value++;
    }

    // 这里假定 `app.provide('appProvided', 'value')` 已经调用过
    const appProvided = inject('appProvided');
    console.log('appProvided:', appProvided);

    return { count, doubleCount, increment };
});