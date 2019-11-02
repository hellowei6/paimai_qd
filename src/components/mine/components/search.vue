<template>
  <div class="search">
    <div class="box1">
      <a href="" class="at">
      <img class="zuo" src="../image/zuojiantou.png" alt />
    </a>
    <span class="span">我的拍卖</span>
   <img class="sheng" src="../image/shengLueHao.png" alt />
    </div>
   
    <div class="box">
     <span class="sp1">子夜时空</span>
     <a href="#" class="ax">
         <span class="sp2">提醒设置</span>
         <img src="" alt="" class="iconfont icon-shezhi1">
     </a>
    </div>
    <!-- <div class="bei">
      <div class="bei1">
        <span>功能直达</span>
        <img src="../image/a1.png" alt="">
      </div>
      <div class="bei2">
        <a href="">
          <img src="../image/a2.png" alt="">
          <span>消息</span>
        </a>
         <a href="">
          <img src="../image/a3.png" alt="">
          <span>首页</span>
        </a>
         <a href="">
          <img src="../image/a4.png" alt="">
          <span>我的淘宝</span>
        </a>
         <a href="">
          <img src="../image/a5.png" alt="">
          <span>购物车</span>
        </a>
         <a href="">
          <img src="../image/a6.png" alt="">
          <span>客服小蜜</span>
        </a>
         <a href="">
          <img src="../image/a7.png" alt="">
          <span>我要反馈</span>
        </a>
         <a href="">
          <img src="../image/a8.png" alt="">
          <span>分享</span>
        </a>
        <div class="bei3"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
 
};

</script>
<style lang="less" scoped>
.search {
  border: 0px solid black;
  position: fixed;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  align-content: flex-start;
  flex-shrink: 0;
  width: 750px;
  height: 178px;
  
  -webkit-box-align: center;
  align-items: center;
  z-index: 100;
  background-color: rgb(195, 31, 58);
 .box1 {
  border: 0px solid black;
   position: fixed;
   top: 0px;
  left: 0px;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  align-content: flex-start;
  flex-shrink: 0;
  width: 750px;
  height: 94px;
  padding: 0px 12px;
  -webkit-box-align: center;
  align-items: center;
  z-index: 100;
  background-color: rgb(195, 31, 58);
 }
 .at {
    width: 48px;
    height: 48px;
    display: flex;
     background-color: rgb(195, 31, 58);
 }
  .zuo {
    width: 48px;
    height: 48px;
    display: flex;
     background-color: rgb(195, 31, 58);
  }
  .span {
    width: 600px;
    height: 80px;
    display: flex;
    font-size: 18px;
    color: #ffffff;
    padding-left: 20px;
    padding-top: 30px;
  }
  .sheng {
    width: 36px;
    height: 36px;
    display: flex;
    margin-right:20px;
  }
  .box {
    border: 0px solid black;
     position: fixed;
     top:0px;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    width: 750px;
    height: 88px;
    padding: 0px 12px;
    top: 80px;
    left: 0px;
    -webkit-box-align: center;
    align-items: center;
    z-index: 100;
    background-color: rgb(195, 31, 58);
  }
  .sp1 {
    
    font-size: 28px;
    margin-left: 10px;
    color: rgb(255, 255, 255);
    line-height: 20px;
    width: 286px;
    height:36px;
  }
  .sp2 {
      white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 13px;
    margin-right: 12px;
    color: rgb(255, 255, 255);
  }
  .ax {
      text-decoration: none;
    display: flex;
    position: absolute;
    top:0px;
    right: 36px;
    width:160px;
    height:36px;
     background-color: rgb(195, 31, 58);
    -webkit-box-orient: horizontal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
  }
  .ax img {
    width:32px;
    height:32px;
      color:#ffff;
       position: absolute;
    top:0px;
    right: -10px;
  }
  .bei {
    z-index: 100;
     position: absolute;
      top:0px;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
   
    width: 750px;
    height: 500px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    background-image: linear-gradient(rgba(18, 19, 20, 0.95), rgba(42, 42, 43, 0.95));
    padding-top: 0px;
  }
 
  .bei1 {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    height: 54px;
    margin-top: 26px;
    -webkit-box-align: center;
    align-items: center;
  }
  .bei1 span {
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex: 1 1 0%;
    font-size: 17px;
    color: rgb(255, 255, 255);
    line-height: 34px;
    margin-left: 36px;
    -webkit-box-flex: 1;
  }
  .bei1 img {
    display: flex;
    width: 32px;
    height: 32px;
    margin-right: 36px;
  }
  .bei2 {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-flow: row wrap;
    place-content: flex-start space-between;
    flex-shrink: 0;
    width: 750px;
    height: 382px;
    padding: 0px 36px 36px;
    -webkit-box-pack: justify;
  }
  a {
    text-decoration: none;
    position: relative;
    width: 150px;
    height: 160px;
    margin-top: 26px;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    border-radius: 24px;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  img {
    display: flex;
    width: 48px;
    height: 48px;
    margin-bottom: 18px;
  }
  span {
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 12px;
    color: rgb(255, 255, 255);
    text-align: center;
    height: 24px;
    line-height: 24px;
  }
  .bei3 {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 150px;
    height: 160px;
    margin-top: 26px;
  }
 
}
</style>