<script>

</script>

<template>
    <h5>子页面</h5>
    <div>
        <div v-if="$route.params.id">product：{{$route.params.id}}</div>
        <div v-if="$route.query.q">search：{{$route.query.q}}</div>
    </div>
</template>

<style scoped>
</style>