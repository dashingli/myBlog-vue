<template>
  <div class="blogContent-wrapper">
    <h2>{{ data.title }}</h2>
    <span>日期:{{ data.createDate }}</span>
    <span>浏览:{{ data.scanNumber }}</span>
    <span>评论:{{ data.commentNumber }}</span>
    <span>{{ data.category.name }}</span>
    <div class="main-content-wrapper" v-html="data.htmlContent"></div>
  </div>
</template>

<script lang="js">
export default {
  props:{
    data:{
      type:Object,
      required:true
    }
  }
}
</script>

<style lang="less" scoped>
.blogContent-wrapper {
  height: 100vh;
  overflow-y: scroll;
}
</style>
