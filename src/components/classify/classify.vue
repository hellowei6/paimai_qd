<template>
  <div class="catagory">
    <!-- 导航栏 -->
    <search></search>

    <!-- 内容区 -->
    <div class="content">
    <div class="content-left">
       <!-- 左边分类 -->
      <catelist></catelist>
    </div>
       <!-- 右边内容 -->
       <div class="content-rght" ref="cright">
          <!-- 珠宝 -->
          <jewellery1 v-for="(list,index) in mylist" :key="index" :data="list"></jewellery1>
       </div>
    </div>
    
  </div>
</template>
<script>

import search from "./compontents/search.vue"
import catelist from './compontents/catelist.vue'
import jewellery1 from './compontents/jewellery1.vue'
import {getShoppingList} from '@/api'

export default {
  
  data() {
    return {
      mylist: [],
      scroll:''
    }
  },
  
  components: {
    search,
    catelist,
    jewellery1
  },

  async created() {
    this.mylist = await getShoppingList()
   
  },
  mounted() {
     // console.log(this.$store)
     
    this.$store.state.eventBus.$on('myscroll', (index)=> {
      // window.console.log("触发滚动")
      // 获取index索引值
      window.console.log(index)
      // 1.计算第几个ul距离顶部的距离
      // var scrollHeight = this.$refs.cright.getElementsByClassName("jewellery")
      var cright = this.$refs.cright
      var allDiv = cright.getElementsByClassName('jewellery')
      window.console.log(allDiv[index].offsetTop)
      // window.scrollTo(allDiv[index].offsetTop)
      window.scrollTo(0, allDiv[index].offsetTop-50)
    })
    
  }
  
};
</script>
<style lang="less" scoped>
.content{
  display: flex;
  overflow: hidden;
}

.content-right{
  display: flex;
}

</style>