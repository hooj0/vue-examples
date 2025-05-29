import {createApp, inject} from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import './style.css'
import App from './App.vue'

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import NotFoundView from "./components/NotFoundView.vue";
import UserView from "./components/UserView.vue";
import RouterMatchView from "./components/RouterMatchView.vue"
import ChildrenView from "./components/ChildrenView.vue"
import PropsView from "./components/PropsView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView,
            // 独享守卫，beforeEnter: [func, func2] 支持多个回调
            // 父路由和子路由都支持 独享守卫
            beforeEnter: (to, from) => {
                console.log('Home => beforeEnter', to, from);
                return true;
            }
        },
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
        // 重定向
        { path: '/admin/home', redirect: '/' },
        { path: '/admin/product', redirect: {name: 'product-detail', params: {id: 1}} },
        { path: '/search', component: ChildrenView },
        // 带参数的 redirect
        { path: '/admin/search/:text', redirect: to => {
                return {path: "/search", query: {q: to.params.text}}
            }
        },
        // 相对重定向
        { path: '/admin/page', redirect: to => {
                return to.path.replace(/page$/, 'product');
            }
        },
        // 别名
        { path: '/admin/settings', component: RouterMatchView, alias: ['/admin/cfg', '/admin/c/:id'] },
        // 传递 props 属性
        { path: '/props/:id', component: PropsView, props: true },
        { path: '/props/flag', component: PropsView, props: {flag: true} },
        { path: '/props/search', component: PropsView, props: route => ({query: route.query.q}) },
    ],
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // to 表示正要进入的路由
    // from 表示当前正在离开的路由
    // next 表示路由导航
    console.log('beforeEach', to, from);

    if (to.path === '/about') {
        next(false); // 阻止导航
    } else {
        next();
    }

    const global = inject('global');
    console.log('global: ', global);
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to, from, to.meta);
    next();
});

// 全局后置守卫
router.afterEach((to, from, failure) => {
    console.log('afterEach', to, from);
    if (failure) {
        console.log('failure', failure);
    }
});

createApp(App)
.provide("global", {  name: 'global', message: 'hallo'})
.use(router)
.mount('#app');

/**
 * 导航解析流程
 * --------------------------------------------------------
 * 导航被触发。
 * 在失活的组件里调用 beforeRouteLeave 守卫。
 * 调用全局的 beforeEach 守卫。
 * 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
 * 在路由配置里调用 beforeEnter。
 * 解析异步路由组件。
 * 在被激活的组件里调用 beforeRouteEnter。
 * 调用全局的 beforeResolve 守卫(2.5+)。
 * 导航被确认。
 * 调用全局的 afterEach 钩子。
 * 触发 DOM 更新。
 * 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
 */
