<template>
  <div class="message-area-wrapper">
    <div class="form-wrapper"><Form></Form></div>
    <div class="comment-list-wrapper"><CommentList></CommentList></div>
  </div>
</template>

<script lang="js">
import Form from './Form/form.vue'
import CommentList from './CommentList/CommentList.vue'
export default {
  components:{
    Form,
    CommentList
  }
}
</script>

<style lang="less" scoped></style>
