<template>
  <div class="whole">
    <ul class="allwhole">
      <router-link tag="li" to="/focus/one" ref="myli" class="qb">
        <span class="sp">全部</span>
        <span class="an">你关心的</span>
        <!-- <div class="xian"></div> -->
      </router-link>

      <router-link tag="li" to="/focus/two" class="qb">
        <span class="sp">关注上新</span>
        <span class="an">你关心的</span>
        <!-- <div class="xian"></div> -->
      </router-link>

      <router-link tag="li" to="/focus/three" class="qb">
        <span class="sp">拍品提醒</span>
        <span class="an">你关心的</span>
        <!-- <div class="xian"></div> -->
      </router-link>

      <router-link tag="li" to="/focus/four" class="qb">
        <span class="sp">拍品提醒</span>
        <span class="an">你关心的</span>
      </router-link>
    </ul>
    <div class="content">
      <!-- <One></One> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import One from "./one"
export default {
  components: {
    // One
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.whole {
  z-index: 99;
  width: 100%;
  height: 8%;
  padding-top: 15%;
  // position: fixed;
  line-height: 50px;
  background: #fff;
  
  
  ul {
    position: fixed;
    display: flex;
    width: 100%;
    // height: 20%;
    // background-color: transparent;
    background: #fff;
    z-index: 99;
    
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 50px;
      .sp {
        display: block;
        font-size: 32px;
        // color: rgb(51, 51, 51);
        // line-height: 32px;
      }
    }
  }
  .router-link-active {
    background: rgb(194, 31, 58);
    color: #fff;
  }
}
</style>