module.exports = {
    css: {
        loaderOptions: {
            postcss:{
                //这是rem适配的配置
                plugins: [
                    require("postcss-px2rem")({
                        remUni: 75
                    })                   
                ]
            }
        }
    }
}