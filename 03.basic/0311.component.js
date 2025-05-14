import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
    setup() {
        const count = ref(0);
        return { count };
    },
    template: `
    <button @click="count++">
      你点击了我 {{count}} 次
    </button>`
};

export const CalcSumComponent = {
    setup() {
        const count = ref(0);
        return {
            count
        };
    },
    // 内联模板
    template: "#calc-sum-component",
};

export const PropsComponent = {
    props: ['msg'],
    setup(props) {
        return {
            msg: props.msg
        };
    },
    // 内联模板
    template: `
    <div>props: {{ msg }}</div>
    `
};

export const EventComponent = {
    props: [ "title", "author" ],
    emits: [ "go-home" ],
    setup(props, ctx) {
        // 手动显示触发事件，在加载组件时触发一次
        ctx.emit("go-home");
        return {
            title: props.title,
            author: props.author
        };
    },
    // 内联模板
    template: `
    <div>
      <span>{{title}}</span>
      <button @click="$emit('go-home')">{{author}}</button>
    </div>
    `
};