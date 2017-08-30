<template>
    <div>
      <Search></Search>
      <div class="top-search">
        <div class="products-title">
          <div class="products-logo">
            <img src="../assets/products.png">
          </div>
          <p>全部商品分类</p>
        </div>
        <div class="container-nav">
          <ul class="nav-main">
            <li class="nav-detail"><a href="#">首页</a></li>
            <li class="nav-detail"><a href="#">所有商品</a></li>
            <li class="nav-detail"><a href="#">现货商城</a></li>
            <li class="nav-detail"><a href="#">精品商城</a></li>
            <li class="nav-detail"><a href="#">品牌中心</a></li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="cateMenu">
          <cateMenu></cateMenu>
        </div>
        <div class="searchMenu">
          <slideShow :slides="slides"></slideShow>
        </div>
        <div class="advertising">各种广告</div>
      </div>
    </div>
</template>

<script>
import Search from '../common/search.vue'
import slideShow from '../components/slideShow.vue'
import cateMenu from '../components/cateMenu.vue'
  export default {
    components:{
      Search,slideShow,cateMenu
    },
    data() {
      return {
        slides:[
          {
            src:require('../assets/banner1.png'),
            des:'banner1'
          },
          {
            src:require('../assets/banner2.png'),
            des:'banner2'
          },
          {
            src:require('../assets/banner3.png'),
            des:'banner3'
          }
        ]
      }
    },
    methods:{

    }
  }
</script>

<style>
  .top-search{
    width: 1350px;
    height: 40px;
    margin: 0 auto;
    background: red;
    overflow: hidden;
  }
  .products-title{
    width: 160px;
    height: 40px;
    float: left;
    background: pink;
    overflow: hidden;
  }
  .products-logo{
    float: left;
  }
  .products-logo img{
    width: 40px;
    height: 40px;
    padding: 0 5px;
  }
  .products-title p{
    float: left;
    line-height: 40px;
  }
  .container-nav{
    width: 800px;
    height: 40px;
    float: left;
  }
  .nav-main{
    width: 100%;
    height: 100%;
    list-style: none;
  }
  .nav-detail{
    width: 80px;
    height: 40px;
    float: left;
    line-height: 40px;
    text-align: center;
  }
  .container{
    width: 1350px;
    height: 500px;
    margin: 0 auto;
    background: black;
    overflow: hidden;
    position: relative;
  }
  .cateMenu{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .searchMenu{
    width: 1030px;
    height: 500px;
    margin-left: 160px;
    background: darkmagenta;
  }
  .advertising{
    width: 160px;
    height: 500px;
    background: green;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

