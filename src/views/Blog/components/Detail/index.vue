<template>
  <div class="detail-wrapper" ref="container">
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
    },
    setSelect(){
      this.activeAnchor = ''
      const range = 200
      for(const dom of this.doms){
        if(!dom){
          continue;
        }
        const distance = dom.getBoundingClientRect().top
        if(distance <= range && distance > 0){
          this.activeAnchor = dom.id
          return
        }else if(distance > range){
          return;
        }else{
          this.activeAnchor = dom.id
        }
      }
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
    },
    doms(){
      const doms = [];
      const getDoms = (toc) => {
        for(const it of toc){
          doms.push(document.querySelector(`#${it.anchor}`))
          if(it.children && it.children.length>0){
            getDoms(it.children)
          }
        }
      }
      getDoms(this.data.toc);
      return doms;
    }
  },
  async created(){
    const id = this.$route.params.id;
    const res = await getOneBlog(id);
    const data = res.data;
    this.data = res.data;
  console.log("data",data)
  this.$bus.$on('mainScroll',this.setSelect)
  },
}
</script>

<style lang="less" scoped></style>
