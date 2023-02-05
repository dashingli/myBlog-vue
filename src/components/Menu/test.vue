<template>
  <div class="test-wrapper">
    <Menu></Menu>
  </div>
</template>

<script lang="js">
import Menu from '@/components/Menu'
export default {
    components:{
        Menu
    }
}
</script>

<style lang="less" scoped>
.test-wrapper {
  display: inline-block;
  background-color: black;
}
</style>
