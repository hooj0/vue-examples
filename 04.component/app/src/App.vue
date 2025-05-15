<script setup>
import HelloWorld from './components/HelloWorld.vue'
// 局部导入
import SimpleComponent from './components/registration/SimpleComponent.vue'
import AddCount from "./components/basic/AddCount.vue";
import MessageTemplate from "./components/basic/MessageTemplate.vue";
import SlotMessageTemplate from "./components/basic/SlotMessageTemplate.vue";
</script>

<template>
  <h1>组件基础</h1>
  <div>
      <h3>基础组件</h3>
      <add-count />
      <AddCount  />
      <message-template title="props 使用方法" content="这是一个示例" />
      <slot-message-template>
          插槽使用方法
      </slot-message-template>
  </div>

  <h1>组件注册</h1>
  <div>
    <h3>局部组件</h3>
    <!-- 局部注册 -->
    <SimpleComponent message="局部注册组件"/>

    <h3>全局组件</h3>
    <my-simple-component message="全局注册组件"></my-simple-component>
  </div>

  <HelloWorld msg="默认示例"/>
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
