<template>
  <div>
    <Pager
      v-on:changeCurrent="handleChangeCurrent"
      :current="current"
      :total="201"
    ></Pager>
  </div>
</template>

<script lang="js">
import Pager from './components/pager.vue'
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
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>
