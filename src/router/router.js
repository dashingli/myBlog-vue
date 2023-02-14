import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Blog from "../views/Blog";
import About from "../views/About";
import Message from "../views/Message";
import Project from "../views/Project";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog/category/:categoryId",
    name: "blogCategory",
    component: Blog,
  },
  { path: "/about", component: About },
  { path: "/message", component: Message },
  { path: "/project", component: Project },
];
const router = new VueRouter({ routes, mode: "history" });

export default router;
