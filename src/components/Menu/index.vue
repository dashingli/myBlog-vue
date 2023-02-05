<template>
  <div class="menu-wrapper">
    <a href="/" :class="{ selected: isSelected('/') }">
      <Icon name="home"></Icon>
      首页
    </a>
    <a href="/blog" :class="{ selected: isSelected('/blog') }">
      <Icon name="blog"></Icon>
      文章
    </a>
    <a href="/about" :class="{ selected: isSelected('/about') }">
      <Icon name="about"></Icon>
      关于我
    </a>
    <a href="/project" :class="{ selected: isSelected('/project') }">
      <Icon name="code"></Icon>
      项目&效果
    </a>
    <a href="/message" :class="{ selected: isSelected('/message') }">
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
    },
    methods: {
        isSelected(local){
            if(local === window.location.pathname){
                return true;
            }
            return false;
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-wrapper {
  display: inline-flex;
  flex-direction: column;
  border-color: transparent;
  .selected {
    background-color: @gray;
    color: white;
  }
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
