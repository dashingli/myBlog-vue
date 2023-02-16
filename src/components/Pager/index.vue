<template>
  <div class="pager-wrapper">
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
    <div class="jump-wrapper">
      <span>共{{ calculatePage }}页,到第</span>
      <input type="number" :max="calculatePage" :min="1" ref="jumpNumber" />
      <span>页</span>
    </div>
    <a @click="clickJump">跳转</a>
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
        },
        //可见页码数
        visibleNumber:{
          type:Number,
          default:5
        }
    },
    computed:{
        //计算总页数
        calculatePage(){
            return Math.ceil(this.total / this.pageTotal);
        },
        //得到显示最小页数
        visibleMin(){
            let min = this.current - Math.ceil(this.visibleNumber/2);
            if(min < 1){
                min = 1
            }
            return min;
        },
        //得到显示最大页数
        visibleMax(){
            let max = this.visibleMin + this.visibleNumber -1;
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
        },
        clickJump(){
          const jumpNumber = parseInt(this.$refs.jumpNumber.value);
          if(jumpNumber < 1){
            return
          }
          if(jumpNumber > this.calculatePage){
            return
          }
          this.$emit('changeJump', jumpNumber);

        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.pager-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .jump-wrapper {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
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
