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
    <fastion></fastion>
    </div>
</template>
<script>
import fastion from "./fastion.vue"
import contents from "./contents.vue"
import contents1 from "./contents1.vue"
import contents2 from "./contents2.vue"
export default {
    components:{
        contents,
        contents1,
        contents2,
        fastion
    }
}
</script>
<style lang="less" scoped>
.con{
    padding-top: 100px;
}
</style>