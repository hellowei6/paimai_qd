<template>
<!-- 电话，假一赔三 -->
  <div class="tel">
    <div class="telleft">
      <img src="../images/tel1.png" alt />
      <span>400-822-2870</span>
    </div>
    <div class="telright">
      <a href>
        <img src="../images/tel2.png" alt />
        <span>假一赔三</span>
      </a>
    </div>
  </div>
</template>
    
<script>
export default {};
</script>

<style lang="less" scoped>
.tel {
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;

  margin-bottom: 18px;
  z-index:10;
  margin-top:88px;
  overflow: hidden;
  background:rgb(183, 9, 19);

  .telleft {
    display: flex;
    height: 24px;
    margin: 0 18px;
    align-items: center;
    img {
      display: flex;
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    span {
      color: white;
      font-size: 24px;
    }
  }
  .telright {

    height: 24px;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      float: left;
    }
    a{
      text-decoration: none;
      span {
      line-height: 24px;
      font-size: 24px;
      color: white;
      margin-left: 14px;
      float: left;
    }
    }
    
  }
}
</style>