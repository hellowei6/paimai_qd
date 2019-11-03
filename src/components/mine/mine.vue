<template>
    <div class="mine">
        <!-- 头部 -->
        <search></search>
        <!-- 提醒 -->
        <catelist></catelist>
        <!-- 我的拍卖 -->
        <auction></auction>
        <!-- 我的工具 -->
        <mytools></mytools>
        <!-- 推荐 -->
        <recommend></recommend>
        <!-- 商品推荐 -->
        <commodity></commodity>
    </div>
</template>
<script>
import search from "./components/search.vue"
import catelist from "./components/catelist.vue"
import auction from "./components/auction.vue"
import mytools from "./components/mytools.vue"
import recommend from "./components/recommend.vue"
import commodity from "./components/commodity.vue"
export default {
    components: {
        search,
        catelist,
        auction,
        mytools,
        recommend,
        commodity,
    }
}
</script>
