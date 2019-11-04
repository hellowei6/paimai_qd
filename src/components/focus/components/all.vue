<template>
    <div class="all">
        <div class="allone">
        <div class="alltwo">
            <p>拍品提醒</p>
            <span>你还没有设置过提醒，为你推荐好货</span>
            <a :href="'http://localhost:8080/#/focus/two'"> 更多推荐</a>
        </div>
        <div class="allthree">
          <img src="//gw.alicdn.com/tfs/TB15_JaUQPoK1RjSZKbXXX1IXXa-132-132.jpg" alt="">
          <img src="//gw.alicdn.com/tfs/TB1tiZZVIbpK1RjSZFyXXX_qFXa-132-132.jpg" alt="">
           <img src="//gw.alicdn.com/tfs/TB1.XETc8Kw3KVjSZTEXXcuRpXa-319-319.jpg" alt="">
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.all{
    padding-top: 120px;
    margin: 3%;
    .allone{ 
        padding: 3%;
        background: white;
        border-radius: 20px 20px 0 0;
        .alltwo{
            p{
                font-size: 34px;
                font-weight: bold;
                color: #333;
            }
            span{
                font-size: 26px;
                color: #000;
            }
            a{
                float: right;
                color: #000;
            }
        }
        .allthree{
            display: flex;
            img{
                width: 30%;
                flex:1;
                margin: 1%;
                border-radius: 20px;
                


            }
        }
    }
}
</style>