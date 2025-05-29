import {createApp, inject} from 'vue'
import {createRouter, createWebHistory, NavigationFailureType, isNavigationFailure} from "vue-router";

import './style.css'
import App from './App.vue'

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import NotFoundView from "./components/NotFoundView.vue";
import UserView from "./components/UserView.vue";
import RouterMatchView from "./components/RouterMatchView.vue"
import ChildrenView from "./components/ChildrenView.vue"
import PropsView from "./components/PropsView.vue"
import CompositionView from "./components/CompositionView.vue";

const router = createRouter({
    history: createWebHistory(),
    // 路由加载页面后滚动到顶部
    scrollBehavior(to, from, savedPosition) {
        console.log('scrollBehavior', to, from, savedPosition);
        return {
            top: 0,
            left: 0,
            behavior: 'smooth',
            // 滚动到元素
            el: "main"
        }
    },
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
        { path: '/product',
            children: [
                { path: 'users', component: ChildrenView, meta: { admin: 'root'} },
                { path: 'config', component: ChildrenView, meta: { admin: 'root', user: 'jack' } },
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

        { path: '/account/list', component: CompositionView, name: 'account' },
        { path: '/account/:id/edit', component: CompositionView },
        // 延迟加载
        { path: '/account/detail', component: () => import('./components/CompositionView.vue') },
    ],
});

// 动态添加路由
const matchRouter = router.addRoute({ path: '/admin/users', component: RouterMatchView, name: 'admin-users' });
// 替换位置，但不改变路由
router.replace(router.currentRoute.value.fullPath);

// 删除路由
matchRouter();
router.removeRoute('admin-users');

console.log(router.hasRoute('admin-users'), router.getRoutes());

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // to 表示正要进入的路由
    // from 表示当前正在离开的路由
    // next 表示路由导航
    console.log('beforeEach', to, from);

    if (to.path.startsWith('/product')) {
        console.log('meta:', to.meta);
    }

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
        console.log('failure：', failure);
    }

    /**
     * aborted：在导航守卫中返回 false 中断了本次导航。
     * cancelled： 在当前导航完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。
     * duplicated：导航被阻止，因为我们已经在目标位置了。
     */
    if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
        // 给用户显示一个小通知
        alert('You have unsaved changes, discard and leave anyway?')
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
