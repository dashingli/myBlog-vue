<template>
  <div class="home-wrapper">
    <div>首页</div>
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
        msgContent:'获取消息成功'
      }
    },
  components:{
    Message
  },
  methods:{
        async showMsg(){
            const res = await getBanner();
            console.log(res);
            if(res === false){
              this.mesType = 'error';
              this.msgContent = '消息获取失败'
            }
            this.isMessage = true
            setTimeout(()=>(this.isMessage = false),this.duration)
        }
    }
}
</script>

<style lang="less" scoped>
.home-wrapper {
  position: relative;
}
</style>
