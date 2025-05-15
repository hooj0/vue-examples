<script setup>
// 也可以是 数组格式
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: '默认标题'
  }
});

console.log(props.title + ': ' +props.message);
</script>

<template>
    <hr/>
    <li>PropsCompositionComponent(组合式API)</li>
    <span>{{ props.title }}</span>
    <span>{{ props.message }}</span>
</template>

<style scoped>

</style>