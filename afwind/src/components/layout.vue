<template>
    <div>
      <div class="header">
        <keep-alive>
          <myHeader></myHeader>
        </keep-alive>
      </div>
      <div class="content">i am layout</div>
      <div class="footer">
        <keep-alive>
          <myFooter></myFooter>
        </keep-alive>
      </div>
    </div>
</template>

<script>
import Header from '../common/header'
import Footer from '../common/footer'

export default {
  components:{
    myHeader:Header,
    myFooter:Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
