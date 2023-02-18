<template>
  <div class="comment-list-wrapper">
    <div class="comment-title">
      <span>{{ title }}</span>
      <span>({{ commentTotal }})</span>
    </div>
    <div class="comment" v-for="comment in commentList" :key="comment.id">
      <Avater :url="comment.avatar" :width="50" />
      <div class="comment-conent">
        <div class="name-date-wrapper">
          <div class="name">
            <span>{{ comment.nickname }}</span>
          </div>
          <div class="date">
            <span>{{ dateFormat(comment.createDate, true) }}</span>
          </div>
        </div>
        <div class="comment-main">
          <span>{{ comment.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Avater from '@/components/Avater'
import dateFormat from '@/utils/dateFormat.js'
export default {
  methods:{
    dateFormat
  },
  props:{
    commentList:{
      type:Array,
      default:()=>[]
    },
    title:{
      type:String,
      required:true
    },
    commentTotal:{
      type:Number,
      required:true
    }
  },
  components:{
    Avater
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.comment-title {
  padding-top: 20px;
  > span {
    font-size: 20px;
    font-weight: bold;
  }
}
.comment {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid @gray;
  .comment-conent {
    display: flex;
    gap: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    .comment-main {
      font-size: 14px;
    }
    .name-date-wrapper {
      display: flex;
      justify-content: space-between;
      .name {
        color: @success;
        > span {
          color: inherit;
        }
      }
      .date {
        color: @gray;
        font-size: 12px;
        > span {
          color: inherit;
        }
      }
    }
  }
}
</style>
