<template>
  <div class="detail-wrapper">
    <Layout>
      <template #main>
        <BlogContent
          :data="data"
          v-if="Object.keys(data).length !== 0"
        ></BlogContent>
      </template>
      <template #right>
        <rightList
          :dataList="selectMap"
          v-if="Object.keys(data).length !== 0"
          @handleClick="handleClick"
        ></rightList>
      </template>
    </Layout>
  </div>
</template>

<script lang="js">
import Layout from '@/components/Layout';
import BlogContent from './BlogContent';
import rightList from '../BlogCategory/rightList'
import {getOneBlog} from '@/api/blog.js'
export default {
  components:{
    Layout,
    BlogContent,
    rightList,
  },
  data(){
    return{
      data:{},
      activeAnchor:''
    }
  },
  methods:{
    handleClick(item){
      location.hash = item.anchor
      this.activeAnchor = item.anchor
      console.log("item",item);
    }
  },
  computed:{
    selectMap(){
      // const self = this;
      const getToc = (toc = []) => {
        console.log('this',this);
       return toc.map(it=>({...it,select:it.anchor === this.activeAnchor,children:getToc(it.children)}))
      }
      return getToc(this.data.toc);
    }
  },
  async created(){
    const id = this.$route.params.id;
    const res = await getOneBlog(id);
    const data = res.data;
    this.data = res.data;
  console.log("data",data)
  }
}
</script>

<style lang="less" scoped></style>
