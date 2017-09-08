<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
        <span class="g-form-error"><i v-show="usernameErr.errorText" class="el-icon-warning"></i>{{ usernameErr.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="pwd" placeholder="请输入密码">
        </div>
        <span class="g-form-error"><i v-show="pwdErr.errorText" class="el-icon-warning"></i>{{ pwdErr.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">验证码：</span>
        <div class="g-form-input">
          <input class="verify" type="password" v-model="verify" placeholder="验证码">
          <div class="verifycode">
            <img ref="verifyimg" @click="toggleVerify" :src="verifysrc"/>
          </div>
        </div>
      </div>
      <div class="g-form-line forgetpwd">
        <span>忘记密码？</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a @click="login" class="button">登录</a>
          <router-link :to="{path:'/'}">取消</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      pwd:'',
      verify:'',
      verifyurl:'http://192.168.1.100:8082/commerce-web',
      verifysrc:''
    }
  },
  mounted(){
    this.verifysrc = this.verifyurl + '/xuan/verifyCode.ajax'
  },
  methods:{
    toggleVerify() {
      let time = new Date().getTime();
      this.verifysrc = this.verifyurl+'/xuan/verifyCode.ajax?useful='+time
    },
    login() {
      let reqParams = {
        userName:this.username,
        userPassword:this.pwd,
        validateCode:this.verify
      }
      this.$axios.post("/login.ajax",reqParams)
        .then((res) => {
          console.log(res);
        }).catch((res) => {
          console.log('请求失败')
      })
    }
  },
  computed:{
    usernameErr() {
      let errorText,status
      if (!/^[a-zA-z][a-zA-Z0-9_]{5,11}$/.test(this.username)) {
        status = false;
        errorText = '您输入的用户名格式不正确';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.usernameFlag){
        errorText = '';
        this.usernameFlag = true;
      }
      return {
        status,errorText
      }
    },
    pwdErr() {
      let errorText,status
      if (!/^\w{6,12}$/g.test(this.pwd)) {
        status = false;
        errorText = '请至少输入六位密码';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.pwdFlag) {
        errorText = '';
        this.pwdFlag = true
      }
      return {
        status,errorText
      }
    }
  }
}
</script>

<style scoped>
  .login-form{
    width: 980px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .g-form{
    width: 600px;
    height: 600px;
    margin: 0 auto;
    margin-left: 300px;
    overflow: hidden;
  }
  .g-form-line{
    float: left;
    padding: 15px 0;
  }
  .g-form-input,.g-form-radio{
    display: inline-block;
  }
  .g-form-input input{
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .verify{
    float: left;
    width: 100px;
  }
  .verifycode{
    float: left;
  }
  .verifycode img{
    width: 100px;height: 32px;
  }
  .g-form-btn{
    padding-left: 118px;
    margin-top: 20px;
  }
  .g-form-btn a{
    padding: 10px 30px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #20a0ff;
    color: white;
  }
  .forgetpwd{
    width: 390px;
    text-align: left;
    color: #7e8c8d;
    margin-left: 100px;
    padding: 0;
  }
  .g-form-label{
    float: left;
    width: 80px;
    font-size: 16px;
    display: inline-block;
    margin-right: 20px;
    margin-top: 8px;
  }
  .g-form-error,.el-icon-warning{
    color: red;
  }
  .choose-role{
    margin-top: 0px;
  }
</style>
