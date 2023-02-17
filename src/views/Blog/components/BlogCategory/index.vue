<template>
  <div class="BlogCategory-wrapper">
    <h2>文章分类</h2>
    <rightList :dataList="list" @handleClick="handleClick"></rightList>
    <img
      class="loading-img"
      v-show="isLoading"
      src="../../../../assets/loading.svg"
      alt=""
    />
  </div>
</template>

<script lang="js">
import rightList from './rightList'
import {getBlogType} from '@/api/blog.js'
export default {
  methods:{
    handleClick(item){
      if(this.cateId === item.id){
        return;
      }
      const query = {
            page:1,
            limit:this.limit
          }
      if(item.id === -1){
        this.$router.push({
          name:'blog',
          query
        })
      }else{
        this.$router.push({
          name:'blogCategory',
          query,
          params:{
            categoryId:item.id
          }
        })
      }
    }
  },
  computed:{
    cateId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list(){
      const total = this.data.reduce((a,b)=>{return a+b.articleCount},0);
      const result = [{articleCount:total,id:-1,name:"全部文章"},...this.data];
      return result.map((it)=>{return  {select:it.id === this.cateId,aside:`${it.articleCount}篇`,...it}});
    }
  },
    data(){
        return {
            data:[],
            isLoading:true,
        }
    },
    components:{
        rightList
    },
    async created(){
       const res = await getBlogType();
       this.data = res.data;
       console.log(res.data);
        this.isLoading = false;
    }
}
</script>

<style lang="less" scoped>
h2 {
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0;
}
.BlogCategory-wrapper {
  padding: 20px;
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  .loading-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
