<template>
  <div class="image-loader-wrapper">
    <img class="placeholder" v-if="!isEveryThingDone" :src="placeholder" />
    <img
      :src="src"
      :style="{ opacity: isOriginOpt, transition: `${duration}ms` }"
      @load="handleLoad"
    />
  </div>
</template>

<script lang="js">

export default {
  props: {
    src:{
      type:String,
      required:true
    },
    placeholder:{
      type:String,
      required:true
    },
    duration:{
      type:Number,
      default:5000
    }
  },
  data(){
    return{
      isOrigin:false,
      isEveryThingDone:false,
    }
  },
  computed:{
    isOriginOpt(){
      return this.isOrigin?1:0;
    }
  },
  methods:{
    handleLoad(){
      this.isOrigin = true;
      setTimeout(()=>{this.isEveryThingDone = true;this.$emit('handleImage')},this.duration)
    }
  }
}
</script>

<style lang="less" scoped>
.image-loader-wrapper {
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
}
img {
  position: absolute;
  width: 500px;
}
.placeholder {
  filter: blur(5px);
}
</style>
