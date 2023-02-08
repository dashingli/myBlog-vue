<template>
  <div class="home-wrapper">
    <div class="uparrow-wrapper" v-show="index > 1" @click="uparrowClick">
      <Icon name="arrowUp"></Icon>
    </div>
    <div
      class="arrowdown-wrapper"
      v-show="index < bannerList.length"
      @click="arrowdownClick"
    >
      <Icon name="arrowDown"></Icon>
    </div>
    <div class="index-wrapper">
      <ul>
        <li
          v-for="(banner, i) in bannerList"
          :key="banner.id"
          :class="{ active: i === index - 1 }"
        ></li>
      </ul>
    </div>
    <Message
      :isShow="isMessage"
      :duration="duration"
      :mesType="mesType"
      :msgContent="msgContent"
    ></Message>
  </div>
</template>

<script lang="js">
import Message from '@/components/Message'
import {getBanner} from '@/api/banner.js'
import Icon from '@/components/Icon'
export default {
  data(){
      return {
        //Message组件相关
        isMessage : false,//Message组件是否显示
        duration:1000,//Message组件显示多久
        mesType : 'success',//Messagea组件是什么类型的  'success' | 'error' | 'warn' | 'info'
        msgContent:'获取消息成功',//Message组件消息内容
        //banner API 返回的data数据
        bannerList:null,
        //index 表示展示的是第几个数据
        index:1
      }
    },
    methods:{
      uparrowClick(){
        this.index = this.index -  1;
      },
      arrowdownClick(){
        this.index = this.index + 1;
      }
    },
  components:{
    Message,
    Icon
  },
  //注入前 获取bannerList 判断data.code => 显示消息类型
  async created(){
    const res = await getBanner();
    if(res.code !== 0){
      this.mesType = 'error';
      this.msgContent = '获取消息失败'
    }else{
      this.mesType = 'success';
      this.msgContent = '获取消息成功';
      this.bannerList = res.data;
    }
    this.isMessage = true
    setTimeout(()=>(this.isMessage = false),this.duration)

  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.home-wrapper {
  position: relative;
  height: 100vh;
  overflow: auto;
  @iconFontSize: 2em;
  .index-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    li {
      width: 8px;
      height: 8px;
      border: 1px solid @words;
      margin-bottom: 10px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
    .active {
      background-color: @words;
      border: 1px solid #fff;
    }
  }
  .uparrow-wrapper {
    position: absolute;
    cursor: pointer;
    left: 50%;
    top: 15px;
    color: @gray;
    font-size: @iconFontSize;
    transform: translateX(-50%);
    animation: uparrow 3000ms infinite;
  }
  @keyframes uparrow {
    0% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  .arrowdown-wrapper {
    position: absolute;
    cursor: pointer;
    left: 50%;
    bottom: 15px;
    font-size: @iconFontSize;
    color: @gray;
    transform: translateX(-50%);
    animation: arrowdown 3000ms infinite;
  }
  @keyframes arrowdown {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
}
</style>
