<template>
    <div class="main">
        <div class="top">
        <router-link to='login'><button>返回</button></router-link>
        <span>淘宝注册</span>
        <div class='none'></div>
        </div>
        <p>为了你的账户安全请填写一个手机号完成验证</p>
        <input type="text" placeholder='手机号' style="margin-top:20px" v-model='userName'>
        <div class='solid'></div>
        <input type="password" placeholder="密码" v-model='password'>    
        <div class='bottom'>
        <p>继续操作即视为同意<a>淘宝平台服务协议</a>、<a>隐私权政策</a>、<a>法律<br>声明</a>
            和<a>支付宝及客户端服务协议</a><br>
            系统将同步为您创建支付宝账户
        </p>
        </div>
        <div class="resi">
        <button class='res' @click='resigter'>立即注册</button>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            userName:'',
      password:''
        }
    },
    methods:{
        resigter(){
       window.console.log(111);
       axios.get(`http://localhost:8001?username=${this.userName}&pwd=${this.password}`).then((data)=>{
             window.console.log(data);
            
       })
    }
    }
}
</script>

<style lang="less" scoped>
.test::-webkit-input-placeholder{
                color: red;
                // border:0;
            }
.main{
    background: rgb(245,245,245);
    height:100%;
    .top{
    width:100%;
    height: 80px;
    // position: relative;
    // line-height:40px;
    
    display: flex;
    button{
        width: 100px;
        height: 60px;
        // position: absolute;
        // left: 0;
        
    }
    span{
        width:200px;
        font-size: 48px;
        z-index: 99;
        text-align: center;
        margin: auto;
    }
    .none{
        width: 100px;
        height: 60px;
    }
    }
    p{
        margin-top:20px;
        color:#000;
        margin-bottom:40px;
    }
    input{
        height: 80px;
        width:100%;
        outline: 0;
    }
    .solid{
        width: 90%;
        border-bottom: 1px solid gray;
        margin:40px 0;
    }
    .bottom{
        margin-top: 40px;
        text-align: center;
       p{
           a{
               color:orangered;
           }
       }
    }
    .resi{
        text-align: center;
   .res{
      margin-top:40px;
      width: 640px;
      height: 86px;
      background: orangered;
      border-radius: 40px;
      outline:none;
    }
    }
}
</style>