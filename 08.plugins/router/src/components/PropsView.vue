<script setup>
defineProps({
    id: String,
    query: String,
    flag: Boolean
})
</script>

<template>
    <h4>Props Manager</h4>
    <div>ID: {{ id }}</div>
    <div>QUERY: {{ query }}</div>
    <div>FLAG: {{ flag }}</div>
</template>

<style scoped>
</style>