<template>
  <ul class="nav">
    <router-link tag="li" to="/home">
    <i class="iconfont icon-shouyexiantiao"></i>
      首页
    </router-link>
    <router-link tag="li" to="/classify">
      <i class="iconfont icon-yalashefenleixiantiao"></i>
      分类
    </router-link>
    <router-link tag="li" to="/circle">
      <i class="iconfont icon-quanquandongtai"></i>
      兴趣圈
    </router-link>
    <router-link tag="li" to="/focus">
      <i class="iconfont icon-naozhong"></i>
      关注
    </router-link>
    <router-link tag="li" to="/mine">
      <i class="iconfont icon-wode-copy"></i>
      我的
    </router-link>
  </ul>
</template>

<style scoped>
/* 私有化 */
.nav {
  background: white;
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0;
    height: 98px
}
.nav li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
      /* width: 75px;
    height: 49px; */
}
.nav li i {
  font-size: 50px;
}
.router-link-active {
  color: red;
}


</style>