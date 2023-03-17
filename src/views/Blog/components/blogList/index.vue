<template>
  <div class="blogList-wrapper" ref="wrapper">
    <ul>
      <li v-for="blog in blogList.data.rows" :key="blog.id">
        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }"
          ><div class="image-items-wrapper">
          <img v-if="blog.thumb !== null" v-lazy="blog.thumb" alt=""
          />
        </div>
         </router-link>
        <div class="title-wrapper">
          <router-link
            :to="{ name: 'BlogDetail', params: { id: blog.id } }"
            active-class="active-link"
          >
            <h2>
              {{ blog.title }}
            </h2>
          </router-link>
          <div class="content-wrapper">
            <span>日期：{{ getDate(blog.createDate) }}</span>
            <span>浏览：{{ blog.scanNumber }}</span>
            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }"
              ><span>评论：{{ blog.commentNumber }}</span></router-link
            >
            <span>{{ blog.category.name }}</span>
          </div>
          <p>
            {{ blog.description }}
          </p>
        </div>
      </li>
      <Pager
        v-if="blogList.data.rows.length !== 0"
        :current="routeInfo.page"
        :total="blogList.data.total"
        v-on:changeCurrent="handleChangeCurrent"
        v-on:changeJump="handleChangeJump"
      ></Pager>
    </ul>
    <Empty v-if="blogList.data.rows.length === 0 && isLoading === false" />
    <img class="loading" v-show="isLoading" src="@/assets/loading.svg" alt="" />
    <Top v-show="isTop"></Top>
  </div>
</template>

<script lang="js">
import {getBlog} from '@/api/blog.js';
import Pager from '@/components/Pager';
import Top from "@/components/Top/index.vue";
import TopMixin from '@/mixin/Top'
import Empty from "@/components/Empty/index.vue";
export default {
  mixins:[TopMixin()],
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
    Pager,
    Top,
    Empty
  },
  data(){
    return{
      isLoading:true,
      blogList:{data:{rows:[],total:0}},
    }
  },
  watch:{
    async $route(){
      this.$refs.wrapper.scrollTop = 0;
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
  },

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.active-link {
  color: @primary;
}
.blogList-wrapper {
  overflow: scroll;
  height: 100vh;
  position: relative;
  scroll-behavior: smooth;
  .image-items-wrapper{
    width: 250px;
    height: 150px;
    position: relative;
    img[lazy="loading"]{
      border-radius:5px;
      position: absolute;
      width: 200px;
      height: 150px;
      left:50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      position: absolute;
      left:50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

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

    .title-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        color: @words;
        &:hover {
          color: @warn;
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
