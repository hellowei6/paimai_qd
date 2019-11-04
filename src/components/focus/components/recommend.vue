<template>
<div class="recommend">
    <img src="../image/06.png" alt="">
    <span>为你推荐</span>
    <img src="../image/06.png" alt="">
 </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
 .recommend {
    box-sizing: border-box;
    display: flex;
    place-content: flex-start center;
    height: 44px;
    width:100%;
    margin-top:10px;
    align-items: center;
    img {
    display: flex;
    width: 36px;
    height: 24px;
    margin-left: 9px;
    margin-right: 9px;
    }
    span {
    box-sizing: border-box;
    display: block;
    font-size: 28px;
    color: rgb(195, 31, 58);
    }
   }
</style>