<template>
    <div>
        <searchtwo></searchtwo>
        <one class="one"></one>
    </div>
</template>
<script>
import searchtwo from "./searchtwo"
import one from "../../home/components/one"
export default {
     components: {
      searchtwo,
      one
  },
}
</script>
<style lang="less" scoped>
.one{
    padding-top: 150px;
}
</style>