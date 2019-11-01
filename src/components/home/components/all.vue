<template>
    <div class="all">
        <like class="like"></like>
        <router-view></router-view>
    </div>
</template>



<script>
import like from "./like.vue";
export default {
    components:{
        like,
    }
}
</script>



<style lang="less" scoped>
.all{
    width:96%;
    margin:auto;
    padding-top:10px;
    .like{
        width:100%;
    }
}
</style>