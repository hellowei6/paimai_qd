<template>
  <!-- 精挑细选 -->
  <div class="choose">
    <div class="top">
      <span>精挑细选</span>
      <div class="toptxt">您可能喜欢的拍品</div>
    </div>
    <div>
      <a href="#" style="text-decoration:none">
        <more class="much"></more>
      </a>
    </div>

    <div class="things">
      <div v-for="(item,index) in jing" :key="index" class="things1">
        <a :href="item.src">
        <div class="box">
          <div class="box1">
            <img :src="item.img" alt />
          </div>
        </div>
        <span>{{item.title1}}</span>
        <div class="title">
          <span style="margin-right:5%">当前</span>
          <span>￥</span>
          <span style="font-size:15px;font-weight:500">{{item.title2}}</span>
        </div>
        </a>
      </div>     
    </div>
  </div>
</template>
<script>
import more from "./more.vue";
import { getJing } from "@/api";
export default {
  components: {
    more
  },
  data() {
    return {
      jing: ""
    };
  },
  async created() {
    this.jing = await getJing();
    window.console.log(this.jing[0]);
  }
};
</script>
<style lang="less" scoped>
.choose {
  width: 96%;
  margin:auto;
  height: 552px;
  border-radius: 12px;
  box-sizing: border-box;
  background: white;
  margin-top: 30px;
  position: relative;

  .top {
    width: 53%;
    height: 15%;
    border-top-left-radius: 8%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    background: url(https://gw.alicdn.com/tfs/TB1BIL7zHvpK1RjSZFqXXcXUVXa-546-87.png)
      95% 90%;
    position: relative;
    display: flex;
    flex: 1;
    span {
      align-content: flex-start;
      font-size: 30px;
      color: rgb(112, 74, 18);
      font-weight: bold;
      z-index: 2;
      position: absolute;
      top: 15%;
      left: 3%;
    }
    .toptxt {
      font-size: 26px;
      color: rgb(169, 141, 99);
      line-height: 80%;
      position: absolute;
      top: 35%;
      left: 35%;
      padding-left: 2%;
      border-left: 2px solid rgb(169, 141, 99);
    }
  }

  .much {
    position: absolute;
    top: 2%;
    right: 0;
  }

  .things {
    width: 100%;
    height: 80%;
    background: white;
    display: flex;
    flex: 1;
    .things1 {
      width: 33%;
      height: 90%;
      overflow: hidden;
      margin: 5% 3%;
      background: white;
      .box {
        width: 100%;
        height: 65%;
        border-radius: 6%;
        overflow: hidden;
        position: relative;
        background: rgba(0, 0, 0, 0.05);
        .box1 {
          width: 80%;
          height: 80%;
          border-radius: 6%;
          overflow: hidden;
          position: absolute;
          top: 10%;
          left: 10%;
          position: relative;
          img {
            width: 130%;
            height: 100%;
            position: absolute;
            top: 0;
            left: -20%;
          }
        }
      }

      span {
        width: 100%;
        height: 56px;
        line-height: 56px;
        color: rgb(51, 51, 51);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 32px;
        padding-top: 10%;
      }
      .title {
        width: 100%;
        height: 8%;
        line-height: 8%;
        span {
          font-size: 26px;
          color: rgb(194, 31, 58);
          font-weight: bold;
        }
      }
    }
  }
}
</style>