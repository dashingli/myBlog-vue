<template>
  <div class="Contact-wrapper">
    <a :href="$store.state.setting.data.github" target="_blank">
      <Icon name="github"></Icon>
      {{$store.state.setting.data.githubName}}
    </a>
    <a :href="`mailto:${$store.state.setting.data.mail}`">
      <Icon name="mail"></Icon>
      {{$store.state.setting.data.mail}}
    </a>
    <a>
      <Icon name="qq"></Icon>
      {{$store.state.setting.data.qq}}
      <div class="img-wrapper">
        <img :src="$store.state.setting.data.qqQrCode" alt="" />
      </div>
    </a>
    <a>
      <Icon name="weixin"></Icon>
      {{$store.state.setting.data.weixin}}
      <div class="img-wrapper">
        <img :src="$store.state.setting.data.weixinQrCode" alt="" />
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
  gap: 10px;
  margin-bottom: 50px;
  flex-direction: column;
  border-color: transparent;
  margin-top: 40px;
}
a {
  color: @gray;
  position: relative;
  font-size: 1.15em;
  padding-left: 10px;
  padding-right: 50px;
  .img-wrapper {
    display: none;
    transform: scale(0);
  }
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
  }
  &:hover {
    color: @primary;
    .img-wrapper {
      display: block;
      transform: scale(1);
      position: absolute;
      top: -400px;
      left: -30px;
    }
  }
}
</style>
