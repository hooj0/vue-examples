<script setup>
import HelloWorld from './components/HelloWorld.vue'

// 局部导入
import SimpleComponent from './components/SimpleComponent.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue"/>
  <div>
    <h2>自定义组件</h2>

    <!-- 局部注册 -->
    <SimpleComponent message="局部注册组件"/>
  </div>
  <div>
    <h2>全局组件</h2>
    <my-simple-component message="全局注册组件"></my-simple-component>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
