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
  console.log(page, limit, categoryid);
  return await instance.get("/api/blog", {
    params: {
      page: page,
      limit: limit,
      categoryid: categoryid,
      keyword: "",
    },
  });
}
