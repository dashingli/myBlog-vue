<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div
        v-if="isShow"
        class="message-wrapper"
        :class="{
          success: msgSucStyle,
          info: msgInfoStyle,
          warn: msgWarnStyle,
          error: msgErrorStyle,
        }"
      >
        <Icon :name="mesType"></Icon>
        <span>{{ msgContent }}</span>
      </div>
    </transition>
  </div>
</template>

<script lang="js">
import Icon from '@/components/Icon'
export default {
    props:{
        mesType:{
            type:String,
            default:'success'
        },
        msgContent:{
            type:String,
            default:'消息成功'
        },
        duration:{
            type:Number,
            required:true
        },
        isShow:{
            type:Boolean,
        }
    },
    computed:{
        msgSucStyle(){
            if(this.mesType === 'success'){
                return true;
            }else{
                return false;
            }
        },
        msgInfoStyle(){
            if(this.mesType === 'info'){
                return true;
            }else{
                return false;
            }
        },
        msgWarnStyle(){
            if(this.mesType === 'warn'){
                return true;
            }else{
                return false;
            }
        },
        msgErrorStyle(){
            if(this.mesType === 'error'){
                return true;
            }else{
                return false;
            }
        }
    },
    components:{
      Icon
    }
}
</script>

<style lang="less" scoped>
.message-wrapper {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}
.success {
  background-color: green;
}
.info {
  background-color: yellow;
}
.warn {
  background-color: chocolate;
}
.error {
  background-color: red;
}
</style>
