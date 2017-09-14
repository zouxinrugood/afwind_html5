<template>
    <div class="completeComInfo">
      <div class="infoTop">
        <img class="infoLogo" src="../assets/logo.png">
        <h1 class="infoTitle">请问完善以下信息</h1>
      </div>
      <div class="infoContainer">
        <h2>①企业信息</h2>
        <div class="companyInfo">
          <ul>
            <li class="setWidth">
              <div class="infoName">企业名称：</div>
              <el-input class="setWidth" :disabled="true" value="某某某企业"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">统一社会信用代码：</div>
              <el-input :disabled="true" value="1232132141421313123131"></el-input>
            </li>
            <li class="setWidth setSelect">
              <div class="infoName">所属行业：</div>
              <el-select @change="industry" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </li>
            <li class="setWidth">
              <div class="infoName">公司注册地址：</div>
              <v-distpicker class="picker" @selected="regSelected"></v-distpicker>
              <el-input class="streetInfo" placeholder="请填写街道信息"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">办公地址：</div>
              <v-distpicker class="picker" @selected="workSelected"></v-distpicker>
              <el-input class="streetInfo" placeholder="请填写街道信息"></el-input>
            </li>
            <li class="setHeight">
              <div class="infoName">公司营业执照：</div>
              <el-upload class="upload-demo" :auto-upload="false" list-type="picture" ref="licenseUpload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="licenseHandlePreview" :on-remove="licenseHandleRemove">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="licenseSubmitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </li>
            <li class="setWidth setSelect">
              <div class="infoName">供货范围：</div>
              <el-select @change="supply" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </li>
            <li class="setWidth">
              <div class="infoName">开户行名称：</div>
              <el-input v-model="bankName" value="某某某银行">asdsadad</el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">开户行账号：</div>
              <el-input v-model="bankAccount" value="213132124142141"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">开户行信息：</div>
              <el-input v-model="bankInfo" value="各种信息"></el-input>
            </li>
          </ul>
        </div>
        <h2>②个人信息</h2>
        <div class="companyInfo personInfo">
          <ul>
            <li class="setWidth">
              <div class="infoName">联系人姓名：</div>
              <el-input v-model="name" value="某某某人"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">性别：</div>
              <el-input v-model="sex" value="男"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">职务：</div>
              <el-input v-model="duty" value="某职务"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">手机号：</div>
              <el-input :disabled="true" value="13111111111"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">办公电话：</div>
              <el-input v-model="tel" value="010-11111111"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">传真：</div>
              <el-input v-model="fax" value="010-1231321"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">邮箱：</div>
              <el-input v-model="email" value="123132@163.com"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">qq：</div>
              <el-input v-model="qq" value="qq号"></el-input>
            </li>
            <li class="setWidth">
              <div class="infoName">微信：</div>
              <el-input v-model="wx" value="微信号"></el-input>
            </li>
            <li class="setHeight">
              <div class="infoName">各种附件：</div>
              <el-upload multiple class="upload-demo" :auto-upload="false" ref="accessUpload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="AccessHandlePreview" :on-remove="AccessHandleRemove">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="AccessSubmitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </li>
          </ul>
        </div>
        <div class="formBtn">
          <el-button type="primary">提交</el-button>
          <el-button type="primary">取消</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    components:{
      VDistpicker
    },
    data() {
      return {
        options: [{
          value: '行业1',
          label: '行业1'
        }, {
          value: '行业2',
          label: '行业2'
        }, {
          value: '行业3',
          label: '行业3'
        }, {
          value: '行业4',
          label: '行业4'
        }, {
          value: '行业5',
          label: '行业5'
        }],
        value: '',
        bankName:'',
        bankAccount:'',
        bankInfo:'',
        name:'',
        sex:'',
        duty:'',
        tel:'',
        fax:'',
        email:'',
        qq:'',
        wx:''
      }
    },
    methods:{
      industry(){
        console.log(this.value)
      },
      regSelected(data) {
        console.log(data)
      },
      workSelected(data){
        console.log(data)
      },
      licenseHandlePreview(file) {
        console.log(file);
        console.log("点击已上传的文件");
      },
      licenseHandleRemove(file, fileList) {
        console.log(file, fileList);
        console.log("点击删除文件");
      },
      licenseSubmitUpload() {
        this.$refs.licenseUpload.submit();
      },
      supply(){
        console.log(this.value)
      },
      AccessHandlePreview(){
        console.log(file);
        console.log("点击已上传的文件");
      },
      AccessHandleRemove(){
        console.log(file, fileList);
        console.log("点击删除文件");
      },
      AccessSubmitUpload(){
        this.$refs.accessUpload.submit();
      }
    }
  }
</script>

<style>
  .completeComInfo{
    height: 1300px;
  }
  .infoTop{
    width: 980px;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
  }
  .infoLogo{
    width: 200px;
    height: 80px;
    float: left;
  }
  .infoTitle{
    float: left;
    width: 450px;
    height: 50px;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
    margin-top: 13px;
    font-family: "Microsoft YaHei UI";
  }
  .infoContainer{
    width: 1300px;
    /*margin: 0 auto;*/
    margin-left: 490px;
    /*background: deepskyblue;*/
  }
  .infoContainer h2{
    width: 100px;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }
  .companyInfo{
    width: 1200px;
    height: 500px;
    margin: 0 auto;
  }
  .companyInfo ul{
    list-style: none;
    overflow: hidden;
  }
  .infoName{
    text-align: right;
    height: 36px;
    line-height: 36px;
    float: left;
    width: 20%;
  }
  .companyInfo .el-input{
    float: left;
    width: 20%;
  }
  .companyInfo .el-input .el-input__inner{
    text-align: center;
  }
  .companyInfo .picker{
    float: left;
  }
  .companyInfo .upload-demo{
    float: left;
    width: 80%;
  }
  .companyInfo .streetInfo{
    width: 36.5%;
  }
  .companyInfo .streetInfo .el-input__inner{
    height: 40px;
  }
  .setWidth{
    width: 1200px;
    height: 42px;
    overflow: hidden;
  }
  .setHeight{
    width: 1200px;
    height: 155px;
  }
  .setSelect .el-input{
    width: 111%;
  }
  .formBtn{
    margin-top: 40px;
    margin-left: 290px;
  }
</style>
































