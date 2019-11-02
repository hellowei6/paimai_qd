<template>       
    <div class="whole1">
      <div class="element">
         <!-- 返回 -->
      <img class="return" src="https://gw.alicdn.com/tfs/TB137CML5LaK1RjSZFxXXamPFXa-72-72.png" alt />
      <!-- logo -->
       <div class="interest">
         <span>兴趣圈</span>
       </div>
      <!-- 分享 -->
        <img class="share" src="https://gw.alicdn.com/tfs/TB1s0GuL3HqK1RjSZFEXXcGMXXa-72-72.png" alt="">
     <!--扩张功能  -->
       <img class="key" src="https://gw.alicdn.com/tfs/TB1RfaiL9rqK1RjSZK9XXXyypXa-72-72.png" alt="">
     </div>
       <ul class="nav">
         <router-link tag="li" to="/circle/my" class="p">
           <span>我的</span>
         </router-link>
         <router-link tag="li" to="/circle/whole1" class="p">
           <span>推荐</span>
         </router-link>
         <router-link tag="li" to="/circle/question" class="p">
           <span>问答</span>
         </router-link>
      </ul>
        <router-view></router-view>
      </div>
</template>
<script>
export default {
  components:{

  }
}
</script>
<style lang="less" scoped>
.whole1{
 .element{
 
   background:url(https://gw.alicdn.com/tfs/TB1TvF6PxTpK1RjSZFMXXbG_VXa-750-500.png);
   height: 74px;
   width: 375px;
   z-index: 99;
 position: absolute;
 top: 0px;
  position: fixed;  
  .return{
    width:30px;
    height:30px;
    margin: 10px 6px;
    float: left;
    .img{
      width:24px;
      height:24px;
    }
  }
  .interest{
    width:257px;
    height:44px;
    float: left;
     text-align: center;
    span{
        font-size:18px;
        height:44px;
        line-height: 44px;
        color:rgb(225,225,225);
    }
  }
  .share{
      width:24px;
      height:24px;
      float: left;
      margin-top: 10px 
  }
  .key{
      width: 24px;
      height:24px;
      float: right;
      margin: 10px 10px;
  }
 }
 .nav{
     display: flex;
     width: 375px;
     height:29px;
     text-align: center;
     flex-direction: row;
     justify-content: center;
     left: -40px;
     top: 30px;
     z-index: 99;
     position: relative;
     position: fixed;
     .p{
         list-style: none;
         font-size:15px;
         line-height: 25px;
         width:54px;
         color:rgb(225,225,225);
         text-align: center;
         flex-direction: row;
         position: relative;
         z-index: 99;
     }
 }
}
</style>