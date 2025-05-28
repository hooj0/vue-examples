<script>

</script>

<template>
    <h4>User Manager</h4>
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <div v-if="$route.params.orderId">order：{{$route.params.orderId}}</div>
        <div v-if="$route.params.productName">product：{{$route.params.productName}}</div>
    </div>

    <router-view />
</template>

<style scoped>
</style>