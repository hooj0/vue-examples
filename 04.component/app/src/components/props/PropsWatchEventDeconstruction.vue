<script setup>
import {watchEffect, watch} from "vue";

const {message, title} = defineProps(['message', 'title']);

watchEffect(() => {
    console.log('watchEffect =>', message, title);
});

watch(() => message, (data) => {
    console.log('watch =>', data);
}, {immediate: true});

// useComposable(() => message);
</script>

<template>
    <hr/>
    <li>PropsWatchEventDeconstruction 响应式解构</li>
    <div>
        <span>{{message}}</span>
        <span>点下：{{title}}</span>
    </div>
</template>

<style scoped>

</style>