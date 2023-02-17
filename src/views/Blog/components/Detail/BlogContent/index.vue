<template>
  <div class="blogContent-wrapper markdown-body">
    <h2>{{ data.title }}</h2>
    <span>日期:{{ dateFormat(data.createDate) }}</span>
    <span>浏览:{{ data.scanNumber }}</span>
    <span>评论:{{ data.commentNumber }}</span>
    <span>{{ data.category.name }}</span>
    <div class="main-content-wrapper" v-html="data.htmlContent"></div>
    <MessageArea></MessageArea>
  </div>
</template>

<script lang="js">
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/nord.css'
import dateFormat from '@/utils/dateFormat.js';
import MessageArea from '@/components/MessageArea';
export default {
  components:{
    MessageArea
  },
  props:{
    data:{
      type:Object,
      required:true
    }
  },
  methods:{
    dateFormat
  }
}
</script>

<style lang="less" scoped>
.blogContent-wrapper {
  height: 100vh;
  overflow-y: scroll;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
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
