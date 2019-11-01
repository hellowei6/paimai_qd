<template>
    <div class="ipt">
        <input type="text"><router-link tag='li' to='/classify'><strong>取消</strong></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.ipt{
    display: flex;
   input{
       width: 620px;
       height: 62px;
       border-radius: 29px;
       background-color: rgb(239, 239, 239);
       font-size: 26px;
       line-height: 30px;
       margin: 12px 24px 0 24px;
   }
   li{
       color: black;
       font-size: 28px;
       padding-top: 24px;
       
   }

}
</style>