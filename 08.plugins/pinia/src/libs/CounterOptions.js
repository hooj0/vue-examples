import {defineStore} from 'pinia'
import {useCounterStore as useCounter} from "./CounterComposition.js";

/*
state 是 store 的数据 (data)，
getters 是 store 的计算属性 (computed)，
而 actions 则是方法 (methods)
*/
// counter 是 store 的ID，唯一性
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: '张三',
        age: 18,
        isAdmin: true,
        items: ['abc'],
        hasChanged: false,
    }),
    getters: {
        double: (state) => state.count * 2,
        doublePlus() {
            // 访问其他getter
            return this.double + 1;
        },
        pushItems: (state) => {
            // 返回函数
            return (item) => state.items.push(item);
        },
        getItem: state => {
            // 此方式没有缓存
            return (index) => state.items[index];
        },
        getActiveItem: state => {
            // 此方式有缓存
            const activeItems = state.items.filter((item, index) => index > 2);
            return (index) => activeItems.find((item, idx) => { if (index == idx) return item })
        },
        otherStore(state) {
            const other = useCounter();
            return other.count + state.count;
        },
    },
    actions: {
        increment() {
            this.count++
            return this.count;
        },
        output() {
            console.log(this.count, this.name, this.age, this.isAdmin, this.items, this.hasChanged);
        },
        async incrementAsync() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.count++;
        },
        readOther() {
            // 可以访问其他 store
        },
    }
});