<template>
    <div>
      <div class="myNav">
        <div class="myNav-content">
          <ul>
            <li>你好游客</li>
            <li><router-link :to="{path: '/register'}">注册</router-link></li>
            <li><router-link :to="{path:'/login'}">登录</router-link></li>
            <li class="myOrder"><a href="#">追踪我的订单</a></li>
            <li>
              <el-dropdown>
                <span class="el-dropdown-link">个人中心</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>我的账户</el-dropdown-item>
                  <el-dropdown-item>账户安全</el-dropdown-item>
                  <el-dropdown-item>收货地址</el-dropdown-item>
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

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .myNav
    width 100%
    background #20a0ff
    .myNav-content
      width 980px
      margin 0 auto
      height 52px
      ul
        list-style none
        float left
        li
          width 100px
          float left
          line-height 52px
          color white
          text-align center
          .el-dropdown
            font-size 16px
            color white
            width 100px
            text-align center
            .el-dropdown-menu__item
              text-align center
          a
            color white
            text-decoration none
        .myOrder
          margin-left 300px
  .blank
    width 200px
    height 80px
    margin 0 auto
</style>
