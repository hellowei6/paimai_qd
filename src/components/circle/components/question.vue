<template>
    <div class="con">
     <contents></contents>
     <contents1></contents1>
      <contents2></contents2>
     <contents></contents>
      <contents1></contents1>
     <contents2></contents2>
      <contents></contents>
     <contents1></contents1>
     <contents2></contents2>
     <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
    <contents></contents>
    <contents1></contents1>
    <contents2></contents2>
    </div>
</template>
<script>
import contents from "./contents.vue"
import contents1 from "./contents1.vue"
import contents2 from "./contents2.vue"
export default {
    components:{
        contents,
        contents1,
        contents2
    }
}
</script>
<style lang="less" scoped>
.con{
    padding-top: 50px;
}
</style>