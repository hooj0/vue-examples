export default {
    name: "SimpleComponent",
    setup() {
        const message = "这是一个简单的组件！";
        return { message };
    },
    template: `
      <div>消息：{{ message }}</div>
    `
}