import axios from "axios";
export const instance = axios.create();
instance.interceptors.response.use(function (response) {
  if (response.data.code !== 0) {
    return false;
  }
  return response.data;
});
// export default instance;
