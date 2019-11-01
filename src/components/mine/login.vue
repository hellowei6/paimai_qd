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
      axios
        .get(
          `http://localhost:8000?username=${this.userName}&pwd=${this.password}`
        )
        .then(data => {
          window.console.log(data.data.code);
          this.codeList = data.data.code;
          if (this.codeList == "200") {
            this.$router.push("/content");
          }
        });
    }
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
    width: 80px;
    height: 80px;
    margin-top: 47px;
    display: inline-block;
  }
  .name {
    margin-top: 30px;
    width: 329px;
    height: 40px;
    border-bottom: 1px solid orangered;
    // text-align: center;
    margin: auto;
    margin-top: 20px;
    .ipt1 {
      width: 290px;
      height: 40px;
      display: inline-block;
      float: left;
      outline: none;
    }
  }
  .password {
    margin-top: 30px;
    width: 329px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid orangered;
    // text-align: center;
    margin: auto;
    .ipt2 {
      width: 290px;
      height: 40px;
      display: inline-block;
      float: left;
      outline: none;
    }
  }
  .left {
    display: inline-block;
    float: left;
    margin-left: 40px;
  }
  .right {
    display: inline-block;
    float: right;
    margin-right: 40px;
  }
  button {
    margin-top: 20px;
    width: 314px;
    height: 43px;
    background: orangered;
    border-radius: 20px;
    outline: none;
  }
}
</style>