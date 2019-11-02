<template>
<!-- 搜索框 -->
  <div>
    <router-link to="/searchall">
      <img src="../images/top3.png" />
      <span>手表一元起拍</span>
</router-link>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
div {
  width: 54%;
  height: 64px;
  border: 0px solid black;
  box-sizing: border-box;
  border-radius: 77px;
  top: 12px;
  right: 18px;
  background-color: rgb(239, 239, 239);
  align-items: center;
  padding: 12px 0 ;
  img {
    
    width: 28px;
    height: 32px;
    margin-left: 16px;
    margin-right: 6px;
    float: left;
  }
  span {
    width: 80%;
    display: block;
    height: 32px;
    font-size: 26px;
    color: rgb(153, 153, 153);
    float: left;
  }
}
</style>