<script setup>
import { ref, defineAsyncComponent, hydrateOnInteraction } from 'vue';

import HelloWorld from './components/basic/HelloWorld.vue'

// 组件基础
import AddCount from "./components/basic/AddCount.vue";
import MessageTemplate from "./components/basic/MessageTemplate.vue";
import SlotMessageTemplate from "./components/basic/SlotMessageTemplate.vue";

// 局部导入
import SimpleComponent from './components/registration/SimpleComponent.vue'

// Props
import PropsOptionComponent from "./components/props/PropsOptionComponent.vue";
import PropsCompositionComponent from "./components/props/PropsCompositionComponent.vue";
import PropsWatchEventDeconstruction     from "./components/props/PropsWatchEventDeconstruction.vue";
import PropsInputComponent from "./components/props/PropsInputComponent.vue";

// 异步组件
import ErrorMessage from "./components/async/ErrorMessage.vue";
import LoadingMessage from "./components/async/LoadingMessage.vue";

const userInfo = ref({
    userName: 'tom',
    userAge: 122
});

const AsyncMessage = defineAsyncComponent({
    // 加载组件的函数
    loader: () => import('./components/async/AsyncMessage.vue'),
    // 延迟渲染的毫秒数
    delay: 1000,
    // 超时毫秒数
    timeout: 3000,
    loadingComponent: LoadingMessage,
    errorComponent: ErrorMessage,
    onError(error, retry, fail) {
        if (error.message.match(/fetch/) && retry) {
            retry()
        } else {
            fail()
        }
    },
    // 惰性激活
    // 在空闲时激活
    // hydrate: hydrateOnIdle(30000),
    // 在可见时激活
    // hydrate: hydrateOnVisible(),
    // 在媒体查询匹配时进行激活
    // hydrate: hydrateOnMediaQuery('(max-width: 768px)'),
    // 交互时激活
    hydrate: hydrateOnInteraction('click')
});
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

      <HelloWorld msg="默认示例"/>
  </div>

  <h1>组件注册</h1>
  <div>
    <h3>局部组件</h3>
    <!-- 局部注册 -->
    <SimpleComponent message="局部注册组件"/>

    <h3>全局组件</h3>
    <my-simple-component message="全局注册组件"></my-simple-component>
  </div>

    <h1>Props</h1>
    <div>
        <h3>Props 声明</h3>
        <props-option-component message="props 对象模式示例(组合式)" title="props 声明用法示例"></props-option-component>
        <props-composition-component message="setup 模式编码(选项式)" title="props 声明用法示例"></props-composition-component>

        <h3>响应式解构Props</h3>
        <PropsWatchEventDeconstruction  message="响应式解构Props" title="props 响应式解构" @click="message = '标题被点击'"></PropsWatchEventDeconstruction>

        <h3>Props 传入参数</h3>
        <props-input-component user-age="22" user-name="jack"></props-input-component>
        <props-input-component v-bind:user-age="userInfo.userAge" :user-name="userInfo.userName + 'haha'"></props-input-component>
        <props-input-component v-bind="userInfo"></props-input-component>
    </div>

    <h1>异步组件</h1>
    <div>
        <async-message></async-message>
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
