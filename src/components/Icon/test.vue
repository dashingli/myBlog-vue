<template>
  <div class="Icon-wrapper">
    <Icon v-for="name in nameMapKeys" :key="name" :name="name"></Icon>
  </div>
</template>

<script lang="js">
import Icon,{nameMapKeys} from '@/components/Icon'
export default {
    components:{
        Icon
    },
    data(){
      return{
        nameMapKeys
      }
    }
}
</script>

<style lang="less" scoped>
.Icon-wrapper {
  display: flex;
  justify-content: center;
  .iconfont {
    //控制icon大小
    font-size: 3em;
    padding: 10px;
  }
}
</style>
