<template>
  <div>
    <img
      :src="url"
      class="avatar-img"
      :style="{ width: width + 'px', height: width + 'px' }"
    />
  </div>
</template>

<script lang="js">
export default {
  props:{
    url:{
        type:String,
        require:true,
    },
    width:{
        type:Number,
        default:150
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
