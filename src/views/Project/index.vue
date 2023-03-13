<template>
  <div class="project-wrapper" ref="wrapper" v-loading="isLoading">
    <ul class="list-wrapper">
      <li  v-for="i in $store.state.demo.data" :key="i.id" class="item-wrapper">
        <a class="img-wrapper">
          <img v-if="i.thumb !== null" v-lazy="i.thumb">
        </a>
        <div class="desc-wrapper">
          <h2> {{i.name}}</h2>
          <a v-if="i.github !== null" :href="i.github">github</a>
          <p v-for="(j,index) in i.description" :key="index.id">{{j}}</p>
        </div>
      </li>
    </ul>
    <Top v-if="isTop"></Top>
  </div>
</template>

<script lang="js">
import LoadingUrl from "@/assets/loading.svg";
import TopMixin from "@/mixin/Top";
import Top from "@/components/Top/index.vue";
export default {
  mixins:[TopMixin()],
  created() {
    this.$store.dispatch('demo/getDate')
  },
  components:{
    Top
  },
  computed:{
    isLoading() {
      return this.$store.state.demo.isLoading
    }
  },
  directives: {
    loading: {
      bind: function (el, binding) {
        if (binding.value) {
          const img = document.createElement("img");
          img.src = LoadingUrl;
          img.className = "loading";
          el.appendChild(img);
        }
      },
      update: function (el, binding) {
        if (!binding.value) {
          const img = document.querySelector('.loading');
          if (img) {
            img.remove();
          }

        }
      }

    }
  },
}
</script>

<style lang="less" scoped>
.project-wrapper{
  box-sizing: border-box;
  height: 100vh;
  overflow: scroll;
  position: relative;
  scroll-behavior:smooth;
  :deep(.loading) {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
  .list-wrapper{
    overflow: scroll;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-right: 40px;
    gap:20px;
    .item-wrapper{
      padding:20px;
      display: flex;
      gap:20px;
      flex-direction: row;
      transition: all .3s linear;
      &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .desc-wrapper{
        display: flex;
        flex-direction: column;
        gap:20px;
      }
      .img-wrapper{
        width: 250px;
        height: 200px;
        overflow: hidden;
        flex-shrink: 0;
        >img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

}

</style>
