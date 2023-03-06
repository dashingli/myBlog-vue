<template>
  <div class="about-wrapper" v-loading="isLoading">
    <iframe class="iframe-wrapper" @load="isLoading=false" v-if="$store.state.about.src" :src="$store.state.about.src">

    </iframe>
  </div>
</template>

<script lang="js">
import LoadingUrl from "@/assets/loading.svg";

export default {
  data(){
    return {
      isLoading:true
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
  async created() {
    console.log("Created")
    await this.$store.dispatch('about/about')
  }
}
</script>

<style lang="less" scoped>
.about-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .iframe-wrapper {
    width: 100%;
    height: 100%;
  }

  :deep(.loading) {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
