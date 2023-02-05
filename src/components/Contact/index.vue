<template>
  <div class="Contact-wrapper">
    <a href="https://github.com/dashingli?tab=repositories" target="_blank">
      <Icon name="github"></Icon>
      dashingli
    </a>
    <a href="mailto:1120294646@qq.com">
      <Icon name="mail"></Icon>
      1120294646@qq.com
    </a>
    <a>
      <Icon name="qq"></Icon>
      1120294646
      <div class="img-wrapper">
        <img src="../../img/qq.png" alt="" />
      </div>
    </a>
    <a>
      <Icon name="weixin"></Icon>
      lilinzhe123
      <div class="img-wrapper">
        <img src="../../img/weixin.jpg" alt="" />
      </div>
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
.Contact-wrapper {
  border: 1px solid;
  display: inline-flex;
  flex-direction: column;
  border-color: transparent;
}
a {
  color: @gray;
  position: relative;
  font-size: 2em;
  .img-wrapper {
    display: none;
    transform: scale(0);
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  &:hover {
    color: @primary;
    .img-wrapper {
      display: block;
      transform: scale(1);
      position: absolute;
      top: -300px;
      left: -30px;
    }
  }
}
</style>
