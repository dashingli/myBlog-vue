<template>
  <div class="test-wrapper">
    <Message
      mesType="success"
      :isShow="isMessage"
      :duration="duration"
    ></Message>
    <button @click="showMsg">发送</button>
  </div>
</template>

<script lang="js">
import Message from '@/components/Message'
export default {
    data(){
      return {
        isMessage : false,
        duration:5000
      }
    },
    components: {
        Message
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
.test-wrapper {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  position: relative;
}
</style>
