import { instance } from "./requests";
export async function getBanner() {
  return await instance.get("/api/banner");
}
