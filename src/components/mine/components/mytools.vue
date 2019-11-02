<template>
  <div class="mytools">
      <div class="gong"></div>
  <span class="tools">我的工具</span>
  <div class="box">
      <a href="">
          <img src="../image/001.png" alt="">
          <span>保证金/预缴款</span>
      </a>
      <a href="">
          <img src="../image/002.png" alt="">
          <span>我要转卖</span>
      </a>
      <a href="">
          <img src="../image/003.png" alt="">
          <span>我的小蜜</span>
      </a>
      <a href="">
          <img src="../image/004.png" alt="">
          <span>爱车估价</span>
      </a>
      <a href="">
          <img src="../image/005.png" alt="">
          <span>大额支付</span>
      </a>
      <a href="">
          <img src="../image/006.png" alt="">
          <span>我的拍卖币</span>
      </a>
      <a href="">
          <img src="../image/007.png" alt="">
          <span>拍卖场</span>
      </a>
      <a href="">
          <img src="../image/008.png" alt="">
          <span>地图找房</span>
      </a>
  </div>
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang="less" scoped>
 .mytools {
     width:100%;
     height:204px;
     border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    margin-top:15px;
    .tools {
        white-space: pre-wrap;
    border-width: 0px 0px 0.5px;
    border-style: solid;
    border-color: black black rgb(235, 235, 235);
    border-image: initial;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 14px;
    padding-left: 12px;
    color: rgb(0, 0, 0);
    height: 36px;
    line-height: 36px;
    }
    .box {
        width:100%;
        height:162px;
        border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-flow: row wrap;
    align-content: flex-start;
    flex-shrink: 0;
    }
    a {
        text-decoration: none;
    display: flex;
    padding-top: 16px;
    width: 89.8px;
    height: 81px;
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-right: 0.5px solid rgb(230, 230, 230);
    border-bottom: 0.5px solid rgb(230, 230, 230);
    box-sizing: border-box;
    }
    img {
        border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    height: 26px;
    width: 26px;
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
    margin-top: 9px;
    color: rgb(102, 102, 102);
    }
    .gong {
         background:#F2F2F2;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    height: 6px;
    width:375px;
    }
 }
</style>
