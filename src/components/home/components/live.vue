<template>
  <div class="live">
    <div class="top">
      <div class="toptitle">
        <span class="toptitle1">拍卖专场</span>
        <span class="toptitle2">挑好货，刷弹幕，参拍出价乐趣多!</span>
      </div>
      <a href="#">
        <more class="topmore"></more>
      </a>
    </div>
    <div class="roll">
      <ul ref="myul">
        <li ref="myli" v-for="(item,index) in liveList" :key="index">
          <a :href="item.src">
            <img :src="item.img1" alt />
            <div class="imgbottom">
              <div class="imgtop">
                <img :src="item.img2" alt />
              </div>
              <div class="title1">
                <span>{{item.span1}}</span>
              </div>
              <div class="title2">
                <span>{{item.span2}}</span>
              </div>
              <div class="title3">
                <img :src="item.img3" alt />
                <span>{{item.span3}}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  
</template>


<script>
import more from "./more.vue";
import { getLiveList } from "@/api";
export default {
  data() {
    return {
      liveList: ""
    };
  },
  components: {
    more
  },
  async created() {
    this.liveList = await getLiveList();
    window.console.log(this.liveList[0]);
  },
  async mounted() {
    this.liveList = await getLiveList();
    this.$nextTick(() => {
      var liWidth = this.$refs.myli[0].offsetWidth;
      this.$refs.myul.style.width =
        (liWidth + 10) * this.liveList.length + 10 + "px";
    });
  }
};
</script>


<style lang="less" scoped>
::-webkit-scrollbar{
    height:0;
    width:0;
}
.live {
  width: 96%;
  margin: auto;
  margin-top:20px;
  .top {
    width: 100%;
    height: 74px;
    position: relative;
    .toptitle {
      height: 100%;
      line-height: 100%;
      float: left;
      .toptitle1 {
        font-size: 32px;
        color: rgb(47, 46, 47);
        line-height: 100%;
        font-weight: bold;
      }
      .toptitle2 {
        font-size: 28px;
        color: rgb(136, 136, 136);
        line-height: 100%;
        margin-left: 12px;
      }
    }

    .topmore {
      position: absolute;
      top: 0;
      right: 2%;
    }
  }

  .roll {
    height: 300px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    ul {
        height: 100%;

      li {
        width: 300px;
        height: 300px;
        border-radius: 18px;
        position: relative;
        overflow: hidden;
        margin-right: 20px;
        float: left;
        z-index: 3;
        img {
          width: 100%;
          height: 100%;
        }

        .imgbottom {
          width: 300px;
          height: 300px;
          position: absolute;
          z-index: 6;
          top: 0;
          left: 0;
          background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
         

          .imgtop {
            height: 28px;
            width: 130px;
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 10;
            img {
              width: 80%;
              height: 100%;
            }
          }
          .title1 {
            width: 264px;
            height: 30px;
            position: absolute;
            bottom: 20px;
            left: 18px;
            z-index: 10;
            span {
              font-size: 28px;
              line-height: 30px;
              color: rgb(255, 255, 255);
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .title2 {
            width: 264px;
            height: 30px;
            position: absolute;
            bottom: 60px;
            left: 18px;
            overflow: hidden;
            z-index: 10;
            span {
              font-size: 28px;
              line-height: 30px;
              color: rgb(255, 255, 255);
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .title3 {
            height: 32px;
            border-radius: 16px;
            position: absolute;
            bottom: 20px;
            left: 18px;
            z-index: 10;
            background: rgba(244, 244, 244, 0.5);
            img {
              width: 30px;
              height: 24px;
              float: left;
              line-height: 32px;
              padding:4px 6px;
            }
            span {
              font-size: 24px;
              color: rgb(255, 255, 255);
              line-height: 24px;
              overflow: hidden;
              text-overflow: ellipsis;
              float: left;
              line-height: 32px;
              white-space: nowrap;
              padding-right:10px;
            }
          }
        }
      }
    }
  }
}
</style>