<template>
  <!-- 发现惊喜 -->
  <div class="superiseall">
    <div class="findleft">
      <span class="title1">发现惊喜</span>
      <span class="title2">热门的优选推荐</span>
    </div>
    <div>
      <a href="#" style="text-decoration:none">
        <more class="much"></more>
      </a>
    </div>
    <ul>
      <li v-for="(item,index) in superise" :key="index">
        <a :href="item.src">
        <div class="left">
          <span class="span3">{{item.title1}}</span>
          <span class="span4">{{item.title2}}</span>
        </div>
        <div class="right">
          <img :src="item.img" alt />
        </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import more from "./more.vue";
import { getSuperise } from "@/api";
export default {
  components: {
    more
  },
  data() {
    return {
      superise: ""
    };
  },
  async created() {
    this.superise = await getSuperise();
    window.console.log(this.superise[0]);
  }
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.superiseall {
  width: 96%;
  margin:auto;
  height: 230px;
  margin-top: 15px;
  position: relative;
  .findleft {
    height: 15%;
    .title1 {
      color: rgb(47, 46, 47);
      line-height: 18px;
      font-weight: bold;
      margin-right: 3%;
      font-size: 18px;
    }
    .title2 {
      font-size: 16px;
      color: rgb(136, 136, 136);
      line-height: 16px;
    }
  }

  .much {
    position: absolute;
    top: 0;
    right: 0;
  }

  ul {
    width: 100%;
    height: 88%;
    position: absolute;
    top: 10%;
    left: 0;

    li {
      width: 48%;
      height: 43%;
      margin: 1%;
      float: left;
      border-radius: 8%;
      position: relative;
      background: white;
      .left {
        display: flex;
        flex-direction: column;
        height: 50%;
        margin-top: 15%;
        margin-left: 5%;
        .span3 {
          font-size: 14px;
          font-weight: bold;
          color: rgb(51, 51, 51);
          line-height: 16px;
        }
        .span4 {
          font-size: 11px;
          color: rgb(153, 153, 153);
          line-height: 14px;
        }
      }
      .right {
        width: 35%;
        height: 80%;
        border-radius: 10%;
        overflow: hidden;
        position: absolute;
        right: 5%;
        top: 10%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>