<template>
  <div>
    <!-- 轮播 -->
    <autowrapcell></autowrapcell>
    <!--主内容  -->
    <contents></contents>
    <!-- 热门圈子推荐 -->
    <hot></hot>
    <!-- 固定部分 -->
    <fastion></fastion>
    <!-- 主内容 -->
    <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
    <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
    <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
    <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
  </div>
</template>
<script>
import fastion from "./fastion.vue"
import autowrapcell from "./autowrapcell.vue";
import contents from "./contents.vue";
import hot from "./hot.vue";
import contents1 from "./contents1.vue";
import contents2 from "./contents2.vue"
export default {
  components: {
    autowrapcell,
    contents,
    hot,
   fastion,
   contents1,
   contents2
  }
};
</script>
<style lang="less" scoped>

</style>