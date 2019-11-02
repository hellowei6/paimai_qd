<template>
  <div class="auction">
   <span class="auc">我的拍卖</span>
   <div class="auc1">
       <a href="#">
           <img src="../image/01.png" alt="">
           <span>待交保</span>
       </a>
        <a href="#">
           <img src="../image/02.png" alt="">
           <span>待开拍</span>
       </a>
        <a href="#">
           <img src="../image/03.png" alt="">
           <span>竞价中</span>
       </a>
        <a href="#">
           <img src="../image/04.png" alt="">
           <span>已结束</span>
       </a>
        <a href="#">
           <img src="../image/05.png" alt="">
           <span>已拍下</span>
       </a>
   </div>
  </div>
</template>
<script>
  export default {
  
};
</script>
<style lang="less" scoped>
  .auction {
    margin-top:12px;
      width:100%;
      height:132px;
      .auc {
          width:375px;
         font-size: 14px;
         padding-left: 12px;
         color: rgb(0, 0, 0);
         height: 36px;
         line-height: 36px;
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
      }
      .auc1 {
          width:375px;
          height:96px;
          border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    place-content: flex-start space-around;
    flex-shrink: 0;
    -webkit-box-pack: justify;
      }
       a {
          text-decoration: none;
    position: relative;
    display: flex;
    width: 60px;
    height:96px;
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
      }
        img {
           display: flex;
           width: 40px;
        height: 40px;
         margin-top: 22px;
         object-fit: cover;
       }
        span {
            width:36px;
            height:16px;
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
    margin: 4px 0px 14px;
    color: rgb(51, 51, 51);
        }
  }
</style>