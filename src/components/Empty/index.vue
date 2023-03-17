<template>
  <div class="empty-text-wrapper">
    <Icon name="empty"></Icon>
    <span>{{ text }}</span>
  </div>
</template>

<script lang="js">
import Icon from '@/components/Icon'
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            default:'无数据',
        }
    }
}
</script>

<style lang="less" scoped>
.empty-text-wrapper {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%);
}
.iconfont {
  font-size: 6em;
  color: gray;
}
</style>
