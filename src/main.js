import "@/mock";
import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import style from "./style/reset.less";
import router from "./router/router.js";
import animated from "animate.css";
Vue.use(animated);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
