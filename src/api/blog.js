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
export async function getBlog(page = 1, limit = 30, categoryid = -1) {
  return await instance.get("/api/blog", {
    params: {
      page: page,
      limit: limit,
      categoryid: categoryid,
      keyword: "",
    },
  });
}
