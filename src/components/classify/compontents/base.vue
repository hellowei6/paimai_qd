<template>
    <div class="base">
        <ul>
            <router-link tag="li" to='/base/first' >
                <span>全部</span>
            </router-link>
            <router-link tag="li" to='/base/second'>
                <span>热拍榜</span>
            </router-link>
            <router-link tag="li" to='/base/third'>
                <span>降幅最大</span>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.base{
   overflow-x: hidden;
    ul{
        display: flex;
        //  position: fixed;
        li{
            background: red;
            height: 88px;
            text-align: center;
            line-height: 88px;
            width: calc(100% /3);
             background: rgb(150, 143, 143);
            span{
                color: #fff;
               font-size: 28px;
            }
        }
    }
    .router-link-active {
    background:black;
    color: #fff;
  }
}
</style>