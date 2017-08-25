<template>
    <div class="reg-form">
      <!--<Search></Search>-->
      <div class="g-form">
        <div class="g-form-line">
          <span class="g-form-label choose-role">选择角色</span>
          <div class="g-form-radio">
            <el-radio class="radio" v-model="radio" label="1">采购商</el-radio>
            <el-radio class="radio" v-model="radio" label="2">供应商</el-radio>
          </div>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">公司名称</span>
          <div class="g-form-input">
            <input type="text" v-model="companyname" placeholder="请输入公司名称">
          </div>
          <span class="g-form-error"><i v-show="companyNameErr.errorText" class="el-icon-warning"></i>{{ companyNameErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">统一社会信用代码</span>
          <div class="g-form-input">
            <input type="text" v-model="creditcode" placeholder="请输入统一社会信用代码">
          </div>
          <span class="g-form-error"><i v-show="creditcodeErr.errorText" class="el-icon-warning"></i>{{ creditcodeErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">用户名</span>
          <div class="g-form-input">
            <input type="text" v-model="username" placeholder="请输入用户名">
          </div>
          <span class="g-form-error"><i v-show="usernameErr.errorText" class="el-icon-warning"></i>{{ usernameErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">密码</span>
          <div class="g-form-input">
            <input type="password" v-model="pwd" placeholder="请输入密码">
          </div>
          <span class="g-form-error"><i v-show="pwdErr.errorText" class="el-icon-warning"></i>{{ pwdErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">确认密码</span>
          <div class="g-form-input">
            <input type="password" v-model="confirmpwd" placeholder="请确认密码">
          </div>
          <span class="g-form-error"><i v-show="confirmpwdErr.errorText" class="el-icon-warning"></i>{{ confirmpwdErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label">手机号</span>
          <div class="g-form-input">
            <input type="text" v-model="tel" placeholder="请输入手机号">
          </div>
          <span class="g-form-error"><i v-show="telErr.errorText" class="el-icon-warning"></i>{{ telErr.errorText }}</span>
        </div>
        <div class="g-form-line">
          <span class="g-form-label telverify">手机验证码</span>
          <div class="g-form-input">
            <input type="text" v-model="verify" placeholder="请输入手机验证码">
          </div>
          <span class="g-form-getverify">
            <button @click="getVerify" type="button">
              <span v-show="isShowVerify">{{ second }}后可重新获取验证码</span><span v-show="!isShowVerify">获取验证码</span>
            </button>
          </span>
        </div>
        <div class="g-form-line">
          <div class="g-form-btn">
            <a class="button">注册</a>
            <router-link :to="{path:'/'}">取消</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Search from '../common/search.vue'
export default {
    components:{
      Search
    },
  data() {
    return {
      radio:'1',
      companyname:'',
      creditcode:'',
      username:'',
      pwd:'',
      confirmpwd:'',
      tel:'',
      verify:'',
      errorText:'',
      isShowVerify:false,
      second:60
    }
  },
  watch:{
    radio(){
      console.log(this.radio)
    }
  },
  methods:{
    getVerify() {
      this.isShowVerify = true;
      this.inv = setInterval(() => {
        this.second --
        if (this.second === 0){
          clearInterval(this.inv)
          this.isShowVerify = false
          this.second = 60
        }
      },1000)
    }
  },
  computed:{
    companyNameErr() {
      let errorText,status
      if (!this.companyname){
        status = false;
        errorText = '您没有输入公司名称';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.companyFlag){
        errorText = '';
        this.companyFlag = true;
      }
      return {
        status,errorText
      }
    },
    creditcodeErr() {
      let errorText,status
      if (!/^\d{16}$/.test(this.creditcode)){
        status = false;
        errorText = '您输入的公司信用代码不足或超过16位';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.creditcodeFlag){
        errorText = '';
        this.creditcodeFlag = true;
      }
      return {
        status,errorText
      }
    },
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
    },
    confirmpwdErr() {
      let errorText,status
      if (this.pwd !== this.confirmpwd) {
        status = false;
        errorText = '密码与上述密码不符';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.confirmpwdFlag) {
        errorText = '';
        this.confirmpwdFlag = true;
      }
      return {
        status,errorText
      }
    },
    telErr() {
      let errorText,status
      if (!/^1[34578]\d{9}$/.test(this.tel)) {
        status = false;
        errorText = '请输入正确的手机号';
      }else{
        status = true;
        errorText = '';
      }
      if (!this.telFlag) {
        errorText = '';
        this.telFlag = true;
      }
      return {
        status,errorText
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.reg-form
  width 980px
  margin 0 auto
  margin-top 100px
  .g-form
    width 600px
    height 600px
    margin 0 auto
    overflow hidden
    margin-left 300px
    .g-form-line
      float left
      padding 15px 0
      .g-form-input,.g-form-radio
        display inline-block
        input
          height 30px
          width 200px
          line-height 30px
          vertical-align middle
          padding 0 10px
          border 1px solid #ccc
      .g-form-btn
        padding-left 150px
        margin-top 20px
        a
          padding 20px 30px
          border 1px solid #ccc
          cursor pointer
          background #20a0ff
          color white
  .g-form-label
    float left
    width 130px
    font-size 16px
    display inline-block
    margin-right 20px
    margin-top 8px
  .g-form-error,.el-icon-warning
    color red
  .choose-role
    margin-top 0
</style>





















