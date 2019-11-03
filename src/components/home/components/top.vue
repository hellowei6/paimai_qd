<template>
<!-- 阿里拍卖 -->
  <div class="top">
    <!-- 左边图片 -->
    <img class="topleft" src="../images/top.png" alt />
    <!-- 中间图标 -->
    <div class="topcenter">
      <img src="../images/top2.png" alt />
    </div>
    <!-- 右边弹出框 -->
    <div class="topright">
    <a href="#">
    <search class="right"></search>
    </a>
    </div>
  </div>
</template>
<script>
import search from "./search.vue"
export default {
  components:{
    search
  }
};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  box-sizing:border-box;
  margin: auto;
  height: 88px;
  align-items: center; //垂直居中
  display: flex;
  flex-direction: row;
  z-index: 11;
  background: rgb(183, 9, 19);
  position:relative;
position:fixed;
top:0;

  .topleft {
    width: 45px;
    height: 48px;
    padding: 0 10px;
  }
  .topcenter {
    width: 20%;
      height: 44px;
    img {
      width: 100%;
      height: 100%;
      
    }
  }
  .topright{
    width:50%;
    position:absolute;
    top:10%;
    right:0;
    .right{
      width:80%;
    }
  }
  
  
}
</style>