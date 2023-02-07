import { instance } from "./requests";
export async function getBanner() {
  console.log(await instance.get("/api/banner"));
  return await instance.get("/api/banner");
}
