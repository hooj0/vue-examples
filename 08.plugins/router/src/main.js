import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import './style.css'
import App from './App.vue'

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import NotFoundView from "./components/NotFoundView.vue";
import UserView from "./components/UserView.vue";
import RouterMatchView from "./components/RouterMatchView.vue"
import ChildrenView from "./components/ChildrenView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/user/:id', component: UserView },
        { path: '/user/:id/posts/:postId', component: UserView },
        { path: '/about', component: AboutView },
        { path: '/:pathMatch(.*)*', component: NotFoundView },
        // 匹配数字
        { path: '/order/:orderId(\\d+)', component: RouterMatchView },
        // 匹配字符串
        { path: '/order/:productName', component: RouterMatchView },
        // 匹配大小写
        { path: '/order/:productName', component: RouterMatchView, sensitive: true },
        // 匹配任意字符
        { path: '/order/:productName', component: RouterMatchView, wildcard: true },
        // 使用 ? 修饰符(0 个或 1 个)将一个参数标记为可选
        // 将匹配 /product, /Product, 以及 /product/42 而非 /product/ 或 /product/42/
        { path: '/product/:id', component: RouterMatchView,
            children: [
                // 空路径 相当于 home 子页面的首页
                { path: '', component: ChildrenView },
                { path: 'list', component: ChildrenView },
                { path: 'detail', component: ChildrenView, name: 'product-detail' },
            ]
        },
        { path: '/admin',
            children: [
                { path: 'users', component: ChildrenView },
                { path: 'config', component: ChildrenView },
            ]
        },
    ]
});

createApp(App).use(router).mount('#app');
