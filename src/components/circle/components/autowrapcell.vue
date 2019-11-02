<template>
  <div class="roll">
    <ul class="myul">
        <li ref="myli" v-for="(item,index) in productList" :key="index">
        <img :src="item.img" alt />
      </li>
    </ul>       
  </div>
</template>
<script>
import {getMsProduct1} from "@/api";
export default {
    data() {
     return{
     productList:[]
    }
   },
    async mounted() {  
    this.productList= await getMsProduct1()
     this.$nextTick(()=>{
         var liWidth=this.$refs.myli[0].offsetWidth
         this.$refs.myul.style.width=(liWidth*this.productList.length)+"px"
     })   
 }  
}
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
    height: 0;
    width: 0;
}
.roll {
   background:url(https://gw.alicdn.com/tfs/TB1TvF6PxTpK1RjSZFMXXbG_VXa-750-500.png);
   width: 375px;
  position: relative;   
  overflow-x: auto;
  z-index: 1;
  margin-right: -20px;
  margin-top: 70px;
  ul {
      width:1000px;
      margin-left: -30px;
    li {
      width: 240px;
      height: 90px;
      display: inline-block;
      padding: 0 5px;
    }
    }
    li img{
        width:240px;
        height:90px;
    }
  }

</style>