import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/dang/"

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export function getMsProduct1(){
    return axios.get('msProduct1')
}

export function getRotation(){
    return axios.get('rotation')
}

