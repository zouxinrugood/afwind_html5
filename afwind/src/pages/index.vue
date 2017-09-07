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
      <div class="menu-container">
        <div class="cateMenu">
          <cateMenu></cateMenu>
        </div>
        <div class="searchMenu">
          <slideShow :slides="slides"></slideShow>
        </div>
        <div class="advertising">各种广告</div>
      </div>
      <div class="products-container">
        <div class="ourRecommend">
          <div class="recommend-container" v-for="item in recommend">
            <a href="#">
              <img :src="item.src">
            </a>
          </div>
        </div>
        <listMenu :productsList="allProducts"></listMenu>
      </div>
      <ourPartner :ourPartner="partner"></ourPartner>

    </div>
</template>

<script>
import Search from '../common/search.vue'
import slideShow from '../components/slideShow.vue'
import cateMenu from '../components/cateMenu.vue'
import listMenu from '../components/listMenu.vue'
import ourPartner from '../components/partner.vue'
  export default {
    components:{
      Search,
      slideShow,
      cateMenu,
      listMenu,
      ourPartner
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
        ],
        recommend:[
          {
            src:require('../assets/recommend/recommend1.jpg'),
            id:1
          },
          {
            src:require('../assets/recommend/recommend2.jpg'),
            id:2
          },
          {
            src:require('../assets/recommend/recommend3.jpg'),
            id:3
          }
        ],
        allProducts:[
          {
            src:require('../assets/list-products/list1.jpg'),
            name:'无敌风速仪',
            price:'123',
            id:1
          },
          {
            src:require('../assets/list-products/list2.jpg'),
            name:'水冷模块',
            price:'456',
            id:2
          },
          {
            src:require('../assets/list-products/list4.jpg'),
            name:'熔断器',
            price:'998',
            id:3
          },
          {
            src:require('../assets/list-products/list5.jpg'),
            name:'轴承',
            price:'2124',
            id:4
          },
          {
            src:require('../assets/list-products/list1.jpg'),
            name:'无敌风速仪',
            price:'123',
            id:1
          },
          {
            src:require('../assets/list-products/list2.jpg'),
            name:'水冷模块',
            price:'456',
            id:2
          },
          {
            src:require('../assets/list-products/list4.jpg'),
            name:'熔断器',
            price:'998',
            id:3
          },
          {
            src:require('../assets/list-products/list5.jpg'),
            name:'轴承',
            price:'2124',
            id:4
          }
        ],
        partner:[
          {
            src:require('../assets/partner/partner1.jpg'),
            id:1
          },
          {
            src:require('../assets/partner/partner2.jpg'),
            id:2
          },
          {
            src:require('../assets/partner/partner3.jpg'),
            id:3
          },
          {
            src:require('../assets/partner/partner4.jpg'),
            id:4
          },
          {
            src:require('../assets/partner/partner5.jpg'),
            id:5
          },
          {
            src:require('../assets/partner/partner6.jpg'),
            id:6
          },
        ]
      }
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
  .menu-container{
    width: 1350px;
    height: 500px;
    margin: 0 auto;
    margin-bottom: 30px;
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
  .products-container{
    width: 1350px;
    height: 999px;
    margin: 0 auto;
    background: aqua;
  }
  .ourRecommend{
    overflow: hidden;
  }
  .recommend-container{
    width: 430px;
    float: left;
    margin-left: 15px;
    padding-top: 10px;
  }
  .recommend-container img{
    width: 100%;
  }
</style>

