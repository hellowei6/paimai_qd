<template>
  <!-- 拍卖-->
  <div class="searchall">
    <!-- 搜索框 -->
    <div class="searchtop">
      <a href="#">
      <search></search>
      </a>
      <money class="searchright"></money>
    </div>

    <!-- 商品滚动 -->
    <div class="product">
      <ul ref="myul">
        <li ref="myli" v-for="(item,index) in msProduct" :key="index">
          <a :href="item.src">
            <img :src="item.img1" alt />
            <span>{{item.content}}</span>
            <div class="little">
              <img :src="item.img2" alt />
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- <div class="product">
      <ul>
        
          <li v-for="(item,index) in 12" :key="index">
            <img
              src="https://gw.alicdn.com/tfs/TB1kp4GXwoQMeJjy0FoXXcShVXa-150-150.png_110x10000.jpg_.webp"
              alt
            />
            <span>法院卖货</span>
            <div class="little">
              <img
                src="https://gw.alicdn.com/tfs/TB1z7IbgSf2gK0jSZFPXXXsopXa-108-51.png_110x10000.jpg_.webp"
                alt
              />
            </div>
          </li>
        </a>
      </ul>
    </div>-->
    <!-- 进度条 -->
    <!-- <div class="big">
        <div class="small"></div>
    </div>-->

    <!-- 1元起拍 -->
    <div class="one">
      <img
        src="https://gw.alicdn.com/tfs/TB1B52JfQT2gK0jSZPcXXcKkpXa-1029-210.jpg_790x10000Q75.jpg_.webp"
        alt
      />
    </div>

    <!-- 低价商品 -->
    <div class="low">
      <div class="lowleft">
        <div class="box1">
          <a href="#">
            <span>95分大牌</span>
            <div class="box2">
              <p style="color:rgb(215, 35, 68);">1元闪拍</p>
              <img
                src="//gw.alicdn.com/bao/uploaded/i1/TB1GURikYY1gK0jSZTETnxDQVXa_140x10000Q75.jpg_.webp"
                alt
              />
            </div>
          </a>
        </div>
        <div class="box1">
          <a href="#">
            <span>开心捡漏</span>
            <div class="box2">
              <p style="color:rgb(242, 25, 112);">低价夺宝</p>
              <img
                src="https://gw.alicdn.com/bao/uploaded/i3/3254259887/O1CN0147FFuk2MuIQWlDgyc_!!3254259887.jpg_140x10000Q75.jpg_.webp"
                alt
              />
            </div>
          </a>
        </div>
      </div>
      <div class="lowright">
        <div class="box1">
          <a href="#">
            <span>天猫热拍</span>
            <div class="box2">
              <p class="style:rgb(255, 155, 21)">独一无二</p>
              <img
                src="https://gw.alicdn.com/bao/uploaded/i4/2433119387/O1CN01ZhfZ5K2JDIQ83RYJc_!!2-item_pic.png_140x10000.jpg_.webp"
                alt
              />
            </div>
          </a>
        </div>

        <div class="box1">
          <a href="#">
            <span>特价房产</span>
            <div class="box2" style="background-color:rgba(7, 163, 254, 0.04);">
              <p style="color:rgb(7, 163, 254);">捡个百万漏</p>
              <img
                src="https://gw.alicdn.com/tfs/TB1CMoWbNz1gK0jSZSgXXavwpXa-800-800.png_140x10000.jpg_.webp"
                alt
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import search from "./search.vue";
import money from "./money.vue";
import { getMsProduct } from "@/api";
export default {
  components: {
    search,
    money
  },
  async mounted() {
    this.msProduct = await getMsProduct();
    this.$nextTick(() => {
      var liWidth = this.$refs.myli[0].offsetWidth;
      this.$refs.myul.style.width =
        (liWidth + 4) * (this.msProduct.length / 2) + 1 + "px";
    });
  },

  data() {
    return {
      msProduct: ""
    };
  },
  async created() {
    this.msProduct = await getMsProduct();
    window.console.log(this.msProduct[0]);
  }
};
</script>


<style lang="less" scoped>
::-webkit-scrollbar{
    height:0;
    width:0;
}
.searchall {
  width: 96%;
  // height: 380px;
  box-sizing: border-box;
  background: white;
  border-radius: 12px;
  margin: auto;
  margin-top:20px;

  .searchtop {
    width: 96%;
    margin:auto;
    height: 72px;
    padding:20px 0;
    position: relative;
    .searchright {
      position: absolute;
      top: 10px;
      right: -5%;
    }
  }
  // 商品滚动
  .product {
    width: 100%;
    height: 400px;
    background: white;
    overflow-x: auto;
    overflow-y: hidden;
    border-top: 2px solid rgb(233, 234, 236);

    ul {
      // width: 470px;
      height: 100%;
      padding-inline-start: 0px;
      

      li {
        list-style: none;
        width: 148px;
        height: 140px;
        padding: 14px 0;
        margin: 0 6px 0 0;
        position: relative;
        float: left;

        a {
          text-decoration: none;
          padding-inline-start: 0px;
          width: 100%;
          height: 100%;
          img {
            width: 112px;
            height: 112px;
            margin-left: 18px;
            display: inline-block;
            margin-right: 20px;
          }

          span {
            width: 100%;
            height: 28px;
            text-align: center;
            font-size: 28px;
            color: rgb(51, 51, 51);
            line-height: 28px;
            display: block;
            margin-block-end: 0;
          }
          .little {
            width: 72px;
            height: 40px;
            position: absolute;
            right: 0;
            top: 6px;
            img {
              width: 72px;
              height: 40px;
              margin: auto;
            }
          }
        }
      }
    }
  }
  // 滚动条
  // .big {
  //   border: 0px solid black;
  //   position: absolute;
  //   box-sizing: border-box;
  //   display: flex;
  //   -webkit-box-orient: vertical;
  //   flex-direction: column;
  //   align-content: flex-start;
  //   flex-shrink: 0;
  //   left: 163px;
  //   bottom: 9px;
  //   width: 32px;
  //   height: 3px;
  //   background-color: rgb(243, 243, 243);
  //   border-radius: 1.5px;

  //   .small {
  //     border: 0px solid black;
  //     position: relative;
  //     box-sizing: border-box;
  //     display: flex;
  //     -webkit-box-orient: vertical;
  //     flex-direction: column;
  //     align-content: flex-start;
  //     flex-shrink: 0;
  //     width: 20px;
  //     height: 3px;
  //     background-image: linear-gradient(rgb(236, 83, 129), rgb(213, 41, 74));
  //     border-radius: 1.5px;
  //     margin-left: 0px;
  //   }
  // }

  // 1元拍
  .one {
    width: 100%;
    height: 20%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 2px solid rgb(233, 234, 236);
    img {
      width: 100%;
      height: 100%;
    }
  }

  // 打折商品
  .low {
    width: 96%;
    margin: auto;
    height: 270px;
    text-decoration: none;
    padding-top: 20px ;
    border-top: 2px dashed rgb(233, 234, 236);
    .lowleft,
    .lowright {
      width: 49.5%;
      height: 244px;
      float: left;
      background: white;
      
      .box1 {
        width: 49%;
        height: 100%;
        background: white;
        float: left;
        margin-left: 0.8%;
        a {
          text-decoration: none;

          span {
            font-size: 28px;
            font-weight: bold;
            color: rgb(61, 66, 69);
            line-height: 30px;
            height: 30px;
          }
          .box2 {
            border-radius: 126px;
            width: 90%;
            height: 90%;
            padding-top:5%;
            background-color: rgba(215, 35, 68, 0.04);

            p {
              line-height: 28px;
              font-weight: 500;
              font-size: 26px;
              height: 28px;
              padding-bottom:9%;
            }
            img {
              width: 90%;
              height: 70%;
              margin-left: 4%;
            }
          }
        }
      }
    }
  }
  .lowleft {
    border-right: 1px dashed rgb(233, 234, 236);
  }
  .lowright:nth-child(1){
        padding-left:3%;
      }
}
</style>