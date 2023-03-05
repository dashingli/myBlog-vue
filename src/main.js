import "@/mock";
import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import style from "./style/reset.less";
import router from "./router/router.js";
import animated from "animate.css";
import VueLazyload from "vue-lazyload";
import "./eventBus";
import store from "@/store";

store.dispatch('setting/getDate')
Vue.use(animated);
const loadImage = require('./assets/Runningheart.gif')
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:loadImage,
  attempt:1
});
window.vm = new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount("#app");
