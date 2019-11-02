<template>
  <div class="commodity">
      <ul>
        <li v-for="(item,index) in cateList" :key="index">
         <img :src="item.img" alt="">
          <span>{{item.title}} </span>
          <i>当前：￥{{item.pirce}}</i>
        </li>
      </ul>
  </div>
</template>
<script>
import {getBanner} from "@/api";
export default {
  data() {
    return {
      cateList: []
    };
  },
  async created() {
 this.cateList= await getBanner()
 window.console.log(this.cateList[1].price);
  }
};
</script>
<style lang="less" scoped>
.commodity {
  width: 100%;
  height:5480px;
  background:#f2f2f2;

  ul {
     width: 100%;
  height:5480px;
    display: flex;
    flex-wrap: wrap;
    padding:0px;
  }
  li {
     text-decoration: none;
    display: flex;
    float:left;
    -webkit-box-orient: vertical;
    flex-direction: column;
    position: relative;
    width: 45%;
    height: 516px;
    background-color: rgb(255, 255, 255);
    margin-top: 6px;
    margin-bottom: 12px;
    margin-right: 18px;
    border-radius: 12px;
    overflow: hidden;
    margin-left:15px;
  }
  img {
    width:348px;
    height:340px;
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
    font-size: 28px;
    width: 312px;
    height: 74px;
    line-height:37px;
    color: rgb(61, 66, 69);
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 500;
    background:#f8f7f7;
    margin-top:30px;
  }
  i {
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
    color: rgb(194, 31, 58);
  }
}
</style>