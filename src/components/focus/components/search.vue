<template>
  <div class="search">
    <div class="daohang">
      <router-link tag="li" to="/circle"  class="jt">
        <img src="../image/daohangjiantou.png" alt />
      </router-link>
      <div class="zj">
        <img src="//gw.alicdn.com/tfs/TB10cWPX8Cw3KVjSZR0XXbcUpXa-348-88.png" alt />
      </div>
      <div class="title">
        <span>设置</span>
      </div>
      <router-link tag="li" to="/home"  class="dian">
        <!-- <router-link tag="div" to="/daohang"> -->
          <img src="../image/三点.png" alt />
        </router-link>

        <!-- <img src="https://gw.alicdn.com/tfs/TB1AzirL3HqK1RjSZFPXXcwapXa-72-72.png" alt=""> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style lang="less" scoped>
.search {
  padding-top: 20px;
  width: 100%;
  // height: 20%;
  height: 95px;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  z-index: 10;
  // left:0;

  .daohang {
    width: 100%;
    .jt {
      width: 35%;
      height: 50%;
      float: left;
      img {
        width: 18%;
        height: 15%;
        padding-left: 20px;
      }
    }
    .zj {
      width: 30%;
      height: 100%;
      float: left;
      text-align: center;
      img {
        width: 80%;
        height: 100%;
      }
    }
    .title {
      width: 23%;
      height: 10%;
      float: left;
      text-align: right;
      padding-top: 7px;
    }
    .dian {
      width: 10%;
      float: right;
      // height: 7%;
      img {
        width: 65%;
        height: 65%;
      }
    }
  }
}
</style>