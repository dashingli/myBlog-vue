<template>
  <div class="top-wrapper" @click="TopButtonHandle">
    <div class="round-wrapper">
        <span>Top</span>
    </div>
  </div>
</template>

<script lang='js'>
export default {
  methods:{
    TopButtonHandle(){
      this.$bus.$emit('TopButtonHandle','来自页面的消息')
    }
  }
}
</script>

<style lang='less' scoped>
@import "~@/style/var.less";
.top-wrapper{
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom:10px;
  right:20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius:50%;
  background-color: @primary;
  >.round-wrapper span{
    color:@success;
    font-size: 15px;
  }
}
</style>