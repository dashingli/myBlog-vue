<template>
  <div class="message-wrapper" ref="wrapper">
    <MessageArea
        v-if="commentList.length !== 0"
        :commentTotal="commentTotal"
        :commentList="commentList"
        @submit="handleSubmit"
       title="留言板" :type="2"></MessageArea>
    <img v-if="isLoading" src="../../../src/assets/loading.svg">
    <Top v-show="isTop"></Top>
  </div>
</template>

<script lang="js">
import MessageArea from "@/components/MessageArea/index.vue";
import {getMsg} from "@/api/message";
import Top from "@/components/Top/index.vue";
import deBounce from "@/utils/deBounce";
import mixinsTop from "@/mixin/Top";

export default {
  mixins:[mixinsTop()],
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
    MessageArea,
    Top
  },
  computed:{
    totalPages(){
      return  Math.ceil(this.commentTotal / this.limit)
    }
  },
  methods:{
    handleSubmit(comment){
      this.commentList.unshift(comment);
      this.commentTotal++;
    },
    handleScroll(){
      this.$bus.$emit('mainScroll',this.$refs.wrapper);
    },
    async getNewComments(){
      if(this.page >= this.totalPages){
        return;
      }
      this.isLoading = true;
      this.page++
      const res = await getMsg(this.page,this.limit,this.$route.params.id);
      const data = res.data;
      this.commentList =  this.commentList.concat(data.rows);
      this.commentTotal = data.total;
      this.isLoading = false
    },
    scrollEnd(){
      const dom = this.$refs.wrapper
      const scrollTop = Math.ceil(dom.scrollTop);
      const clientHeight = Math.ceil(dom.clientHeight);
      const scrollHeight = Math.ceil(dom.scrollHeight);
      if(scrollTop + clientHeight === scrollHeight){
        this.getNewComments()
      }
    },
  },
  async created(){
    const res = await getMsg(this.page,this.limit,this.$route.params.id);
    const data = res.data;
    this.commentList = data.rows;
    this.commentTotal = data.total;
    window.getNewComments = this.getNewComments
  },
  mounted(){
    this.setDeBounce =  deBounce(this.handleScroll,50)
    this.$refs.wrapper.addEventListener('scroll',this.scrollEnd)
    this.$refs.wrapper.addEventListener('scroll',this.setDeBounce)
  },
  beforeDestroy(){
    this.$refs.wrapper.removeEventListener('scroll',this.scrollEnd)
    this.$refs.wrapper.removeEventListener('scroll',this.setDeBounce);
  },
}
</script>

<style lang="less" scoped>
.message-wrapper{
  padding:50px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
  position: relative;
  img{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
}
</style>
