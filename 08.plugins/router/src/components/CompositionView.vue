<script setup>
import {useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate, RouterLink, useLink } from "vue-router";
import {watch} from "vue";

const route2 = useRoute();
const router = useRouter();

function pushQuery(query) {
    // 路由跳转
    router.push({
        name: 'account',
        query: {
            ...route2.query,
            ...query
        }
    })
}

watch(() => route2.query, async (newQuery, oldQuery) => {
    console.log('CompositionView => newQuery', newQuery, 'oldQuery', oldQuery);
});

onBeforeRouteLeave(async (to, from) => {
    console.log('CompositionView => onBeforeRouteLeave', to, from);
});

onBeforeRouteUpdate(async (to, from) => {
    console.log('CompositionView => onBeforeRouteUpdate', to, from);
});

const props = defineProps({
    ...RouterLink.props,
    inactiveClass: String
});

const {
    // 解析出来的路由对象
    route,
    // 用在链接里的 href
    href,
    // 布尔类型的 ref 标识链接是否匹配当前路由
    isActive,
    // 布尔类型的 ref 标识链接是否严格匹配当前路由
    isExactActive,
    // 导航至该链接的函数
    navigate
} = useLink(props);

console.log('CompositionView => route', route.value, 'href', href.value, 'isActive', isActive.value, 'isExactActive', isExactActive.value);


</script>

<template>
    <div>{{ route.fullPath }}</div>
    <button @click="pushQuery({page: 1})">page 1</button>
    <div>{{ route.query }}</div>
    <div>{{ $route.params.id }}</div>

    <router-view  v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<style scoped>

</style>