<template>
    <div>
      <div class="header">
        <myHeader></myHeader>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <myFooter></myFooter>
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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
