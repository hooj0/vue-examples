<script>
export default {
    created() {
        // 监听路由参数变化
        this.$watch(
            () => this.$route.params.id,
            (newId, oldId) => {
                console.log('newId', newId);
            }
        );
    },
    async onBeforeRouteUpdate(to, from) {
        console.log('onBeforeRouteUpdate', to.params, from);
    },
}
</script>

<template>
    <h4>User Manager</h4>
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <!-- 当前路由可以通过 $route 在模板中访问 -->
        USER: {{ $route.params.id }}
        <div v-if="$route.params.postId">
            POST ID: {{ $route.params.postId }}
        </div>
        <div v-if="$route.query.title">
            TITLE: {{ $route.query.title }}
        </div>
    </div>
</template>

<style scoped>
</style>