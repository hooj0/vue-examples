import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import './style.css'
import App from './App.vue'

import HomeView from "./components/HomeView.vue";
import AboutView from "./components/AboutView.vue";
import NotFound from "./components/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/about', component: AboutView },
        { path: '/:pathMatch(.*)*', component: NotFound }
    ]
});

createApp(App).use(router).mount('#app');
