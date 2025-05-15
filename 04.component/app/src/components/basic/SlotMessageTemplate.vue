<script>
export default {
    name: "SlotMessageTemplate"
}
</script>

<template>
    <div>
        <strong>SlotMessageTemplate</strong>
        <b name="message">
            <div>默认内容</div>
        </b>
        <slot/>
    </div>
</template>

<style scoped>
    div {
        border: 1px solid black;
    }
</style>