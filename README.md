# vue-examples


## 创建应用

基于 `vite` 脚手架工具创建 `vue` 应用:

```bash
npm create vue@latest
npm create vue@latest my-project
npm create vue@latest my-project --template <template-name>
npm create vue@latest my-project --typescript
npm create vue@latest my-project --router --pinia 

# 进入项目目录
cd <your-project-name>

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建应用
npm run build

# 运行测试
npm run test

# 运行示例
npm run serve

# 格式化代码
npm run format
```

## 通过CDN使用Vue
在 vue 代码的html页面中 `script` 标签中导入 `vue.js` 文件开始使用 `vue`:
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
在 `script` 标签中定义 `app` 变量，并使用 `createApp` 方法创建 `app` 实例，并挂载到 `#app` 元素上。
运行示例代码：
```shell
npx serve
```
