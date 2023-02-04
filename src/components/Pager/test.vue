<template>
  <div class="pager-wrapper">
    <Pager
      v-on:changeCurrent="handleChangeCurrent"
      v-on:changeJump="handleChangeJump"
      :current="current"
      :total="200"
      :pageTotal="10"
    ></Pager>
  </div>
</template>

<script lang="js">
import Pager from '@/components/Pager';
import "@/style/reset.less";
import "@/style/var.less";
export default {
    components:{
        Pager
    },
    data(){
    return {
      current:1
    }
  },
    methods:{
    handleChangeCurrent(val){
      this.current = val;
    },
    handleChangeJump(val){
      this.current = val;
    }
  }
}
</script>

<style lang="less" scoped></style>
