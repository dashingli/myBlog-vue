<template>
  <div class="pager-wrapper">
    {{ "总页数" + calculatePage }}
    {{ "当前页码" + current }}
    {{ "最小页数" + visibleMin }}
    {{ "最大页数" + visibleMax }}
    <a @click="changeCurrent(1)" :class="{ disabled: current === 1 }">首页</a>
    <a @click="changeCurrent(current - 1)" :class="{ disabled: current === 1 }"
      >上一页</a
    >
    <a
      @click="changeCurrent(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="changeCurrent(current + 1)"
      :class="{ disabled: current === calculatePage }"
      >下一页</a
    >
    <a
      @click="changeCurrent(calculatePage)"
      :class="{ disabled: current === calculatePage }"
      >末尾</a
    >
  </div>
</template>

<script lang="js">
export default {
    props:{
        //当前页码
        current:{
            type:Number,
            required:true
        },
        //信息总数量
        total:{
            type:Number,
            required:true
        },
        //每页数量
        pageTotal:{
            type:Number,
            default:10
        }
    },
    computed:{
        //计算总页数
        calculatePage(){
            return Math.ceil(this.total / this.pageTotal);
        },
        //得到显示最小页数
        visibleMin(){
            let min = this.current - Math.ceil(this.pageTotal/2);
            if(min < 1){
                min = 1
            }
            return min;
        },
        //得到显示最大页数
        visibleMax(){
            let max = this.visibleMin + this.pageTotal -1;
            if(max > this.calculatePage){
                max = this.calculatePage;
            }
            return max;
        },
        //展示页数
        numbers(){
            let list = [];
            for(let i = this.visibleMin;i <= this.visibleMax;i++){
                list.push(i);
            }
            return list;
        }
    },
    methods:{
        changeCurrent(currentNumber){
            if(currentNumber === 0){
                return
            }
            if(currentNumber > this.calculatePage){
                return
            }
            if(currentNumber === this.current){
                return
            }
            this.$emit('changeCurrent', currentNumber)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-wrapper {
  display: flex;
  justify-content: center;
}
a {
  padding: 5px;
}
.active {
  color: @dark;
  font-weight: bold;
  cursor: default;
}
.disabled {
  color: @gray;
  cursor: not-allowed;
}
</style>
