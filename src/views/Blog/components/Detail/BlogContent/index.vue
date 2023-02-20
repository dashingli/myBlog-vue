<template>
  <div class="blogContent-wrapper markdown-body" ref="container">
    <h2>{{ data.title }}</h2>
    <span>日期:{{ dateFormat(data.createDate) }}</span>
    <span>浏览:{{ data.scanNumber }}</span>
    <a href="#commentList"
      ><span>评论:{{ data.commentNumber }}</span></a
    >
    <router-link
      :to="{
        name: 'blogCategory',
        params: {
          categoryId: data.category.id,
        },
      }"
      ><span>{{ data.category.name }}</span></router-link
    >
    <div class="main-content-wrapper" v-html="data.htmlContent"></div>
    <MessageArea
      v-if="commentList.length !== 0"
      title="评论列表"
      id="commentList"
      :commentTotal="commentNumber"
      :commentList="commentList"
      @submit="handleSubmit"
    ></MessageArea>
  </div>
</template>

<script lang="js">
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/nord.css'
import dateFormat from '@/utils/dateFormat.js';
import MessageArea from '@/components/MessageArea';
import {getComments} from '@/api/blog.js';
export default {
  methods:{
    handleSubmit(comment){
      console.log(this.commentList);
      console.log(comment);
      this.commentList.unshift(comment);
      this.commentNumber++;
    },
    dateFormat,
    handleScroll(){
      console.log(1)
      this.$bus.$emit('mainScroll',this.$refs.container);
    }
  },
  async created(){
    const res = await getComments(this.page,this.limit,this.$route.params.id);
    const data = res.data;
    this.commentList = data.rows;
    this.commentNumber = data.total;
    console.log('res getComments',res)
  },

  mounted(){
    this.$refs.container.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){
    this.$refs.container.removeEventListener('scroll',this.handleScroll);
  },
  data(){
    return {
      commentTotal:0,
      commentList:[],
      page:1,
      limit:10
    }
  },
  components:{
    MessageArea
  },
  props:{
    data:{
      type:Object,
      required:true
    }
  },
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
