import axios from "axios"
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