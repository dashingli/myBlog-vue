import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import style from "./style/reset.less";
import router from "./router/router.js";
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
