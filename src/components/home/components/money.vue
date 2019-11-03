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
  width: 192px;
  height: 76px;
  position: relative;
  border-radius: 50px 0 0 50px;
  background-image: linear-gradient(
    to right,
    rgb(182, 7, 46),
    rgb(249, 31, 77)
  );
a{
    text-decoration: none;
 img {
    width: 80px;
    height: 100px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 2;
  }

  span {
    font-size: 28px;
    font-weight: 500;
    color: rgb(255, 218, 182);
    width: 112px;
    padding-left: 12px;
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