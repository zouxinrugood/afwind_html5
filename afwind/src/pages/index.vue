<template>
    <div>
      <Search></Search>
      <indexNav></indexNav>
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
import indexNav from '../common/indexNav.vue'
import slideShow from '../components/slideShow.vue'
import cateMenu from '../components/cateMenu.vue'
import listMenu from '../components/listMenu.vue'
import ourPartner from '../components/partner.vue'
  export default {
    components:{
      Search,
      indexNav,
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
  /* 开始 */

  /* 结束 */
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

