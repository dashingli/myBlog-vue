<template>
  <div class="test-wrapper">
    <Contact></Contact>
  </div>
</template>

<script lang="js">
import Contact from "@/components/Contact"
export default {
    components:{
        Contact
    }
}
</script>

<style lang="less" scoped>
.test-wrapper {
  display: inline-block;
  background-color: black;
  margin-top: 500px;
}
</style>
