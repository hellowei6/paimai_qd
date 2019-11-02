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
            this.$router.push("/loginok");
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