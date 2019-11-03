<template>
  <div class="commodity">
      <ul>
        <li v-for="(item,index) in cateList" :key="index">
         <img :src="item.img" alt="">
          <span :src="item.title">{{item.title}}</span>
          <i :src="item.pirse">{{item.pirse}}</i>
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
  created() {
   getBanner().then(data => {
      this.cateList = data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.commodity {
  width: 100%;
  height:2740px;
  background:#f2f2f2;

  ul {
     width: 100%;
  height:2740px;
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
    width: 170px;
    height: 258px;
    background-color: rgb(255, 255, 255);
    margin-top: 3px;
    margin-bottom: 6px;
    margin-right: 9px;
    border-radius: 6px;
    overflow: hidden;
  }
  img {
    width:174px;
    height:170px;
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
    width: 156px;
    height: 37px;
    line-height: 18.5px;
    color: rgb(61, 66, 69);
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 500;
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