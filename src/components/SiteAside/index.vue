<template>
  <div class="site-aside-wrapper">
    <Avater url="https://avatars.githubusercontent.com/u/86763297?v=4"></Avater>
    <span
      :style="{
        color: '#b4b8bc',
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '1.1em',
      }"
      >李林哲的博客</span
    >
    <Menu></Menu>
    <Contact></Contact>
  </div>
</template>

<script lang="js">
import Avater from '@/components/Avater'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
export default {
    components:{
        Avater,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.site-aside-wrapper {
  overflow-x: hidden;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: @dark;
  height: 100vh;
  overflow-y: auto;
}
</style>
