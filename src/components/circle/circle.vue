<template>
    <div>3
    <ul>
        <li v-for='(item,index) in publicList' :key='index'> 
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
        </li>
    </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return{

          publicList:[]
      }
    },
 created(){
     axios.get('http://localhost:3000/ali/public').then((data)=>{
                this.publicList=data.data;
                window.console.log(data);
     })
 }  
}
</script>
<style lang="less" scoped>

</style>