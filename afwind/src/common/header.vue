<template>
    <div>
      <div class="myNav">
        <div class="myNav-content">
          <ul>
            <li class="aaa"><a href="#">你好<span v-show="!vipname">游客</span>{{ vipname }}</a></li>
            <li><router-link :to="{path: '/register'}">注册</router-link></li>
            <li><router-link :to="{path:'/login'}">登录</router-link></li>
            <li class="myOrder"><a href="#">追踪我的订单</a></li>
            <li>
              <el-dropdown>
                <span class="el-dropdown-link">个人中心</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><router-link style="color: black" :to="{path:'/myAccount'}">我的账户</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link style="color: black" :to="{path:'/accountSec'}">账户安全</router-link></el-dropdown-item>
                  <el-dropdown-item><router-link style="color: black" :to="{path:'/shippingAddr'}">收货地址</router-link></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>在线客服</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
      vipname:''
    }
  },
  mounted(){
    this.vipname = sessionStorage.getItem("vipname")
  }
}
</script>

<style scoped>
  .myNav{
    width: 100%;
    background: #20a0ff;
  }
  .myNav-content{
    width: 980px;
    height: 52px;
    margin: 0 auto;
    overflow: hidden;
  }
  .myNav-content ul{
    list-style: none;
    float: left;
  }
  .myNav-content ul li{
    width: 100px;
    height: 52px;
    float: left;
    line-height: 52px;
    color: white;
    text-align: center;
    overflow: hidden;
  }
  .myNav-content ul li a{
    color: white;
  }
  .myNav-content ul li a:nth-child(1){
    white-space:nowrap;
  }
  .el-dropdown{
    font-size: 16px;
    color: white;
    width: 100px;
    text-align: center;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
  .el-dropdown-menu__item a{
    color: white;
    text-decoration: none;
  }
  .myOrder{
    margin-left: 300px;
  }
  .blank{
    width: 200px;
    height: 80px;
    margin: 0 auto;
  }

</style>
