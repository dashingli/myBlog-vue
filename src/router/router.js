import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Blog from "../views/Blog";
import About from "../views/About";
import Message from "../views/Message";
import Project from "../views/Project";
import BlogDetail from "../views/Blog/components/Detail";
import store from "@/store";

Vue.use(VueRouter);
const routes = [
    {path: "/", component: Home, meta: {title: "首页"}},
    {
        path: "/blog",
        name: "blog",
        component: Blog,
        meta: {title: "博客"}
    },
    {
        path: "/blog/category/:categoryId",
        name: "blogCategory",
        component: Blog,
        meta: {title: "博客"}
    },
    {path: "/blog/:id", name: "BlogDetail", component: BlogDetail, meta: {title: "博客"}},
    {path: "/about", component: About, meta: {title: "关于我"}},
    {path: "/message", component: Message, meta: {title: "留言"}},
    {path: "/project", component: Project, meta: {title: "项目效果"}},
];
const router = new VueRouter({routes, mode: "history"});
router.afterEach((to) => {
    const title = document.querySelector('title')
    const mainTitle = store.state.setting.data.siteTitle || '个人空间'
    console.log(mainTitle)
    title.innerText = `${mainTitle} ${to.meta.title}`
})

export default router;
