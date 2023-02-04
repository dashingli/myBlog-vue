<template>
  <div class="Empty-wrapper">
    <Empty text="无数据"></Empty>
  </div>
</template>
<script lang="js">
import Empty from '@/components/Empty'
export default {
    components:{
        Empty
    }
}
</script>

<style lang="less" scoped>
.Empty-wrapper {
  display: flex;
  justify-content: center;
}
</style>
