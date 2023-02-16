import { instance } from "@/api/requests.js";
/***
 *
 * 获取所有博客分类
 */
export async function getBlogType() {
  return await instance.get("/api/blogtype");
}
/***
 * 分页获取博客
 *
 */
export async function getBlog(page = 1, limit = 10, categoryid = -1) {
  return await instance.get("/api/blog", {
    params: {
      page: page,
      limit: limit,
      categoryid: categoryid,
      keyword: "",
    },
  });
}
/**
 * 获取单个博客
 * path: /api/blog/:id
 */
export async function getOneBlog(id) {
  return await instance.get(`/api/blog/${id}`);
}
/**
 * 提交评论
 */
export async function postComment(commentInfo) {
  return await instance.post("/api/comment", { data: commentInfo });
}
/**
 * 分页获取评论
 */
export async function getComments(page = -1, limit = 10, blogid = -1) {
  return await instance.get("/api/comment", {
    params: {
      page,
      limit,
      blogid,
    },
  });
}
