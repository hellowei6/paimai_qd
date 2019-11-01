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

// // 获取不同分类下的数据
// export function getCateContent(id){
//     return axios.get("cateContent?id="+id)
// }

// // 玉翠珠宝
// export function getJewellery(){
//     return axios.get("zhubao")
// }
// // 奢侈品
// export function getExtrave(){
//     return axios.get("Luxury")
// }
// // 紫砂陶瓷
// export function getCeramics(){
//     return axios.get("purple")
// }
// // 司法/资产
// export function getJudicial(){
//     return axios.get("law")
// }

export function getShoppingList(){
    return axios.get("shoppingList")
}