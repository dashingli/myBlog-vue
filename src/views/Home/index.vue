<template>
  <div class="home-wrapper" ref="homeWrapper">
    <div class="banner-wrapper">
      <div
        v-for="(bannerItem, i) in bannerList"
        :key="i"
        class="banner-item"
        :style="{ marginTop: i === 0 ? `${caculMarginTop}px` : '0px' }"
      >
        <div
          class="title-wrapper"
          :style="{
            top: i * wrapperHeight + wrapperHeight / 2 + 'px',
          }"
        >
          <h1 ref="titleRef">
            {{ bannerItem.title }}
          </h1>
          <h2 ref="desc">{{ bannerItem.description }}</h2>
        </div>

        <ImageLoader
          :src="bannerItem.bigImg"
          :placeholder="bannerItem.midImg"
          class="image-loader"
        ></ImageLoader>
      </div>
    </div>
    <div
      class="uparrow-wrapper"
      v-show="index > 1"
      @click="indexChanged(index - 1)"
    >
      <Icon name="arrowUp"></Icon>
    </div>
    <div
      class="arrowdown-wrapper"
      v-show="index < bannerList.length"
      @click="indexChanged(index + 1)"
    >
      <Icon name="arrowDown"></Icon>
    </div>
    <div class="index-wrapper">
      <ul @transitionend="handleTransitionEnd">
        <li
          v-for="(banner, i) in bannerList"
          :key="banner.id"
          :class="{ active: i === index - 1 }"
          @click="indexChanged(i + 1)"
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
import ImageLoader from '@/components/ImageLoader'
export default {
  computed:{
    caculMarginTop(){
      return -((this.index - 1) * this.wrapperHeight)
    }
  },
  mounted(){
    console.log(this.$refs.titleRef)
    console.log(this.$refs)
    this.wrapperHeight = this.$refs.homeWrapper.clientHeight;
    window.addEventListener('wheel',this.wheelChanged);
    window.addEventListener('resize',this.resizeChanged);
  },
  destroyed(){
    window.removeEventListener('wheel',this.wheelChanged);
  },
  data(){
      return {
        //Message组件相关
        isMessage : false,//Message组件是否显示
        duration:1000,//Message组件显示多久
        mesType : 'success',//Messagea组件是什么类型的  'success' | 'error' | 'warn' | 'info'
        msgContent:'获取消息成功',//Message组件消息内容
        //banner API 返回的data数据
        bannerList:[],
        //index 表示展示的是第几个数据
        index:1,
        //当前组件容器高度
        wrapperHeight:0,
        //是否正处于滚动中
        isWheel : false,
        //marginTop
        marginTop:0,
        //title宽度
        titleWidth:0,
      }
    },
    methods:{
      wheelChanged(event){
        if(this.isWheel){
          return;
        }
        if(event.deltaY < -5 && this.index >1){
          this.isWheel = true;
          this.index = this.index - 1;
        }else if(event.deltaY > 5 && this.index < this.bannerList.length){
          this.isWheel = true;
          this.index = this.index + 1;
        }
      },
      handleTransitionEnd(){
        this.isWheel = false;
      },
      indexChanged(val){
        this.index = val
      },
      resizeChanged(){
      this.wrapperHeight =  this.$refs.homeWrapper.clientHeight;
    }
    },
  components:{
    Message,
    Icon,
    ImageLoader
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
  overflow: hidden;
  @iconFontSize: 2em;
  .banner-wrapper {
    position: relative;
    .title-wrapper {
      position: absolute;
      transform: translateY(-50%);
      z-index: 999;
      color: #fff;
      margin-left: 20px;
      @fontWeight: 400;
      h1 {
        font-weight: @fontWeight;
        margin-bottom: 10px;
      }
      h2 {
        font-weight: @fontWeight;
        font-size: 19px;
        letter-spacing: 5px;
      }
    }
    .banner-item {
      width: 100%;
      height: 100%;
      transition: margin-top 0.5s linear;
      .image-loader {
        display: block;
        width: 100%;
        height: 100vh;
      }
    }
  }
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
      transition: background-color 1000ms linear;
    }
  }
  @animationDuration: 5000ms;
  .uparrow-wrapper {
    position: absolute;
    cursor: pointer;
    left: 50%;
    top: 15px;
    color: @gray;
    font-size: @iconFontSize;
    transform: translateX(-50%);
    animation: uparrow @animationDuration infinite;
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
    animation: arrowdown @animationDuration infinite;
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
