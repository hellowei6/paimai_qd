<template>
  <ul class="nav">
<<<<<<< HEAD
    <router-link tag="li" to="/home/one">
=======
    <router-link tag="li" to="/home">
>>>>>>> 7926e3bf5c95c371490c48550267a224d19a6db5
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
    <router-link tag="li" to="/focus/one">
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
  width:100%;
  display: flex;
<<<<<<< HEAD
  padding: 0;
    height: 98px
=======
  padding: 0
>>>>>>> 87e8c354d23984565a09b1c3f51de4528d3b4c9e
}
.nav li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
<<<<<<< HEAD
      /* width: 75px;
    height: 49px; */
}
.nav li i {
  font-size: 50px;
=======
}
.nav li i {
  font-size: 50px;

>>>>>>> 87e8c354d23984565a09b1c3f51de4528d3b4c9e
}

.router-link-active {
  color: red;
}
<<<<<<< HEAD

=======
>>>>>>> 87e8c354d23984565a09b1c3f51de4528d3b4c9e

</style>