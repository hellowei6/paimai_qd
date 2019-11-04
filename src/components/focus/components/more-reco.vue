<template>
    <div class="more"> 
    <ul>
        <li v-for="(item,index) in cateList" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
            <p>{{item.price}}</p>

        </li>
    </ul>
    </div>
</template>
<script>
import { getBanner } from "@/api";
export default {
     data() {
    return {
      cateList: []
    };
  },
  async created() {
    this.cateList = await getBanner();
  }
}
</script>
<style lang="less" scoped>
.more{
    width: 100%;
    padding-top: 40px;
    ul{
        width: 94%;
        margin: 0 auto;;
        li{
           width: 48%;
            float: left;
            height: 500px;
            background: white;
            margin: 1%;
            border-radius: 16px;
           img{
               width: 100%;
                  height: 65%;
                  border-radius: 16px 16px 0 0;
           }
           span{
               font-size: 26px;
           }
           p{
               font-size: 26px;
               color: rgb(161, 21, 21);

           }
        }
    }
}
</style>