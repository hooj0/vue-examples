<script>
export default {
    name: "PropsOptionComponent",
    props: ['message', 'title'],
    setup(props) {
        console.log("props: ", props.message);
        return { message: props.message }
    }
}
</script>

<template>
    <hr/>
    <li>PropsOptionComponent(选项式API)</li>
    <span>{{ title }}</span>
    <span>props: {{ message }}</span>
</template>

<style scoped>
    span {
        margin: auto 2em;
    }
</style>