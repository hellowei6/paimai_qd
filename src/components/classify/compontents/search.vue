<template>
    <div class="search">
    <!-- 左边箭头 -->
    <img class="zuo" src="../images/zuo.png" alt />
    <!-- 中间搜索 -->
    <div class="sou">
      <img src="../images/sou-suo.png" alt />
      <router-link  tag="li" to="/serch1">
          <input placeholder="拍品或机构名称" type="text"/>
      </router-link>
     
    </div>
    <!-- 右边流拍 -->
    <div class="liu">
      <span>流拍降价</span>
    </div>
    <!-- 右边图片 -->
    <img class="drop" src="../images/drop.png" alt="">
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

.search {
  position: fixed;
  background: white;
  z-index: 99;
    display: flex;
    padding: 0 12px;
    height: 88px;
  .zuo {
    display: flex;
    width: 68px;
    height: 68px;
    padding: 6px;
  }
  .sou {
    display: flex;
    width: 68%;
    height: 64px;
    border-radius: 30px;
    align-items: center;
    margin: 10px 10px;
    background: rgb(239, 239, 239);
    img {
      width: 36px;
      height: 40px;
      margin-left: 16px;
      margin-right: 6px;
    }
    input {
      flex: 1;
      background: transparent;
      border: 1px solid transparent;
    }
  }
  .liu {
       display: flex;
       width: 48px;
       height: 40px;
       float: left;
       margin: 5px 20px 0 10px;
       
    span {
      width: 100%;
      line-height: 20px;
      padding-top: 15px;
      text-align: center;
    }
  }
  .drop{
      display: flex;
      width: 5%;
      height: 50%;
      margin-top: 16px;
      margin-left: 4px;
  }
}
</style>