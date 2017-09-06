<template>
    <div class="reg-form">
      <div class="g-form">
        <div class="g-form-line">
          <span class="g-form-label choose-role">选择角色</span>
          <div class="g-form-radio">
            <el-radio class="radio" v-model="selectrole" label="1">采购商</el-radio>
            <el-radio class="radio" v-model="selectrole" label="2">供应商</el-radio>
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
            <button :disabled="getcodedisable" @click="getVerify" type="button">
              <span v-show="isShowVerify">{{ second }}后可重新获取验证码</span><span @click="getTelCode" v-show="!isShowVerify">获取验证码</span>
            </button>
          </span>
        </div>
        <div class="g-form-line agreeus">
          <protocol @regstatus="editstatus"></protocol>
        </div>
        <div class="g-form-line">
          <div class="g-form-btn">
            <el-button class="marginR" :disabled="companyNameErr.status&&creditcodeErr.status&&usernameErr.status&&pwdErr.status&&confirmpwdErr.status&&telErr.status&&verifyErr.status&&regdisable===false?false:true" type="primary" @click="reg">注册</el-button>
            <router-link :to="{path:'/'}"><el-button class="cancelreg" type="primary">取消</el-button></router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import protocol from './protocol.vue'
export default {
    components:{
      protocol
    },
  data() {
    return {
      selectrole:'1',
      companyname:'',
      creditcode:'',
      username:'',
      pwd:'',
      confirmpwd:'',
      tel:'',
      verify:'',
      errorText:'',
      isShowVerify:false,
      second:60,
      getcodedisable:false,
      regdisable:false,
      dialogVisible: false
    }
  },
  watch:{
    selectrole(){

    },
  },
  mounted(){

  },
  methods:{
    editstatus(){
      this.regdisable = !this.regdisable
    },
      getTelCode(){
//        this.$axios.get('/tostortmessage.ajax',{
//          params:{
//            mobile:this.tel
//          }
//        }).then((res) => {
//          console.log(res.data.data)
//        }).catch((res) => {
//          console.log("请求失败")
//        })
      },
      reg(){
        let reqParams = {
          typei:this.selectrole,
          userName:this.username,
          userPassword:this.pwd,
          mobile:this.tel,
          validateCode:this.verify,
          afwindEnterprise:{
            enterpriseName:this.companyname,
            creditCode:this.creditcode
          }
        }
        console.log(reqParams)
        this.$axios.post('/saveregist.ajax',reqParams)
          .then((res) => {
            console.log(res)
          }).catch(() => {
            console.log("请求失败")
        })
      },
    getVerify() {
      this.isShowVerify = true;
      this.getcodedisable = true;
      this.inv = setInterval(() => {
        this.second --;
        if (this.second === 0){
          clearInterval(this.inv);
          this.isShowVerify = false;
          this.getcodedisable = false;
          this.second = 60;
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
      if (!/^\d{18}$/.test(this.creditcode)){
        status = false;
        errorText = '您输入的公司信用代码不足或超过18位';
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
      let errorText,status;
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
    },
    verifyErr() {
      let errorText,status;
      if (!/[a-zA-Z0-9]{4}/.test(this.verify)){
        status = false
      }else{
        status = true
      }
      if (!this.verifyFlag){
        this.verifyFlag = true
      }
      return {
        status
      }
    }
  }
}
</script>

<style scoped>
.reg-form{
  width: 980px;
  margin: 0 auto;
  margin-top: 100px;
}
.g-form{
  width: 670px;
  height: 600px;
  margin: 0 auto;
  margin-left: 240px;
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
.g-form-btn{
  padding-left: 150px;
}
.marginR{
  margin-right: 10px;
}
.g-form-btn a{
  color: white;
}
.agreeus{
  float: left;
  width: 390px;
  padding: 0;
  margin-left: 150px;
}
.g-form-label{
  float: left;
  width: 130px;
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
.protocol{
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>





















