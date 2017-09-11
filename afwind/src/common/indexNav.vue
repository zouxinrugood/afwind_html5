<template>
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
</template>

<script>

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
</style>
