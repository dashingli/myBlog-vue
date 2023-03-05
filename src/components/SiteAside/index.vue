<template>
  <div class="site-aside-wrapper">
    <Avater :url="$store.state.setting.data.avatar"></Avater>

    <span
      :style="{
        color: '#b4b8bc',
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '1.1em',
      }"
      >{{$store.state.setting.data.siteTitle}}</span
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
