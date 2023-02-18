<template>
  <div class="message-area-wrapper">
    <div class="form-wrapper"><Form @submit="handleSubmit"></Form></div>
    <div class="comment-list-wrapper">
      <CommentList
        v-if="commentList.length !== 0"
        :title="title"
        :commentTotal="commentTotal"
        :commentList="commentList"
      ></CommentList>
    </div>
  </div>
</template>

<script lang="js">
import Form from './Form/form.vue'
import CommentList from './CommentList/CommentList.vue'
export default {
  methods:{
    handleSubmit(comment){
      this.$emit('submit',comment);
    }
  },
  components:{
    Form,
    CommentList
  },
  props:{
    commentTotal:{
      type:Number,
      required:true
    },
    commentList:{
      type:Array,
      default:()=>[]
    },
    title:{
      type:String,
      required:true
    }
  },
}
</script>

<style lang="less" scoped></style>
