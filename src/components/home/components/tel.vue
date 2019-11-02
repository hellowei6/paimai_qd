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
  height: 16px;
  display: flex;
  flex-direction: row;
  padding-left: 18px;
  margin-bottom: 9px;
  z-index:10;
  padding-top:50px;
  overflow: hidden;

  .telleft {
    display: flex;
    height: 12px;
    padding-right: 9px;
    align-items: center;
    img {
      display: flex;
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    span {
      color: white;
      font-size: 12px;
    }
  }
  .telright {

    height: 12px;
    align-items: center;

    img {
      width: 12px;
      height: 12px;
      float: left;
    }
    a{
      text-decoration: none;
      span {
      line-height: 12px;
      font-size: 12px;
      color: white;
      margin-left: 7px;
      float: left;
    }
    }
    
  }
}
</style>