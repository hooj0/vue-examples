<script>
export default {
  name: "SimpleComponent",
  props: ["message"],
  setup(props) {
    return { message: props.message };
  }
}
</script>

<template>
  <div class="component">
    {{ message }}
  </div>
</template>

<style scoped>
.component {
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  margin: 10px 0;
}
</style>