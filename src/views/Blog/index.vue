<template>
  <div class="blog-wrapper">
    <Layout>
      <template v-slot:main>
        <div class="main-wrapper">
          <blogList></blogList>
        </div>
      </template>
      <template v-slot:right>
        <div class="right-wrapper">
          <rightList></rightList>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="js">
import Layout from '@/components/Layout'
import rightList from './components/rightList'
import blogList from './components/blogList'
export default {
  components:{
    Layout,
    rightList,
    blogList
  }
}
</script>

<style lang="less" scoped></style>
