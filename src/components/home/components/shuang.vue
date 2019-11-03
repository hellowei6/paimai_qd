<template>
  <!-- 双11 -->
  <div class="double">
    <ul class="doubleone">
      <li v-for="(item,index) in shuang" :key="index">
        <a :href="item.src">
        <div class="shuangtop">
          <img :src="item.img1" alt />
        </div>
        <div class="shuangbottom">
          <img :src="item.img2" alt />
          <span class="title1">{{item.title1}}</span>
          <span class="title2">{{item.title2}}</span>
        </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {getShuang} from  "@/api"

export default {
  data() {
    return {
      shuang:'',
    };
  },
  async created(){
    this.shuang = await getShuang();
    window.console.log(this.shuang[0]);
  }

};
</script>


<style lang="less" scoped>
.doubleone {
  width: 96%;
  margin:auto;
  height: 246px;
  border-radius: 12px;
  display: flex;
  flex: 1;
  
:nth-child(4){
    margin-right:0;
  }
  li {
    // width: 22%;
    height: 240px;
    list-style: none;
    float: left;
    position: relative;
    cursor: pointer;
    display: flex;
    flex: 1;
    margin-right: 2%;

    a {
      width: 100%;
      height: 240px;
      border-radius: 12px;
      .shuangtop {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 70%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          border-radius: 12px 12px 0 0;
        }
      }
      .shuangbottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 82px;
        z-index: 2;
        img {
          width: 100%;
          height: 82px;
          z-index: 2;
          position: relative;
        }
        .title1 {
          width: 100%;
          height: 30px;
          font-size: 26px;
          color: rgb(255, 255, 255);
          line-height: 30px;
          position: absolute;
          text-align: center;
          top: 10px;
          left: 0;
          z-index: 3;
        }
        .title2 {
          width: 100%;
          font-size: 24px;
          color: rgb(255, 255, 255);
          line-height: 28px;
          margin-top: 4px;
          position: absolute;
          text-align: center;
          bottom: 10px;
          left: 0;
          z-index: 3;
        }
      }
    }
  }
  
}

</style>