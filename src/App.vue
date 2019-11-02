<template>
  <div id="app">
   <navList></navList>
   <router-view></router-view>
  </div>
</template>

<script>
import navList from '@/common/navList.vue'

export default {
  
  name: 'app',
  components: {
      navList
  }
}
</script>

<style>

</style>
