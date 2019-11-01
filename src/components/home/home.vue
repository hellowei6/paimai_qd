<template>
  <!-- 底部 -->

  <div class="home">
    <div class="back3"></div>
    <div class="back1">
      <div class="back2"></div>
    </div>
    <!-- 头部 -->
    <top class="top" id="gotop"></top>
    <!-- 假一赔三 -->
    <tel></tel>
    <!-- 双11 -->
    <shuang></shuang>

    <!-- 拍卖 -->
    <pai></pai>
    <!-- 精挑细选 -->
    <jing></jing>
    <!-- 发现惊喜 -->
    <superise></superise>
    <!-- 拍卖专场 -->
    <live></live>
    <!-- 全部商品 -->
    <all></all>
    






    <!-- 动态布局 -->
    <!-- 导航 -->
    <!-- <navList></navList> -->
    <!-- 回到顶部 -->
    <!-- <gotop></gotop> -->
    <!-- 猜你喜欢 -->
    <!-- <like></like> -->




  </div>
</template>
<script>
import top from "./components/top.vue";
import tel from "./components/tel.vue";
import shuang from "./components/shuang.vue";
import pai from "./components/pai.vue";
import jing from "./components/jing.vue";
import superise from "./components/superise.vue";
import live from "./components/live.vue";
import all from "./components/all.vue";
// import like from "./components/like.vue";
// import navList from "./components/nav.vue";
// import gotop from "./components/gotop.vue";

export default {
  components: {
    top,
    tel,
    shuang,
    pai,
    jing,
    superise,
    live,
    all,
    // like,
    // navList,
    // gotop,
  },
  created(){
    window.onscroll=()=>{
      var h=document.documentElement.scrollTop;
          window.console.log(h,".....")
    }
  }
};
</script>
<style lang="less" scoped>
.back3 {
  // width: 100%;
  // background: rgb(233, 234, 236);
  // padding-inline-start: 0;
  // -webkit-padding-start: 0;
  // z-index: -3;
  border: 0px solid black;
  position: absolute;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 800%;
  background-color: rgb(233, 234, 236);
  z-index: -3;
}
.back1 {
  border: 0px solid black;
  position: absolute;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 315px;
  position: fixed;
  background-color: rgb(183, 9, 19);
  z-index: -2;
  .back2 {
    border: 0px solid black;
    position: absolute;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    bottom: -0.5px;
    left: 0px;
    width: 100%;
    height: 168px;
    background-image: linear-gradient(rgb(183, 9, 19), rgb(233, 234, 236));
    z-index: -1;
  }
}

.top {
  position: fixed;
  top: 0;
  left: 0;
}
</style>