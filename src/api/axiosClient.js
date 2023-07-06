import axios from "axios";

const axiosClient=axios.create({
    baseURL: 'https://subscription-api-ddg3.onrender.com',
    headers:{
        'Content-Type': 'application/json',
        // Authorization:
        // "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.data?.accessToken ?? '', 
    },
});
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (JSON.parse(localStorage.getItem("userInfo"))?.accessToken){
    config.headers.Authorization = "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.accessToken
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, 
function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error.response.status === 401){
    localStorage.removeItem("userInfo");
    // window.location.href = '/';
  }
  // if (error.response.status === 409){
  //   console.log("user not exits")
   
  // }
  return Promise.reject(error);
});
export default axiosClient;