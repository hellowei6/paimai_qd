<template>
    <div class="jewellery" ref="myul">
        <div class="jewellery-top">
             <img :src="data.img" alt="">
        </div>
        <div class="jewellery-b">
            <ul>
                <li class="ziti">
                    <p>{{data.title}}</p>
                </li>
                <li class="tu" v-for="(item,index) in data.list" :key="index">
                    <img :src="item.img" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data(){
        return{
            jewellery1:[],
            list:""
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.jewellery{
    margin: 80px 0 0 0;
    width: 600px;
//     // height: 1158px;
    margin-left: 25%;
    .jewellery-top{
       margin:24px 26px 0 24px;
       height: 100px;
        img{
          width: 545px;
          height: 100px;
        }
    }
    .jewellery-b{
        display: flex;
        width: 594px;
        padding-left: 6px;
        ul{
            
            .ziti{
                width: 594px;
                height: 80px;
                line-height: 80px;
                font-size: 28px;
                // padding-left: 225px;
                text-align: center;
            }
            .tu{
                width: calc(100% / 3);
                float: left;
                span{
                    padding-left: 40%
                }
            }
        }
    }
}
</style>