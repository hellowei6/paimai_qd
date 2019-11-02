<template>
    <div class="cates">
        <ul >
          <li  @click="selectOne(index)" :class="{active: currentIndex===index}" v-for="(item,index) in cateList" :key="index">
            {{item.title}}</li>
        </ul>
      </div>
</template>
<script>

import BScroll from "@better-scroll/core";
import {getCateList} from "@/api"

export default {
    data(){
        return{
            cateList:[],
            currentIndex:0
        }
    },
    created(){

    },
    methods:{
      selectOne(index){
        this.currentIndex = index;
        // 让右边进行跟随
        this.$store.state.eventBus.$emit('myscroll', index);
      }
    },
   
    async mounted(){
      this.cateList=await getCateList()
      this.$nextTick(()=>{
        this.bs1=new BScroll(".cates",{
          click:true
        })
      })
  }
}
</script>
<style lang="less" scoped>

* {
  padding: 0;
  margin: 0;
  list-style: none;
}

.cates {
  position: fixed;
   z-index: 98;
  height: calc(100%-98px);
  overflow: hidden;
 
      ul {
        padding: 80px 0px 0 0;
        li {
          width: 140px;
          height: 116px;
          background: #f0f0f0;
          line-height: 116px;
          text-align: center;
          font-size: 26px;
          padding: 0 8px;
          border-width: 0px 1px 1px 0px;
          border-style: solid;
          border-color: black rgb(217, 217, 217) rgb(217, 217, 217) black;
        }
        .active{
            color: rgb(194, 31, 58);
            background: white;
            z-index: 99;
            border-width: 0px 0.5px 0.5px 4px;
            border-style: solid;
            border-color: black rgb(255, 255, 255) rgb(217, 217, 217) rgb(194, 31, 58);
            font-weight: bold;
        }
      }
    }

</style>