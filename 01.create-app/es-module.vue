<!-- 一个简单的HTML页面，去掉了部分标签，可以用 vue后缀 -->
<script type="module">
  document.title = 'Hello Vue 3.0 + ES Module';
  
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    setup() {
      const message = ref('Hello World');
      return {
        message
      };
    }
  }).mount("#app");
</script>

<div id="app">
    {{ message }}
</div>