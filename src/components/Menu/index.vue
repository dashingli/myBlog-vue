<template>
  <div class="menu-wrapper">
    <a href="/">
      <Icon name="home"></Icon>
      首页
    </a>
    <a href="/blog">
      <Icon name="blog"></Icon>
      文章
    </a>
    <a href="/about">
      <Icon name="about"></Icon>
      关于我
    </a>
    <a href="/project">
      <Icon name="code"></Icon>
      项目&效果
    </a>
    <a href="/message">
      <Icon name="chat"></Icon>
      项目&效果
    </a>
  </div>
</template>

<script lang="js">
import Icon from '@/components/Icon'
import '@/style/reset.less'
export default {
    components:{
        Icon
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-wrapper {
  display: inline-flex;
  flex-direction: column;
  border-color: transparent;
  a {
    padding: 10px 40px 10px 20px;
    color: @gray;
    &:hover {
      background-color: @gray;
      color: white;
    }
  }
}
</style>
