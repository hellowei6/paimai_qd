<template>
  <ul class="nav">
    <router-link tag="li" to="/home">
      首页
    </router-link>
    <router-link tag="li" to="/classify">
      分类
    </router-link>
    <router-link tag="li" to="/circle">
      兴趣圈
    </router-link>
    <router-link tag="li" to="/focus">
      关注
    </router-link>
    <router-link tag="li" to="/mine">
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
  padding: 0
}
.nav li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.nav li i {
  font-size: 22px;
}
.router-link-active {
  color: red;
}
</style>