<script type="module">
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