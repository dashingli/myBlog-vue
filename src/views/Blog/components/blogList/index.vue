<template>
  <div class="blogList-wrapper" ref="blogWrapper">
    <ul>
      <li v-for="blog in blogList.data.rows" :key="blog.id">
        <img v-if="blog.thumb !== null" :src="blog.thumb" alt="" />
        <div class="title-wrapper">
          <h2>
            {{ blog.title }}
          </h2>
          <div class="content-wrapper">
            <span>日期：{{ getDate(blog.createDate) }}</span>
            <span>浏览：{{ blog.scanNumber }}</span>
            <span>评论：{{ blog.commentNumber }}</span>
            <span>{{ blog.category.name }}</span>
          </div>
          <p>
            {{ blog.description }}
          </p>
        </div>
      </li>
      <Pager
        v-if="blogList.data.total !== 0"
        :current="routeInfo.page"
        :total="blogList.data.total"
        v-on:changeCurrent="handleChangeCurrent"
        v-on:changeJump="handleChangeJump"
      ></Pager>
    </ul>
    <img class="loading" v-show="isLoading" src="@/assets/loading.svg" alt="" />
  </div>
</template>

<script lang="js">
import {getBlog} from '@/api/blog.js';
import Pager from '@/components/Pager';
export default {
  computed:{
    routeInfo(){
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId,
      }
    }
  },
  components:{
    Pager
  },
  data(){
    return{
      isLoading:true,
      blogList:{data:{rows:[],total:0}},
    }
  },
  watch:{
    async $route(){
      this.$refs.blogWrapper.scrollTop = 0;
      this.isLoading = true;
    this.blogList = await getBlog(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);
      this.isLoading = false;
    }
  },
  methods:{
    getDate(time){
      const date = new Date(+time);
      const year = date.getFullYear();
      const month = (date.getMonth()+1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`
    },
    handleChangeCurrent(newPage){
      const query = {
        page:newPage,
        limit:this.routeInfo.limit,
      }
      if(this.routeInfo.categoryId === -1){
        this.$router.push({name: 'blog',query})
      }else{
        this.$router.push({name:'blogCategory',params:{
          categoryId:this.routeInfo.categoryId
        },query})
      }
    },
    handleChangeJump(newPage){
      const query = {
        page:newPage,
        limit:this.routeInfo.limit,
      }
      if(this.routeInfo.categoryId === -1){
        this.$router.push({name: 'blog',query})
      }else{
        this.$router.push({name:'blogCategory',params:{
          categoryId:this.routeInfo.categoryId
        },query})
      }
    }
  },
  async created(){
    this.blogList  = await getBlog(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);

    this.isLoading = false;
    console.log("getBlog", this.blogList);
    console.log(this.$route);
  },

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.blogList-wrapper {
  overflow: scroll;
  height: 100vh;
  position: relative;
  scroll-behavior: smooth;
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  li {
    display: flex;
    border-bottom: 2px solid @gray;
    padding: 10px;
    align-items: center;
    gap: 10px;
    line-height: 1.7;
    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        cursor: pointer;
        display: contents;
        &:hover {
          color: @primary;
        }
      }
      span {
        color: @gray;
        font-size: 12px;
        padding-right: 10px;
      }
    }
    p {
      font-size: 14px;
    }
  }
}
</style>
