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
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    width: 375px;
    margin-top: 70px;
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
    width: 357px;
    margin: 10px 9px;
    background-color:#E1E1E1;
    background: #FFFFFF;
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
    img{
    display: flex;
    width: 96px;
    height: 96px;
    margin: 55px 0px 15px; 
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
    font-size: 14px;
    line-height: 20px;
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
    font-size: 16px;
    width: 125px;
    height: 32px;
    line-height: 32px;
    color: rgb(255, 255, 255);
    background-color: rgb(235, 0, 69);
    border-radius: 16px;
    margin: 15px 0px 55px;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    }
  }
}
</style>