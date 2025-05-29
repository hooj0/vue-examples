<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// 动态路由跳转
console.log('push ===>>> ');
router.push({name: 'product-detail', params: {id: 1}});

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (newId) {
            console.log('导航完成后获取数据，发起异步请求：', 'newId', newId, 'oldId:', oldId);
        }
    }, {
        immediate: true
    }
);
</script>

<template>
    <h5>子页面</h5>
    <div>
        <div v-if="$route.params.id">product：{{$route.params.id}}</div>
        <div v-if="$route.query.q">search：{{$route.query.q}}</div>

        <div v-if="$route.meta.admin">admin：{{$route.meta.admin}}</div>
        <div v-if="$route.meta.user">user：{{$route.meta.user}}</div>
    </div>
</template>

<style scoped>
</style>