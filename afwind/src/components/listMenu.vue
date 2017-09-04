<template>
    <div class="list-menu">
      <div class="list-container" v-for="item in productsList">
        <a href="#">
          <img :src="item.src">
        </a>
        <div class="list-name">
          <a href="#">{{ item.name }}</a>
        </div>
        <div class="list-price">
          <span>￥{{ item.price }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    productsList:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
  .list-container{
    width: 300px;
    float: left;
    padding: 10px;
    margin-left: 14px;
    margin-top: 10px;
    background: #fff;
  }
  .list-container img{
    width: 100%;
  }
  .list-name{
    text-align: center;
  }
  .list-name a{
    text-decoration: none;
    color: black;
  }
  .list-price{
    color: red;
  }
</style>
