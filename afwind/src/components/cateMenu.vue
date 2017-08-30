<template>
  <div>
    <div class="first">
      <div class="el-cascader-menus">
        <ul class="el-cascader-menu">
          <li @mouseover="open(index)" @mouseout="close(index)" v-for="(item,index) in options" class="el-cascader-menu__item el-cascader-menu__item--extensible">{{item.name}}{{index+1}}</li>
        </ul>
      </div>
    </div>
    <div class="second">
      <div v-for="(item,index) in options1" @mouseover="keep(index)" @mouseout="closeAll()" v-show="isShow === (index+1)" class="el-cascader-menus">
        <ul class="el-cascader-menu">
          <li class="el-cascader-menu__item el-cascader-menu__item--extensible">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isShow:0,
      options: [
        {name:"家用电器", des:1},
        {name:"手机", des:2},
        {name:"电脑", des:3},
        {name:"家具", des:4},
        {name:"男装", des:5},
        {name:"宠物", des:6},
        {name:"女鞋", des:7},
        {name:"男鞋", des:8}
      ],
      options1: [
        {name:"洗衣机", des:1},
        {name:"苹果", des:2},
        {name:"联想", des:3},
        {name:"衣柜", des:4},
        {name:"T恤", des:5},
        {name:"萨摩耶", des:6},
        {name:"adidas", des:7},
        {name:"nike", des:8}
      ]
    }
  },
  methods:{
    open(index) {
      this.isShow = 0;
      this.isShow = index+1;
    },
    close(index){
      this.isShow = 0;
    },
    keep(index){
      this.isShow = index+1;
    },
    closeAll(){
      this.isShow = 0;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.first,.second{
  width 160px
  height 500px
  float left
}
.first .el-cascader-menus{
    margin 0
    height:498px
    border none
}
.first .el-cascader-menus .el-cascader-menu{
  margin 0
}
.second .el-cascader-menus{
  margin 0
  height 498px
  border none
}
.second .el-cascader-menu{
  width: 500px;
}
.el-cascader-menu{
  height: 500px;
}
.second .el-cascader-menu__item--extensible:after{
  font-size: 0;
}
</style>
