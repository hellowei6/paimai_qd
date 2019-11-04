<template>
  <div class="whole">
    <ul class="allwhole">
      <router-link tag="li" to="/focus/one" ref="myli" class="qb">
        <span class="sp">全部</span>
        <span class="an">你关心的</span>
      </router-link>
      <div class="xian"></div>
      <router-link tag="li" to="/focus/two" class="qb">
        <span class="sp">关注上新</span>
        <span class="an">你关心的</span>
      </router-link>
  <div class="xian"></div>
      <router-link tag="li" to="/focus/three" class="qb">
        <span class="sp">拍品提醒</span>
        <span class="an">你关心的</span>
      </router-link>
  <div class="xian"></div>
      <router-link tag="li" to="/focus/four" class="qb">
        <span class="sp">专场提醒</span>
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
  z-index: 101;
  width: 100%;
  height: 8%;
  padding-top: 12%;
  // position: fixed;
  line-height: 50px;
  // background: #fff;
  // padding-left: 1%;
  display: flex;
  flex: 1;
  
  ul {
    position: fixed;
    display: flex;
    // flex: 1;
    width: 100%;
    background: #fff;
    z-index: 99;

    
    li {
      margin: 2%;
      width: 20%;
      display: flex;
      text-align: center;
      flex:1;
      flex-direction: column;
      align-items: center;
      border-radius: 50px;
      .sp {
        display: block;
        font-size: 30px;

      }
    }
    .xian{
      width: 1px;
      height: 60px;
      // line-height: 60px;
      // margin-top: 15px;
      background: rgba(204, 205, 207, 0.5);
      margin: 30px 5px 0 5px;
    }

  }
  .router-link-active {
    background: rgb(194, 31, 58);
    color: #fff;
  }
}
</style>