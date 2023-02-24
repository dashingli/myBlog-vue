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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  background-color: @primary;
  >.round-wrapper span{
    color:@words;
    font-weight: bold;
    font-size: 15px;
  }
}
</style>