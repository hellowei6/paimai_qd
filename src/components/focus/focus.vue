<template>
  <div class="focus">
    <div class="beijing"></div>
    <!-- 导航栏 -->
    <search></search>
    <!-- 全部上新 -->
    <whole1></whole1>
    <!-- 内容 -->
    <!-- <One></One>
    <Two></Two> -->
  </div>
</template>
<script>
import search from "./components/search";
import whole1 from "./components/whole1";
export default {
  components: {
    search,
    whole1,
  }
};
</script>
<style lang="less" scoped>

.beijing {
  border: 0px solid black;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(233, 234, 236);
  z-index: -3;
}
</style>