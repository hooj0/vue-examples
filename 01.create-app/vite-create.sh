# 使用命令创建vue项目
$ npm create vue@latest

# 设置项目名称、选择项目需要的组件
$ npm create vue@latest -- --project-name=my-vue-project --features="router,vuex,pinia"

# 运行命令，安装依赖
$ npm install

# 运行命令，启动项目
$ npm run dev

# 运行命令，打包项目
$ npm run build

# 运行命令，启动项目并监听端口
$ npm run dev -- --open --port=8080

# 运行命令
$ npm run format