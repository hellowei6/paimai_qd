<template>
 <div class="circle">
    <div class="ring">
       <img src="https://gw.alicdn.com/tfs/TB1Nr52PgHqK1RjSZFPXXcwapXa-384-384.png" alt="">
       <span class="p">你没有加入任何圈子呢</span>
       <span class="p">加入圈子后才能为你推送跟新动态</span>
       <span class="p1">发现圈子</span>
    </div>
    <hot></hot>
    <fastion></fastion>
</div>
</template>
<script>
import hot from "./hot.vue"
import fastion from "./fastion.vue"
export default {
    components:{
        hot,
        fastion
    }
}
</script>
<style lang="less" scoped>
.circle{
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 750px;
    margin-top: 140px;
    background-color:#E1E1E1;
.ring{
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 750px;
    margin: 20px 18px;
    background-color:#E1E1E1;
    background: #FFFFFF;
    border-radius: 8px;
    -webkit-box-align: center;
    align-items: center;
    img{
    display: flex;
    width: 192px;
    height: 192px;
    margin: 110px 0px 30px; 
    }
    .p{
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 28px;
    line-height: 40px;
    color: rgb(102, 102, 102);
    }
    .p1{
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 32px;
    width: 250px;
    height: 64px;
    line-height: 64px;
    color: rgb(255, 255, 255);
    background-color: rgb(235, 0, 69);
    border-radius: 32px;
    margin:30px 0px 110px;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    }
  }
}
</style>