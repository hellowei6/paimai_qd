<template>
<!-- 拍卖币 -->
  <div class="all">
    <a href="#">
      <img src="https://gw.alicdn.com/tfs/TB11XW3JhjaK1RjSZKzXXXVwXXa-120-150.png" alt />
      <span class="title1">去领取</span>
      <span class="title2">拍卖币</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.all {
  width: 96px;
  height: 38px;
  position: relative;
  border-radius: 25px 0 0 25px;
  background-image: linear-gradient(
    to right,
    rgb(182, 7, 46),
    rgb(249, 31, 77)
  );
a{
    text-decoration: none;
 img {
    width: 40px;
    height: 50px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 2;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: rgb(255, 218, 182);
    width: 56px;
    padding-left: 6px;
  }

  .title1{
      position: absolute;
      top:0;
      right:0;
  }
  .title2{
      position: absolute;
      bottom:0;
      right:0;
  }
}
 
}
</style>