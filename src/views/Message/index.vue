<template>
  <div class="message-wrapper">
    <MessageArea :commentTotal="10" title="留言板"></MessageArea>
  </div>
</template>

<script lang="js">
import MessageArea from "@/components/MessageArea/index.vue";

export default {
  components:{
    MessageArea
  }
}
</script>

<style lang="less" scoped></style>
