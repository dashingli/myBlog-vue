<template>
  <div class="home-wrapper">
    <div>首页</div>
    <ul v-for="bannerItem in bannerList" :key="bannerItem.id">
      <li>
        <h1>{{ bannerItem.title }}</h1>
        <h2>{{ bannerItem.description }}</h2>
        <img :src="bannerItem.midImg" />
        <img :src="bannerItem.midImg" />
      </li>
    </ul>
    <Message
      :isShow="isMessage"
      :duration="duration"
      :mesType="mesType"
      :msgContent="msgContent"
    ></Message>
    <button @click="showMsg">发送</button>
  </div>
</template>

<script lang="js">
import Message from '@/components/Message'
import "@/mock";
import {getBanner} from '@/api/banner.js'
export default {
  data(){
      return {
        isMessage : false,
        duration:1000,
        mesType : 'success',
        msgContent:'获取消息成功',
        bannerList:null
      }
    },
  components:{
    Message
  },
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

  methods:{
       showMsg(){
            this.isMessage = true
            setTimeout(()=>(this.isMessage = false),this.duration)
        }
    }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  position: relative;
  height: 100vh;
  overflow: auto;
}
</style>
