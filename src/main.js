import "@/mock";
import Vue from "vue";
import App from "./App.vue";
// eslint-disable-next-line no-unused-vars
import style from "./style/reset.less";
import router from "./router/router.js";
import animated from "animate.css";
// /**
//  * 测试api
//  */
// import { getBlogType } from "@/api/blog.js";
// async function getBlogTypeTest() {
//   const res = await getBlogType();
//   console.log(res);
// }
// getBlogTypeTest();
// import { getBlog } from "@/api/blog.js";
// async function getBlogTest() {
//   const res = await getBlog();
//   console.log(res);
// }
// getBlogTest();
Vue.use(animated);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
