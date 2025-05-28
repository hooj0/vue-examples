<script setup>

</script>

<template>
    <h2>Router App!</h2>
    <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/user/jack">作者</RouterLink>
        <RouterLink to="/user/tom/posts/33221">博客</RouterLink>
        <RouterLink to="/user/jason/posts/123?title=java 30">文章</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
        <RouterLink to="/notfound">NotFound</RouterLink>

        <hr/>
        <RouterLink to="/order/2025001123">订单Id</RouterLink>
        <RouterLink to="/order/吊牌洗衣服">产品名称</RouterLink>

        <hr/>
        <RouterLink to="/product/123123/">首页</RouterLink>
        <RouterLink to="/product/1/list">列表</RouterLink>
        <RouterLink to="/product/2/detail">详情</RouterLink>
        <RouterLink :to="{ name: 'product-detail', params: { id: 666999 } }">详情/命名路由</RouterLink>

        <hr/>
        <router-link to="/admin/home">用户首页</router-link>
        <router-link to="/admin/product">用户商品</router-link>
        <router-link to="/admin/search/mouse">搜索</router-link>
        <router-link to="/admin/page">用户页</router-link>
        <router-link to="/admin/cfg">用户配置</router-link>
        <router-link to="/admin/c/file">用户配置</router-link>

        <hr/>
        <router-link to="/props/abc111">传递Props</router-link>
        <router-link to="/props/flag">对象Props</router-link>
        <router-link to="/props/search?q=aabbcvc">函数Props</router-link>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    nav, main {
        border: 2px solid #000;
        margin-bottom: 10px;
        padding: 10px;
    }

    nav > a + a {
        margin-left: 10px;
    }

    h2 {
        border-bottom: 1px solid #ccc;
        margin: 0 0 20px;
    }
</style>
