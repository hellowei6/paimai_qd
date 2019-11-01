import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:3000/ali/"
export function getBanner() {
    return  axios.get("public")
}
axios.defaults.baseURL="http://127.0.0.1:3000/ali/"

//对数据进行拦截
axios.interceptors.response.use(function(response){
    return response.data;
},function(error){
    return Promise.reject(error)
})
//获取双11
export function getShuang(){
    return axios.get("shuang")
}


//拍卖滚动栏
export function getMsProduct(){
    return axios.get("msProduct")
}


//精挑细选
export function getJing(){
    return axios.get("jing")
}


//发现惊喜
export function getSuperise(){
    return axios.get("superise")
}


//导航栏
export function getNavList(){
    return axios.get("navList")
}


//拍卖专场
export function getLiveList(){
    return axios.get("liveList")
}



//所有商品1
export function getOneList(){
    return axios.get("oneList")
}



//所有商品2
export function getTwoList(){
    return axios.get("twoList")
}




//所有商品3
export function getThreeList(){
    return axios.get("threeList")
}



//所有商品4
export function getFourList(){
    return axios.get("fourList")
}
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
// 1.获取banner图
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
// Any status codes that falls outside the range of 2xx cause this function to trigger
// Do something with response error
    return Promise.reject(error);
});

//关注提醒
export function getALLfocus() {
    return axios.get("focusShopping")
}
