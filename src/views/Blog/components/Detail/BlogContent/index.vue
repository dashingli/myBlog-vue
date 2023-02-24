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
      :commentTotal="commentTotal"
      :commentList="commentList"
      @submit="handleSubmit"
    ></MessageArea>
    <img v-if="isLoading" src="../../../../../assets/loading.svg">
  </div>
</template>

<script lang="js">
import 'github-markdown-css/github-markdown-light.css';
import 'highlight.js/styles/nord.css'
import dateFormat from '@/utils/dateFormat.js';
import MessageArea from '@/components/MessageArea';
import {getComments} from '@/api/blog.js';
import deBounce from "@/utils/deBounce";
export default {
  methods:{
    handleSubmit(comment){
      this.commentList.unshift(comment);
      this.commentTotal++;
    },
    dateFormat,
    handleScroll(){
      this.$bus.$emit('mainScroll',this.$refs.container);
    },
   async getNewComments(){
      if(this.page >= this.totalPages){
        return;
      }
      this.isLoading = true;
      this.page++
      const res = await getComments(this.page,this.limit,this.$route.params.id);
      const data = res.data;
      this.commentList =  this.commentList.concat(data.rows);
      this.commentTotal = data.total;
      this.isLoading = false
    },
    scrollEnd(){
      const dom = this.$refs.container
      const scrollTop = Math.ceil(dom.scrollTop);
      const clientHeight = Math.ceil(dom.clientHeight);
      const scrollHeight = Math.ceil(dom.scrollHeight);
      if(scrollTop + clientHeight === scrollHeight){
        console.log(2)
        this.getNewComments()
      }
    }
  },
  computed:{
    totalPages(){
     return  Math.ceil(this.commentTotal / this.limit)
    }
  },
  async created(){
    const res = await getComments(this.page,this.limit,this.$route.params.id);
    const data = res.data;
    this.commentList = data.rows;
    this.commentTotal = data.total;
    window.getNewComments = this.getNewComments
  },

  mounted(){
    this.setDeBounce =  deBounce(this.handleScroll,50)
    this.$refs.container.addEventListener('scroll',this.scrollEnd)
    this.$refs.container.addEventListener('scroll',this.setDeBounce)
  },
  destroyed(){
    this.$refs.container.removeEventListener('scroll',this.scrollEnd)
    this.$refs.container.removeEventListener('scroll',this.setDeBounce);
  },
  data(){
    return {
      commentTotal:0,
      commentList:[],
      page:1,
      limit:10,
      isLoading:false,
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
  position: relative;
  img{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  span {
    font-size: 12px;
    padding-right: 20px;
  }
  .main-content-wrapper {
    margin-top: 20px;
  }
}
</style>
