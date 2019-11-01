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
  width: 98%;
  margin: auto;
  height: 44px;
  align-items: center; //垂直居中
  border: 0px solid black;
  display: flex;
  flex-direction: row;
  z-index: 11;
  background: rgb(183, 9, 19);

  .topleft {
    width: 24px;
    height: 24px;
    padding: 0 6px;
  }
  .topcenter {
    width: 84px;
      height: 22px;
      margin-right:8%; 
    img {
      width: 100%;
      height: 100%;
      
    }
  }
  .topright{
    width:60%;
    .right{
      width:80%;
    }
  }
  
  
}
</style>