<template>
  <div class="blogList-wrapper">
    <ul>
      <li v-for="(blog, i) in blogList" :key="i">
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
        :current="current"
        :total="total"
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
  components:{
    Pager
  },
  data(){
    return{
      isLoading:true,
      blogList:[],
      total:0,
      current:1,

    }
  },
  methods:{
    getDate(time){
      const date = new Date(+time);
      const year = date.getFullYear();
      const month = date.getMonth()+1;
      const day = date.getDate();
      return `${year}-${month}-${day}`
    },
    handleChangeCurrent(val){
      this.current = val;
    },
    handleChangeJump(val){
      this.current = val;
    }
  },
  async created(){
    const res = await getBlog();
    this.total = await res.data.total;
    const rows = await res.data.rows;
    this.blogList = rows;
    this.isLoading = false;
    console.log("getBlog",res);
  },

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.blogList-wrapper {
  overflow: scroll;
  height: 100vh;
  position: relative;
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
