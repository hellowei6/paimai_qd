<template>
  <div class="all">
    <div class="top">
      <router-link to="/home">
        <div class="left">
          <img src="../images/top.png" alt />
        </div>
      </router-link>
      <input type="text" />
      <div class="txt">
        <span>确认</span>
      </div>
    </div>
    <!-- <div class="bottom">
      <ul>
        <li>坚果</li>
        <li>水果</li>
        <li>零食</li>
        <li>酸奶</li>
        <li>牛奶</li>
        <li>护肤品</li>
        <li>化妆品</li>
        <li>男装</li>
        <li>女装</li>
        <li>童装</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.all{
.top {
  width: 100%;
  height: 120px;
  background: rgb(245, 245, 246);
  display: flex;
  flex: 1;
  .left {
    width: 100px;
    height: 100px;
    margin: 10px 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  input {
    width: 60%;
    height: 80px;
    border-radius: 80px;
    margin: 20px auto;
    background: white;
    margin-right:40px;
  }
  .txt{
         width:200px;
         height:120px;
         line-height:120px;

span {
    font-size: 44px;
    color:rgb(241, 114, 41);
  }
  }
  
}
.bottom{
       width:100%;
       ul{
              li{
                     width:200px;
                     height:80px;
                     line-height:80px;
                     border-radius: 40px;
                     font-size:30px;
                     text-align: center;
                     border:2px solid black;
                     margin:40px 20px;
              }
       }
}
}

</style>