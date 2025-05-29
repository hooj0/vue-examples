<script>
export default {
    name: 'notfound',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    beforeRouterEnter(to, from, next) {
        console.log('beforeRouterEnter', to, from);
        next();
    },
    beforeRouterUpdate(to, from) {
        console.log('beforeRouterUpdate', to, from);
    },
    beforeRouteLeave(to, from) {
        console.log('beforeRouteLeave', to, from);
    }
}
</script>

<template>
    <div>Not Found page</div>
    <div>{{ msg }}</div>
</template>

<style scoped>
</style>