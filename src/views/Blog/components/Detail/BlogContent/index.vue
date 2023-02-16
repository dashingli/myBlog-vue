<template>
  <div class="blogContent-wrapper markdown-body">
    <h2>{{ data.title }}</h2>
    <span>日期:{{ data.createDate }}</span>
    <span>浏览:{{ data.scanNumber }}</span>
    <span>评论:{{ data.commentNumber }}</span>
    <span>{{ data.category.name }}</span>
    <div class="main-content-wrapper" v-html="data.htmlContent"></div>
  </div>
</template>

<script lang="js">
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/nord.css'
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
  margin-top: 20px;
  margin-left: 20px;
  scroll-behavior: smooth;
  span {
    font-size: 12px;
    padding-right: 20px;
  }
  .main-content-wrapper {
    margin-top: 20px;
  }
}
</style>
