<template>
  <div class="menu-wrapper">
    <router-link to="/" exact active-class="selected">
      <Icon name="home"></Icon>
      首页
    </router-link>
    <router-link to="/blog" active-class="selected">
      <Icon name="blog"></Icon>
      文章
    </router-link>
    <router-link to="/about" exact active-class="selected">
      <Icon name="about"></Icon>
      关于我
    </router-link>
    <router-link to="/project" exact active-class="selected">
      <Icon name="code"></Icon>
      项目&效果
    </router-link>
    <router-link to="/message" exact active-class="selected">
      <Icon name="chat"></Icon>
      留言
    </router-link>
  </div>
</template>

<script lang="js">
import Icon from '@/components/Icon'
import '@/style/reset.less'
export default {
    components:{
        Icon
    },
    // methods: {
    //     isSelected(local){
    //         if(local === window.location.pathname){
    //             return true;
    //         }
    //         return false;
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-wrapper {
  display: inline-flex;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
  border-color: transparent;
  .selected {
    background-color: @gray;
    color: white;
  }
  a {
    padding: 10px 40px 10px 20px;
    color: @gray;
    text-align: center;
    &:hover {
      background-color: @gray;
      color: white;
    }
  }
}
</style>
