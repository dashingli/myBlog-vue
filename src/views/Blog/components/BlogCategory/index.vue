<template>
  <div class="BlogCategory-wrapper">
    <h2>文章分类</h2>
    <rightList :dataList="dataList.data"></rightList>
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
    data(){
        return {
            dataList:[],
            isLoading:true,
        }
    },
    components:{
        rightList
    },
    async created(){
        this.dataList = await getBlogType();
        this.isLoading = false;
    }
}
</script>

<style lang="less" scoped>
.BlogCategory-wrapper {
  width: 300px;
  height: 100vh;
  overflow: scroll;
  position: relative;
  .loading-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
