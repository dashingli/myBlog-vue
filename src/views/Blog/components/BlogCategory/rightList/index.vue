<template>
  <div class="rightList-wrapper">
    <ul>
      <li v-for="(item, i) in dataList" :key="i">
        <span
          class="name-item"
          :class="{ select: item.select }"
          @click="handleClick(item)"
          >{{ item.name }}</span
        >
        <span
          v-if="item.aside"
          class="aside-item"
          :class="{ select: item.select }"
          @click="handleClick(item)"
        >
          {{ item.aside }}
        </span>
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
  width: 300px;
}
ul {
  list-style: none;
  cursor: pointer;
  li {
    padding-top: 20px;
  }
  .name-item {
    font-size: 14px;
  }
  .aside-item {
    font-size: 12px;
    color: @gray;
    margin-left: 1em;
  }
  .select {
    color: @warn;
    font-weight: bold;
  }
}
</style>
