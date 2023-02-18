<template>
  <div
    class="avater-wrapper"
    :style="{ minWidth: width + 'px', minHeight: width + 'px' }"
  >
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
.avater-wrapper {
  margin-top: 20px;
}
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
