<template>
  <div class="all" v-if="hide">
    <div class="navlist">
      <ul ref="myul">
        <li
          ref="myli"
          @click="selectOne(index)"
          :class="{active:currentIndex===index}"
          v-for="(item,index) in navList"
          :key="index"
        >
          <a :href="item.src">
            <span>{{item}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="top">
        <a href="#">
          <img src="https://gw.alicdn.com/tfs/TB1DqjPPVYqK1RjSZLeXXbXppXa-36-24.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getNavList } from "@/api";

export default {
  data() {
    return {
      navList: [],
      currentIndex: 0,
      hide:false,
    };
  },
  async created() {
    this.navList = await getNavList();
    window.console.log(this.navList);
  },
  methods: {
    selectOne(index) {
      this.currentIndex = index;
    }
  }

  //   async mounted(){
  //       this.navList = await getNavList();
  //       this.$nextTick(()=>{
  //           var liWidth =this.$refs.myli[0].offsetWidth;
  //           this.$refs.myul.style.width=liWidth*this.navList.length+50+"px";
  //       })
  //   }
};
</script>



<style lang="less" scoped>
::-webkit-scrollbar{
  height:0;
  width:0
}
.all{
width:100%;
height:88px;
position: relative;
position: fixed;
top:90px;
left: 0;
z-index: 999;

.navlist {
  width: 100%;
  height: 64px;
  padding: 12px 0;
  background: rgb(183, 9, 19);
  overflow-x: auto;
  //   overflow-y: hidden;
  position: absolute;
  top:0;
  left:0;
  z-index: 3;

  ul {
    width: 1440px;
    height: 100%;
    .active {
      span {
        opacity: 1;
        border-bottom: 4px solid #fff;
      }
    }
    li {
      height: 100%;
      padding: 0 8px;
      margin: 4px 12px 0;
      float: left;

      span {
        font-size: 28px;
        color: rgb(255, 255, 255);
        opacity: 0.7;
        font-weight: 600;
        padding-bottom: 4px;
        border-bottom: 4px solid rgb(183, 9, 19);
      }
    }
  }
}

.top {
  width: 76px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgb(183, 9, 19);
  z-index: 8;
  img {
    width: 36px;
    height: 24px;
    margin-top: 24px;
    margin-left: 22px;
  }
}
}
</style>