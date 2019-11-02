<template>
  <div id="a">
    <div class="menuList">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="{active:num==index}"
          @click="getNum(index)"
        >
          <span class="sp">{{item.title}}</span>
          <br />
          <span class="an">{{item.te}}</span>
          <!-- <p>nihaoi</p> -->
        </li>
      </ul>
    </div>
    <div class="shangbu">
      <strong>关注上新</strong>
      <span>你关注的有新品上拍了</span>
    </div>
    <div class="tabCon">
      <div class="allxia">
        <div class="zhongbu">
          <img
            src="//gw.alicdn.com/tps/TB1AgjZOFXXXXX8apXXXXXXXXXX-225-225.png_110x10000.jpg_.webp"
            alt
          />
          <span>版画</span>
          <a href>
            查看全部
            <img
              src="//gw.alicdn.com/tfs/TB1W3rsbqSs3KVjSZPiXXcsiVXa-11-18.png_110x10000.jpg_.webp"
              alt
            />
          </a>
        </div>
        <div v-for="(item,index) in wholeContent" :key="index" class="xiabu" >
          <!-- v-show="index == num" -->
          <!-- {{itemCon}} -->
          <!-- <div> -->
          <img :src="item.img" alt />
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->

  <!-- </div> -->
</template>
<script>
import { getALLfocus } from "@/api";
// import axios from 'axios'
export default {
  // name: "#a",
  data() {
    return {
      num: 0,
      wholeList: [],
      wholeContent: "",  
    };
  },
  async created() {
    this.wholeList = await getALLfocus();
    window.console.log(this.wholeList);
    // axios.get().then((data)=>{
    //      this.wholeList=data.first
    //      window.console.log(this.wholeList);
    // })
    this.wholeContent = this.wholeList[0].first;
    // window.console.log(this.wholeList[0].first[0].img);
    window.console.log(this.wholeContent);
  },
  methods: {
    async getNum(index) {
      this.num = index;
      // 2.AJAX请求
      // this.wholeList =await getALLfocus();
    }
  }
};
</script>
<style lang="less" scoped>
.active {
  color: #fff;
  background: rgb(194, 31, 58);
  border-radius: 50px;
}

#a {
  width: 100%;
  height: 50%;
  margin: 100px auto;
  // background-color: #fff;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  .menuList {
    width: 100%;
    height: 100px;
    // background-color: #33344a;
    // position: fixed;
    ul {
      width: 100%;
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      // color: #717181;

      line-height: 50px;
      li {
        flex: 1;
        text-align: center;
        cursor: pointer;
        height: 100px;
        border-radius: 50px;
        .sp {
          font-size: 32px;
        }
      }
    }
  }
  // .tabCon {
  //   width: 100%;
  //   // height: 50%;
  //   margin: 0 auto;
  //   // padding: 40px 20px;
  //   padding-top: 20px;
  //   // color: #999;
  //   font-size: 14px;
  //   background-color: #fff;
  //   // height: 1000px;
  // }
  .shangbu {
    strong {
      font-size: 38px;
    }
    span {
      padding-left: 20px;
    }
  }
  .tabCon {
    width: 100%;
    padding-top: 20px;
    margin: 0 auto;
    background: #fff;
    .allxia {
      .zhongbu {
        position: relative;
        height: 60px;
        img {
          width: 50px;
          height: 50px;
          position: absolute;
          bottom: 15px;
        }

        span {
          font-size: 30px;
          padding-left: 60px;
        }
        a {
          float: right;
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
          img {
            width: 2%;
            height: 35%;
            position: absolute;
            top: 15px;
            right: 10px;
          }
        }
      }
      .xiabu {
        width: 30%;
        height: 20%;
        float: left;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>