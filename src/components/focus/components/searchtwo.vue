<template>
  <div class="search">
    <div class="daohang">
      <router-link tag="li" to="/focus/one"  class="jt">
        <img src="../image/daohangjiantou.png" alt />
      </router-link>
      <div class="zj">
        <span>阿里拍卖</span>
      </div>
      <div class="title">
       <img src="https://gw.alicdn.com/tfs/TB1VnFIMXzqK1RjSZFoXXbfcXXa-72-72.png" alt="">
      </div>
      <router-link tag="li" to="/focus/daohang"  class="dian">
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
  background: rgb(224, 221, 221);
  position: fixed;
  z-index: 99;
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
     span{
         font-size: 38px;
     }
    }
    .title {
      width: 23%;
      height: 10%;
      float: left;
      padding-top: 7px;
      img{
          width: 50px;
          float: right;
      }
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