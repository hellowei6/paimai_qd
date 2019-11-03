<template>
  <!-- 底部 -->

  <div class="home">
    <div class="back3"></div>
    <div class="back1" v-if="isShow">
      <div class="back2"></div>
    </div>
    <!-- 头部 -->
    <top class="top"></top>
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
    <navList ref="nav"></navList>
    <!-- 回到顶部 -->
    <gotop v-if="hide2" class="gotop" ></gotop>
    <!-- 猜你喜欢 -->
    <like v-if="hide1" class="like" ></like>
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
import like from "./components/like.vue";
import navList from "./components/nav.vue";
import gotop from "./components/gotop.vue";

export default {
  data(){
    return{
      isShow:true,
      hide1:true,
      hide2:true
    }
  },
  components: {
    top,
    tel,
    shuang,
    pai,
    jing,
    superise,
    live,
    all,
    like,
    navList,
    gotop,
  },
  mounted(){
    window.onscroll=()=>{
      var h=document.documentElement.scrollTop||document.body.scrollTop;
      window.console.log(h);
      if(h>=2000){
        this.hide2=true;
        this.isShow=false;
            this.$refs.nav.hide=false;
            this.hide1=true;
            this.hide1.style

      }else if(h>=1350){
           this.hide2=false;
            this.isShow=false;
            this.$refs.nav.hide=false;
            this.hide1=true;
         }else if(h>=200){
           this.hide2=false;
            this.isShow=false;
            this.$refs.nav.hide=true;
            this.hide1=false;    
         }else if(h<200){
           this.hide1=false;
           this.hide2=false;
           this.isShow=true;
           this.$refs.nav.hide=false;
            
         }
         
    }
  },


};
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.home {
  width: 100%;
  overflow-x: hidden;
  .back3 {
    // width: 100%;
    // background: rgb(233, 234, 236);
    // padding-inline-start: 0;
    // -webkit-padding-start: 0;
    // z-index: -3;
    border: 0px solid black;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(233, 234, 236);
    z-index: -3;
  }
  .back1 {
    border: 0px solid black;
    position: absolute;
    flex-shrink: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 560px;
    background-color: rgb(183, 9, 19);
    z-index: -2;
    position: fixed;
    top:0;
    left:0;
    .back2 {
      border: 0px solid black;
      position: absolute;
      bottom: 0;
      left: 0px;
      width: 100%;
      height: 50%;
      background-image: linear-gradient(rgb(183, 9, 19), rgb(233, 234, 236));
      z-index: -1;
      position: fixed;
    top:0;
    left:0;
    }
  }

  .like{
    width:100%;
    position: fixed;
    left:0;
    top:88px;
    z-index: 99;
    background: white;
  }


  .gotop{
    position:fixed;
    bottom:10%;
    right:5%;
    z-index: 99;
  }
}
</style>