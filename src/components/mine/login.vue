<template>
  <div class="main">
    <img src="//gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt />
    <br />
    <div class="name">
      <input
        type="text"
        class="ipt1"
        placeholder="手机号/邮箱/会员名"
        style="border:none"
        v-model="userName"
      />
    </div>
    <br />
    <div class="password">
      <input
        type="passworld"
        class="ipt2"
        placeholder="请输入密码"
        style="border:none"
        v-model="password"
      />
    </div>
    <br />
    <span class="left">短信验证码登录</span>
    <router-link to="resigter">
      <span class="right">免费注册</span>
    </router-link>
    <br />
    <button @click="login">登录</button>
  </div>
</template>
<script>
import axios from "axios";
// import {getLogin} from "@/api";
export default {
  data() {
    return {
      userName: "",
      password: "",
      codeList: ""
    };
  },
  methods: {
    login() {
      axios.get(
          `http://localhost:8000?username=${this.userName}&pwd=${this.password}`
        ).then(data=> {
          window.console.log(data);
          this.codeList = data.code;
          window.console.log(this.codeList);
          if (this.codeList == "200") {
            this.$router.push("/loginok");
          }
        });

    //  this.codeList=getLogin()
    //  window.console.log(this.codeList.code);
       
//        fetch(`http://localhost:8000?username=${this.userName}&pwd=${this.password}`, {
//   method: "GET",
//   headers: {
//       "Content-Type": "application/json",
//   },
//   mode: "cors",
//   body: JSON.stringify({
//       content: "留言内容"
//   })
// }).then(function(res) {
//   if (res.status === 200) {
//       return res.json()
//   } else {
//       return Promise.reject(res.json())
//   }
// }).then(function(data) {
//   window.console.log(data);
// }).catch(function(err) {
//  window.console.log(err);
// });


    //   var xhr = new XMLHttpRequest();
    //   //2.打开链接
    //   xhr.open(
    //     "GET",
    //     `http://localhost:8000?username=${this.userName}&pwd=${this.password}`
    //   );
    //   //3.发送请求
    //   xhr.send();
    //   //接受服务器响应
    //   //当readystate的值发生改变时，会触发该事件
    //   xhr.onreadystatechange = function() {
    //     // console.log(this.readyState);
    //     //服务器响应完毕
    //     if (this.readyState == 4 && this.status == 200) {
    //       window.console.log(JSON.parse(this.response).code);
    //       this.codeList = JSON.parse(this.response).code;
    //       window.console.log(this.codeList);
    //     }
    //   };
    //   window.console.log('1'+this.codeList);
    //   if(this.codeList=="200"){
    //         this.$router.push("/loginok");
    //   }
    },
  }
};
</script>
<style lang="less" scoped>
.test::-webkit-input-placeholder {
  color: red;
}
.main {
  text-align: center;

  img {
    width: 160px;
    height: 160px;
    margin-top: 100px;
    display: inline-block;
  }
  .name {
    margin-top: 60px;
    width: 660px;
    height: 80px;
    border-bottom: 2px solid orangered;
    // text-align: center;
    margin: auto;
    margin-top: 40px;
    .ipt1 {
      width: 580px;
      height: 80px;
      display: inline-block;
      float: left;
      outline: none;
    }
  }
  .password {
    margin-top: 60px;
    width: 660px;
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid orangered;
    // text-align: center;
    margin: auto;
    .ipt2 {
      width: 580px;
      height: 80px;
      display: inline-block;
      float: left;
      outline: none;
    }
  }
  .left {
    display: inline-block;
    float: left;
    margin-left: 80px;
  }
  .right {
    display: inline-block;
    float: right;
    margin-right: 80px;
  }
  button {
    margin-top: 40px;
    width: 640px;
    height: 86px;
    background: orangered;
    border-radius: 40px;
    outline: none;
  }
}
</style>