import axios from "axios";
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response?.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const getData = (key) => {
  return axios.get(`http://localhost:3100/${key}`);
};

export const getTitle = () => {
  return axios.get(`http://localhost:3100/windowsfunction`);
};
//Functionduct List  一级菜单
export const FunctionductLis = (id) => {
  return axios.get(` /api/v1.3/windowsfunction/?sdkname=${id}`);
};

//二级菜单
export const ApiductList = (id) => {
  return axios.get(`/api/v1.3/windowsapi/?functionname=${id}`);
};

//简介
export const ProductList = () => {
  return axios.get(` /api/v1.3/windowsproduct`);
};

//  版本日志
export const ProductLogList = (id) => {
  return axios.get(`/api/v1.3/windowssdklog/?sdkname=${id}`);
};

// 简介
export const ProductExplainList = (id) => {
  return axios.get(`/api/v1.3/windowssdkexplain/?sdkname=${id}`);
};

// WindowsSDK下载说明
export const WindowsDownloadMessageList = () => {
  return axios.get(`/api/v1.3/windowssdkdownloadmessage`);
};

// SDK 下载地址  以及SDK  type 参考demo下载  下载地址0   下载demo  1
export const WindowsDownloadAddressList = (sdkName, Type) => {
  return axios.get(
    `/api/v1.3/windowssdkdownloadaddress/?sdkname=${sdkName}&download_type=${Type}`
  );
};

// linux 国产系统简介：
export const LinuxDownloadMessageList = () => {
  return axios.get(`/api/v1.3/linuxdownloadmessage/`);
};

// linux 下载地址
export const LinuxSdkList = () => {
  return axios.get(`/api/v1.3/linuxsdk`);
};

//安卓 国产系统简介：
export const AndroidDownloadMessageList = () => {
  return axios.get(` /api/v1.3/androiddownloadmessage/`);
};
// 安卓 APP  下载地址
export const AndroidAppList = () => {
  return axios.get(` /api/v1.3/androidapp/`);
};

// 安卓  SDK  下载地址
export const AndroidSdkList = () => {
  return axios.get(`/api/v1.3/androidsdk/`);
};

// 下载前要用户提供一些信息
export const InformationRetentionList = (data) => {
  return axios.post(`/api/v1.3/informationretention/`, data);
};

//测试
export const WindowsDownloadAddressListtest = (sdkName, Type) => {
  return axios.get(
    `/foo/windowssdkdownloadaddress/?sdkname=${sdkName}&download_type=${Type}`
  );
};

export const linuxTest = () => {
  return axios.get(`/foo/linuxsdk`);
};

export const windowsproductTest = () => {
  return axios.get(`/foo/windowsproduct`);
};
export const windowsfunctionTest = (current) => {
  return axios.get(`/foo/windowsfunction/${current}`);
};
export const linuxsdkTest = () => {
  return axios.get(`/foo/linuxsdk`);
};
export const linuxdownloadmessageTest = () => {
  return axios.get(`/foo/linuxdownloadmessage`);
};


export const androidsdkTest = () => {
  return axios.get(`/foo/androidsdk`);
};
export const androidappTest = () => {
  return axios.get(`/foo/androidapp`);
};


export const androiddownloadmessageTest = () => {
  return axios.get(`/foo/androiddownloadmessage`);
};

export const windowsapiTest = (id) => {
  return axios.get(`/foo/windowsapi/${id}`);
};

