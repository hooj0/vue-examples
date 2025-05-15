<script setup>
const props = defineProps({
    userName: String,
    userAge: Number,
});

console.log("PropsInputComponent：", props);
</script>

<template>
    <hr/>
    <li>传递 Props 属性值</li>
    <span>{{ userName}} - {{ userAge}}</span>
</template>

<style scoped>
    span {
        font-size: 15px;
        color: green;
    }
</style>