<template>
  <ul class="nav">
    <router-link tag="li" to="/home/one">
      <span>猜你喜欢</span>
    </router-link>
    <router-link tag="li" to="/home/two">
      <span>精选专场</span>
    </router-link>
    <router-link tag="li" to="/home/three">
      <span>特价房产</span>
    </router-link>
    <router-link tag="li" to="/home/four">
      <span>免保证金</span>
    </router-link>
  </ul>
</template>

<style scoped>
/* 私有化 */
.router-link-active {
  color: white;
  background-color: red;
}
.nav {
  /* background: white; */
  /* bottom: 0;
  left: 0; */
  width: 96%;
  margin: auto;
  height:100px;
}
.nav li {
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1; */
  float: left;
  width: 21%;
  height: 60%;
  border-radius: 30px;
  margin: 2% 2%;
  text-align: center;
}
.nav li span {
  font-size: 34px;
  /* color: rgb(77, 77, 77); */
  font-weight: bold;
  display: block;
  margin-top:2%;
}
</style>