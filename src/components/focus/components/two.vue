<template>
  <div class="one">
    <div class="tabCon">
      <div class="allxia">
        <!-- v-for="(itemcon,index) in 5" :key="index" -->
        <div class="zhongbu" v-for="(item,index) in wholeList" :key="index">
          <div class="margin">
            <div class="wholeList">
              <img class="imgge" :src="item.image" alt />
              <span>{{item.span}}</span>
              <a href>{{item.a}}</a>
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
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getALLfocus } from "@/api";
export default {
  components: {
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
    // window.console.log(this.wholeList);
    // window.console.log(this.item.first);
    // this.wholeContent = this.wholeList[0].first;
    // window.console.log(this.wholeList[0].first[0].img);
    // window.console.log(this.wholeContent);
  }
};
</script>
<style lang="less" scoped>
.one {
  // height: 200px;
  padding: 90px 0 0 0;

  .tabCon {
    // height: 400px;
    // height: 50%;

    // background: rgb(255, 255, 255);
    // width: 96%;
    // background: yellowgreen;
    // border-radius: 15px;
    // margin: 2%;
    padding-top: 20px;
    .allxia {
      // z-index: 2;
      .zhongbu {
        .margin {
          //  background: rgb(255, 255, 255)
          width: 96%;
          // background: rgb(194, 197, 188);
          border-radius: 15px;
          margin: 2%;
          .wholeList {
            position: relative;
            //  height: 60px;
            width: 100%;
            margin-bottom: 10px;
            // margin-top: 50px;
            // z-index: 1;
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
              // img {
              //   width: 3%;
              //   height: 45%;
              //   position: absolute;
              //   top: 17px;
              //   left: 93%;
              // }
            }
            .img {
              width: 18px;
              height: 25px;
              // float: right;
              position: absolute;
              right: 30px;
              // top: 50px;
              bottom: 13px;
            }
          }
          .xiabu {
            width: 30%;
            height: 20%;
            float: left;
            padding: 12px;
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
    //    .xiabu {
    //         width: 30%;
    //         height: 20%;
    //         float: left;
    //         padding: 12px;
    //         img {
    //           width: 100%;
    //           height: 100%;
    //           border-radius: 15px;
    //         }
    //       }
    // }
  }
}
</style>