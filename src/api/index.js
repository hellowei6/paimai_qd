import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:3000/ali/"

axios.interceptors.response.use(function(response){
    //Any status.code that lie within the range of 2xx cause this function to trigger
    //Do something with response date
    return response.data;
},function(error){
    //Any status.code that falls outside the range of 2xx cause this function to trigger
    //Do something with response date
    return Promise.reject(error);
})

// 获取所有的分类
export function getCateList(){
    return axios.get("allCateList")
}

//获取内容
export function getShoppingList(){
    return axios.get("shoppingList")
}


// 1.获取banner图


//关注提醒
export function getALLfocus() {
    return axios.get("focusShopping")
}
