module.exports={
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    require("postcss-px2rem")({
                        remUnit:75
                    })
                ]
            }
        }
    },
    // devServer:{
    //     proxy:{
    //         '/ali':{
    //             target:"http://127.0.0.1:3000",            //代理接口
    //             changeOrigin:true,
    //             // pathRewrite:{
    //             //     '^/dang':''              //代理的路径
    //             // }
    //         }
    //     }
    // }
}