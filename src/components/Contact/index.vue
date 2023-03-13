<template>
  <div class="Contact-wrapper">
    <a :href="$store.state.setting.data.github" target="_blank">
      <Icon name="github"></Icon>
      <span class="font">{{$store.state.setting.data.githubName}}</span>
    </a>
    <a :href="`mailto:${$store.state.setting.data.mail}`">
      <Icon name="mail"></Icon>
      <span class="font">{{$store.state.setting.data.mail}}</span>
    </a>
    <a>
      <Icon name="qq"></Icon>
      <span class="font">{{$store.state.setting.data.qq}}</span>
      <div class="img-wrapper">
        <img :src="$store.state.setting.data.qqQrCode" alt="" />
      </div>
    </a>
    <a>
      <Icon name="weixin"></Icon>
      <span class="font">{{$store.state.setting.data.weixin}}</span>
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
  .font{
    display: inline-block;
    color: @gray;
    font-size:15px;
  }
}
a {
  display: flex;
  gap: 10px;
  align-items: center;
  color: @gray;
  position: relative;
  font-size: 2em;
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
