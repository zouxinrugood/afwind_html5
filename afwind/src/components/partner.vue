<template>
    <div class="partner-container">
      <h2>合作伙伴</h2>
      <div class="our-partner" v-for="item in ourPartner">
        <a href="#">
          <img :src="item.src">
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    ourPartner:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style scoped>
  .partner-container{
    width: 1350px;
    height: 150px;
    margin: 0 auto;
    overflow: hidden;
  }
  .partner-container h2{
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .our-partner{
    width: 204px;
    height: 97px;
    float: left;
    margin-top: 10px;
    padding: 0 10px;
    border-right: 1px solid #e6e6e6;
  }
  .our-partner:last-child{
    margin-right: 0;
    border-right: none;
  }
  .our-partner img{
    width: 100%;
    height: 100%;
  }
</style>
