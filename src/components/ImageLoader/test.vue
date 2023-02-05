<template>
  <div class="test-wrapper">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      v-on:handleImage="handleImage"
    ></ImageLoader>
  </div>
</template>

<script lang="js">
import ImageLoader from '@/components/ImageLoader';
export default {
  components:{
    ImageLoader
  },
  methods:{
    handleImage(){
      console.log("完成");
    }
  }
}
</script>

<style lang="less" scoped></style>
