import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import './style.css'
import App from './App.vue'

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import NotFoundView from "./components/NotFoundView.vue";
import UserView from "./components/UserView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/user/:id', component: UserView },
        { path: '/user/:id/posts/:postId', component: UserView },
        { path: '/about', component: AboutView },
        { path: '/:pathMatch(.*)*', component: NotFoundView }
    ]
});

createApp(App).use(router).mount('#app');
