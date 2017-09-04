<template>
    <div class="my-footer">
      <div class="container">
        <div class="footer-main">
          <div v-for="item in footerInfo" class="footer-item">
            <h2 class="footer-item-title">{{ item.title }}</h2>
            <ul v-for="item1 in item.info">
              <li><a href="#">{{item1.problem}}</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          Copyright ©2017-2020北京凯金卓越科技发展有限公司 , All Rights Reserved.
        </div>
        <div class="licence">
          京ICP备14056031号-1
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    footerInfo:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
  .my-footer{
     width: 100%;
     height: 400px;
     background: #f7f7f7;
     border-top: 1px solid #eee;
     margin-top: 20px;
  }
  .container{
    width: 1350px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer-main{
    width: 696px;
    height: 320px;
    margin: 0 auto;
  }
  .footer-item{
    float: left;
  }
  .footer-item{
    margin-top: 100px;
    padding: 0 50px;
  }
  .footer-item ul{
    list-style: none;
  }
  .footer-item ul li{
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .footer-item ul li a{
    text-decoration: none;
    color: #999;
  }
  .footer-item-title{
    padding-bottom: 20px;
  }
  .copyright{
    width: 550px;
    height: 20px;
    margin: 0 auto;
    line-height: 20px;
    font-size: 14px;
    margin-top: 20px;
  }
  .licence{
    font-size: 14px;
    width: 150px;
    height: 15px;
    margin: 0 auto;
    margin-top: 5px;
  }
</style>
