<script>
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    // 在导航完成前获取数据
    beforeRouterEnter(to, from, next) {
        console.log('在导航完成前获取数据1', to, from);
        next()
    },
    // 在导航完成前获取数据
    async beforeRouteUpdate(to, from) {
        console.log('在导航完成前获取数据2', to, from);
    }
}
</script>

<template>
    <div>About page</div>
</template>

<style scoped>

</style>