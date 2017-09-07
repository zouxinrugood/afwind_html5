<template>
  <div class="myHeader">
    <router-link :to="{path:'/'}">
      <img src="../assets/logo.png">
    </router-link>
    <div>
      <el-input placeholder="请输入产品名称 品牌 型号" v-model="product">
        <el-button @click="sousuo" slot="append"><router-link :to="{path: '/goods'}">搜索</router-link></el-button>
      </el-input>
    </div>
    <el-badge :value="12" class="item">
      <el-button size="max">我的收藏</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="max">我的购物车</el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: '',
      select: ''
    }
  },
  methods:{
    sousuo(){

    }
  }
}
</script>

<style scoped>
  .el-input-group {
    float: left;
    width: 600px;
    margin-left: 50px;
    margin-top: 23px;
    margin-right: 50px;
  }
  .item {
    margin-top: 23px;
    margin-right: 40px;
  }
  .myHeader{
    width: 1280px;
    height: 120px;
    margin: 0 auto;
    overflow: hidden;
  }
  .myHeader a{
    float: left;
  }
</style>
