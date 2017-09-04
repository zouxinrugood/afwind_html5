<template>
    <div>
      <div class="header">
        <myHeader></myHeader>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <myFooter :footerInfo="footerInfo"></myFooter>
      </div>
    </div>
</template>

<script>
import header from '../common/header.vue';
import footer from '../common/footer.vue';

export default {
  components:{
    myHeader:header,
    myFooter:footer
  },
  data() {
    return {
      footerInfo:[
        {
          title:"帮助指导",
          info:[
            {problem:"新手指南"},
            {problem:"常见问题"},
            {problem:"服务保障"}
          ]
        },
        {
          title:"商务合作",
          info:[
            {problem:"商户入驻"},
            {problem:"商户中心"}
          ]
        },
        {
          title:"支付方式",
          info:[
            {problem:"线下交易"},
            {problem:"线上支付"}
          ]
        },
        {
          title:"走进爱风",
          info:[
            {problem:"关于我们"},
            {problem:"联系我们"},
            {problem:"咨询建议"},
            {problem:"免责声明"},
            {problem:"行业前瞻"},
            {problem:"最新动态"},
            {problem:"诚聘英才"}
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
