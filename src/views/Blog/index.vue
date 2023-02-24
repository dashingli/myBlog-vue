<template>
  <div class="blog-wrapper" >
    <Layout>
      <template v-slot:main>
        <div class="main-wrapper" ref="blogWrapper">
          <blogList></blogList>
        </div>
      </template>
      <template v-slot:right>
        <div class="right-wrapper">
          <BlogCategory></BlogCategory>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="js">
import Layout from '@/components/Layout'
import BlogCategory from './components/BlogCategory'
import blogList from './components/blogList'
export default {
  components:{
    Layout,
    BlogCategory,
    blogList,
  },
}
</script>

<style lang="less" scoped></style>
