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
      height:215px;
      width:375px;
       background-color:#E1E1E1;
       .hots{
    width:355px;
    height:41px;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    background-color:#E1E1E1;
     height:41px;
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
    font-size: 15px;
    line-height: 15px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    padding: 14px 0px 12px 9px;
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
    font-size: 13px;
    line-height: 15px;
    color: rgb(51, 51, 51);
    padding: 14px 9px 12px
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
    padding-bottom: 10px;
    padding-right:10px;
    margin-right: 10px;
    margin-left: -30px;
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
               width: 160px;
               height: 153px;
                -webkit-box-align: center;
               align-items: center;
                background-color: rgb(255, 255, 255);
                border-radius: 4px;
                margin-right: 9px;
                padding: 12px 0px;
              img{
                  display: flex;
                  width: 44px;
                  height:44px;
                  border-radius: 22px;
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
            font-size: 13px;
            margin-top: 8px;
            line-height: 13px;
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
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 14px;
    width: 132px;
    line-height: 12px;
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
    height: 30px;
    width: 80px;
    border-radius: 15px;

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
    text-align: center;
    color: rgb(255, 255, 255);
    padding-top: 5px;
              }
             }
         }
     }
  }
     
</style>