<script setup>
    defineProps({ title: String, content: String })
</script>

<template>
    <h4>{{ title }}</h4>
    <button>{{ content }}</button>
</template>

<style scoped>

</style>