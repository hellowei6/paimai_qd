<template>
  <div class="one">
   <All></All>
    <Title></Title>
    <div class="tabCon">
      <div class="allxia">
        <!-- v-for="(itemcon,index) in 5" :key="index" -->
        <div class="zhongbu" v-for="(item,index) in wholeList" :key="index">
          <div class="margin">
            <div class="wholeList">
              <img class="imgge" :src="item.image" alt />
              <span>{{item.span}}</span>
              <a :href="'http://localhost:8080/#/gengduo'">{{item.a}}</a>
              <img class="img" src="../image/jiantou.webp" alt />
            </div>
            <!-- {{item}} -->
            <div v-for="(item,index) in item.first" :key="index" class="xiabu">
              <!-- {{item.img}} -->
              <img :src="item.img" alt />
              <span>{{item.title}}</span>
              <p>当前 ￥{{item.price}}</p>
            </div>
          </div>
        </div>
        <!-- <div></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getALLfocus } from "@/api";
import Title from "../components/title";
import All from "../components/all"
export default {
  components: {
    Title,
    All
  },
  data() {
    return {
      //   num: 0,
      wholeList: [],
      wholeContent: ""
    };
  },
  async created() {
    this.wholeList = await getALLfocus();
  }
};
</script>
<style lang="less" scoped>
.one {
  
  .tabCon {
    // background: rgb(255, 255, 255);
    // width: 96%;
    // background: yellowgreen;
    // border-radius: 15px;
    // margin: 2%;
    // padding-top: 10px;
    .allxia {
      .zhongbu {
        overflow: hidden;
        // background: #666;
        .margin {
          width: 96%;
          background: rgb(255, 255, 255);
          height: 420px;
          border-radius: 15px;
          margin: 2%;
          padding: 1%;
          box-sizing: border-box;
          .wholeList {
            position: relative;
            width: 100%;
            margin-bottom: 10px;
            .imgge {
              width: 50px;
              height: 50px;
              position: absolute;
              bottom: 2px;
              left: 10px;
              // background: transparent;
            }

            span {
              font-size: 30px;
              padding-left: 70px;
            }
            a {
              float: right;
              margin-right: 15px;
              padding-right: 10px;
              display: inline-block;
              text-decoration: none;
              color: rgb(194, 31, 58);
              font-size: 25px;
              border: 1px solid rgb(194, 31, 58);
              border-radius: 50px;
              width: 160px;
              height: 50px;
              line-height: 50px;
              text-align: center;
            }
            .img {
              width: 18px;
              height: 25px;
              position: absolute;
              right: 30px;
              bottom: 13px;
            }
          }
          .xiabu {
            // background: #333;
            width: 30%;
            height: 60%;
            float: left;
            padding: 11px;
            

            img {
              width: 100%;
              height: 100%;
              border-radius: 15px;
            }
            p {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>