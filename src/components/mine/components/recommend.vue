<template>
 <div class="recommend">
    <img src="../image/06.png" alt="">
    <span>为你推荐</span>
    <img src="../image/06.png" alt="">
 </div>
</template>
<script>
export default {
    
};
</script>
<style lang="less" scoped>
   .recommend {
       background:#f2f2f2;
       border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    place-content: flex-start center;
    flex-shrink: 0;
    height: 88px;
    width:100%;
    margin-top:20px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    img {
        display: flex;
    width: 24px;
    height: 18px;
    margin-left: 6px;
    margin-right: 6px;
    }
    span {
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
    color: rgb(195, 31, 58);
    }
   }
</style>