<template>
  <div class="layout-wrapper">
    <div class="left-wrapper">
      <slot name="left"></slot>
    </div>
    <div class="main-wrapper">
      <slot name="main"></slot>
    </div>
    <div class="right-wrapper">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="js">
export default {
}
</script>

<style lang="less" scoped>
.layout-wrapper {
  display: flex;
  .left-wrapper {
    flex: 0 0 auto;
  }
  .main-wrapper {
    flex: 1 1 auto;
  }
  .right-wrapper {
    flex: 0 0 auto;
  }
}
</style>
