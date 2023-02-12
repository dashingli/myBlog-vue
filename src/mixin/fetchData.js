export default function (apiDataType = []) {
  return {
    data() {
      return {
        //API 返回的data数据
        apiData: apiDataType,
        //是否加载中
        isLoading: true,
      };
    },
  };
}
