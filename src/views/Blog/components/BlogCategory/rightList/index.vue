<template>
  <div class="rightList-wrapper">
    <ul>
      <li v-for="(item, i) in dataList" :key="i">
        <span :class="{ select: item.select }" @click="handleClick(item)">{{
          item.name
        }}</span>
        <rightList
          :dataList="item.children"
          @handleClick="handleClick"
        ></rightList>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
    name:'rightList',
    methods:{
        handleClick(item){
            this.$emit('handleClick',item);
        }
    },
    props:{
        dataList:{
            type:Array,
            default:()=>([])
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.rightList-wrapper {
  ul {
    list-style: none;
    line-height: 40px;
    padding: 0;
    margin-left: 20px;
    cursor: pointer;
    .select {
      color: @warn;
    }
  }
}
</style>
