<template>
    <div class="catelist">
        <a href="#" class="zuo">
            <span class="zuo1">0</span>
            <span class="zuo2">我的提醒</span>
        </a>
        <a href="#" class="you">
            <span class="you1">0</span>
            <span class="you2">我的关注</span>
        </a>
        <div class="wei"></div>
    </div>
</template>
<script>
 export default {
  
};
</script>
<style lang="less" scoped>
   .catelist {
    width: 750px;
    height: 106px;
    margin-top:180px;
    background-color: rgb(255, 255, 255);
     padding-top:20px;
   
  .zuo {
      text-decoration: none;
    height: 120px;
    width: 374px;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    float:left;
  }
  .you {
        text-decoration: none;
    height: 106px;
    width: 374px;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    float:left;
  }
  .zuo1 {
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
    color: rgb(0, 0, 0);
  }
  .zuo2 {
      white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 12px;
    margin-top: 6px;
    color: rgb(102, 102, 102);
  }
  .you1 {
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
    color: rgb(0, 0, 0);

  }
  .you2 {
white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 12px;
    margin-top: 6px;
    color: rgb(102, 102, 102);
  }
  .wei {
    background:#F2F2F2;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    height: 12px;
    width:750px;
  }
   }
</style>