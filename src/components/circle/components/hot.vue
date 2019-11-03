<template>
    <div class="hot">
        <div class="hots">
        <span class="title-left">热门圈子推荐</span>
        <span class="title-right">查看全部圈子</span>
        </div>
      <div class="roll">
         <ul ref="myul">
             <li ref="myli" v-for="(item,index) in productList" :key="index">
               <img :src="item.img" alt />
               <span class="title">{{item.title}}</span>
               <span class="describe">{{item.describe}}</span>
               <span class="add">{{item.add}}</span>
             </li>
         </ul>
      </div>
    </div>
</template>
<script>
import {getRotation} from "@/api"
export default {
    data() {
        return{
            productList:[]
        }
    },
    async mounted() {
        this.productList=await getRotation()
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
  .hot{
      height:430px;
      width:750px;
       background-color:#E1E1E1;
       .hots{
    width:710px;
    height:82px;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    background-color:#E1E1E1;
     height:82px;
       .title-left{
  
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex: 1 1 0%;
    font-size: 30px;
    line-height: 30px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    padding: 28px 0px 24px 18px;
    background-color:#E1E1E1;
    -webkit-box-flex: 1;
       }
      .title-right{
     white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 26px;
    line-height: 30px;
    color: rgb(51, 51, 51);
    padding: 28px 18px 24px
      }
 }
     .roll{
    overflow-x: auto;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex: 1 1 0%;
    -webkit-box-flex: 1;
    padding-bottom: 20px;
    padding-right:20px;
    margin-right: 20px;
    margin-left: -60px;
    background-color:#E1E1E1;
    overflow: scroll;
         ul{
           border: 0px solid black;
           position: relative;
           box-sizing: border-box;
           display: flex;
            -webkit-box-orient: horizontal;
           flex-direction: row;
           align-content: flex-start;
           flex-shrink: 0;
             li{
              border: 0px solid black;
              position: relative;
              box-sizing: border-box;
              display: flex;
              -webkit-box-orient: vertical;
              flex-direction: column;
              align-content: flex-start;
              flex-shrink: 0;
               width: 210px;
               height: 308px;
                -webkit-box-align: center;
               align-items: center;
                background-color: rgb(255, 255, 255);
                border-radius: 8px;
                margin-right: 18px;
                padding: 24px 0px;
              img{
                  display: flex;
                  width: 88px;
                  height:88px;
                  border-radius: 24px;
              }
              .title{
             white-space: pre-wrap;
            border: 0px solid black;
            position: relative;
            box-sizing: border-box;
            display: block;
            -webkit-box-orient: vertical;
            flex-direction: column;
            align-content: flex-start;
            flex-shrink: 0;
            font-size: 26px;
            margin-top: 16px;
            line-height: 26px;
            color: rgb(51, 51, 51);
            font-weight: bold;
              }
              .describe{
     white-space: nowrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 28px;
    width: 264px;
    line-height: 24px;
    color: rgb(153, 153, 153);
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
              }
              .add{
     border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    place-content: flex-start center;
    flex-shrink: 0;
    cursor: pointer;
    -webkit-box-pack: center;
    background-color: rgb(235, 0, 69);
    height: 60px;
    width: 160px;
    border-radius: 30px;

    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    font-size: 24px;
    text-align: center;
    color: rgb(255, 255, 255);
    padding-top: 10px;
              }
             }
         }
     }
  }
     
</style>