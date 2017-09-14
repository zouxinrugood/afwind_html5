<template>
    <div class="detail-container">
      <Search></Search>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="店铺首页" name="first">
          <storeHomePage></storeHomePage>
        </el-tab-pane>
        <el-tab-pane label="商品列表" name="second">
          <goodsList></goodsList>
        </el-tab-pane>
        <el-tab-pane label="店铺详情" name="third">
          <storeDetails></storeDetails>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import Search from '../common/search.vue'
import storeHomePage from '../pages/storeHomePage.vue'
import goodsList from '../pages/goodList.vue'
import storeDetails from '../pages/storeDetails.vue'

  export default {
    components:{
      Search,
      storeHomePage,
      goodsList,
      storeDetails
    },
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
.el-tabs__nav{
  margin-left: 350px;
}
</style>
