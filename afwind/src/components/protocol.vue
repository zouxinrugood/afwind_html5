<template>
  <div class="g-form-checkbox">
    <el-checkbox v-model="checked"><el-button type="text" @click="dialogVisible = true">同意爱风商城协议</el-button></el-checkbox>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checked: true,
    }
  },
  watch:{
    checked(){
      this.$emit('regstatus',this.regdisable)
    }
  }
}
</script>

<style>

</style>
