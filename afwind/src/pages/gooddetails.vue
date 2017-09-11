<template>
    <div class="detail-container">
      <Search></Search>
      <goodsDetailsNav></goodsDetailsNav>
      商品详情页
    </div>
</template>

<script>
import Search from '../common/search.vue'
import goodsDetailsNav from '../common/goodsDetailsNav.vue'

  export default {
    components:{
      Search,
      goodsDetailsNav
    }
  }
</script>

<style>

</style>
