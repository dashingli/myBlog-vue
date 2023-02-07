import axios from "axios";
const instance = axios.create();
instance.interceptors.response.use(function (response) {
  console.log(response);
  if (response.data.code !== 0) {
    return false;
  }
  return response.data;
});
export default instance;
