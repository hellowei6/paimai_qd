<template>
  <div class="one">
    <ul>
      <li v-for="(item,index) in twoList" :key="index">
        <a :href="item.src">
          <div class="big">
            <img v-lazy="item.big" alt />
          </div>
          <div class="top">
            <img v-lazy="item.back" />
            <div class="tou"></div>
            <div class="zhuan" v-if="item.span">
              <div class="zhuan1">{{item.span}}</div>
              <span>{{item.span1}}</span>
              <span>{{item.span2}}</span>
              <span>{{item.span3}}</span>
            </div>

            <div class="bottom1">
              <span class="txt1">{{item.txt1}}</span>
              <div class="content">
                <span>{{item.content1}}</span>
                <span>{{item.content2}}</span>
                <div class="tiao" v-if="item.tiao">
                  <a :href="item.src2">
                    <span>{{item.tiao}}</span>
                  </a>
                </div>

                <div class="chu" v-if="item.chu">
                  <span class="chu1">{{item.chu}}</span>
                </div>
              </div>
            </div>

            <div class="bottom2" v-if="item.img">
              <img v-lazy="item.img" alt />
              <div class="ceng">
                <p class="ceng1">{{item.p1}}</p>
                <p class="ceng2">{{item.p2}}</p>
                <div class="can">
                  <a :href="item.src3">
                    <span>{{item.can}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import { getTwoList } from "@/api";
export default {
  data() {
    return {
      twoList: ""
    };
  },
  async created() {
    this.twoList = await getTwoList();
    window.console.log(this.twoList[0]);
  }
};
</script>



<style lang="less" scoped>
.one {
  width: 100%;
  ul {
    :nth-child(2n) {
      margin-right: 0;
    }
    li {
      width: 48%;
      height: 520px;
      float: left;
      border-radius: 20px;
      margin-right: 4%;
      margin-bottom: 40px;
      overflow: hidden;
      position: relative;
      .big {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
      .top {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        img {
          width: 100%;
          height: 65%;
        }
        .tou {
          width: 100%;
          height: 50%;
          position: absolute;
          left: 0;
          bottom: 35%;
          background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgb(255, 255, 255)
          );
        }
        .zhuan {
          width: 94%;
          height: 34px;
          border-radius: 5%;
          background-color: rgb(255, 239, 239);
          position: absolute;
          bottom: 34%;
          left: 3%;
          z-index: 20;
          .zhuan1 {
            height: 34px;
            width: 33%;
            border-radius: 16px;
            background-image: linear-gradient(
              to right,
              rgb(255, 78, 114),
              rgb(228, 23, 48)
            );
            color: #fff;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            line-height: 34px;
            float: left;
          }
          span {
            font-size: 20px;
            margin-left: 10px;
            height:30px;
            line-height: 30px;
            color: rgb(239, 80, 80);
            float: left;
          }
        }
        .bottom1 {
          width: 100%;
          height: 35%;
          background: white;
          padding: 20px 0;
          position: relative;
          .txt1 {
            font-size: 28px;
            width: 312px;
            height: 74px;
            line-height: 37px;
            color: rgb(61, 66, 69);
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: 500;
            white-space: pre-wrap;

            position: relative;
            box-sizing: border-box;
            display: block;

            flex-shrink: 0;
            margin: auto;
          }
          .content {
            position: relative;
            height: 28px;
            line-height: 28px;
            align-items: center;
            margin-top: 20px;
            margin-left: 40px;
            position: relative;
            span {
              display: block;
              -webkit-box-orient: vertical;
              flex-direction: column;
              align-content: flex-start;
              flex-shrink: 0;
              font-size: 22px;
              margin-right: 12px;
              color: rgb(194, 31, 58);
              float: left;
            }
            .tiao {
              position: absolute;

              right: 20px;
              width: 90px;
              height: 30px;
              background-color: rgb(255, 239, 242);
              border-radius: 15px;
              span {
                font-size: 20px;
                color: rgb(239, 80, 102);
              }
            }

            .chu {
              width: 200px;
              height: 118px;
              position: absolute;
              top: 0;

              span {
                font-size: 20px;
                color: rgb(174, 174, 174);
                height: 30px;
                line-height: 30px;
                border-radius: 15px;
                background-color: rgb(243, 243, 243);
                padding-left: 10px;
                padding-right: 10px;
              }
            }
          }
        }

        .bottom2 {
          width: 100%;
          height: 35%;
          padding: 40px 0;
          position: absolute;
          left: 0;
          bottom: -40px;
          z-index: 40;

          img {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .ceng {
              position: absolute;
              top:20px;
              left:0;
              margin-top:20px;
              margin-left:20px;
            .ceng1 {
              font-size: 32px;
              margin-top: 24px;
              line-height: 32px;
              color: rgb(245, 51, 52);
              
            }
            .ceng2 {
              font-size: 24px;
              margin-top: 10px;
              line-height: 22px;
              color: rgb(102, 102, 102);
            }
            .can {
              margin-top: 22px;
              border-radius: 20px;
              width: 120px;
              height: 32px;
              background-image: linear-gradient(
                to right,
                rgb(245, 51, 52),
                rgb(255, 90, 91)
              );
              span {
                width: 120px;
                height: 32px;
                font-size: 24px;
                color: rgb(255, 255, 255);
              }
            }
          }
        }
      }
    }
  }
}
</style>
