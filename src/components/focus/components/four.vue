<template>
  <div class="three">
    <div class="tiem">
      <img src="https://gw.alicdn.com/tfs/TB1l3miaEGF3KVjSZFoXXbmpFXa-306-336.png" alt />
      <p>你还没有设置过提醒</p>
      <span>对感兴趣的拍品设置提醒，开拍前、结束前、出价被超越时会收到消息，不再错过心仪的拍品</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.three {
  padding-top: 200px;
  .tiem {
    width: 100%;

    img {
      width: 19%;

      margin: 0 auto;
      display: flex;
      height: 160px;
    //   object-fit: cover;
    }
    p {
      text-align: center;
      font-size: 30px;
      color: rgb(51, 51, 51);
      padding-top: 20px;
    }
    span {
      box-sizing: border-box;
      display: block;
      flex-direction: column;
      color: rgb(119, 119, 119);
      text-align: center;
      width: 80%;
      margin: 0 auto;
      padding-top: 20px;
      line-height: 36px;
      margin-bottom: 80px;
    }
  }
}
</style>