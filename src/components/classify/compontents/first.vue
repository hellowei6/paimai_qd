<template>
    <div class="first">
        <div class="one">
            <img src="//gw.alicdn.com/imgextra/i1/172/O1CN01doMm2j1D8ofvIkEfW_!!172-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt="">
        </div>
        <div class="two">
            <ul class="con">
                <b>珍品降价</b><br>
                <span>奢侈品/玉翠珠宝/艺术品</span>
                <ul class="tu">
                    <li><img src="//gw.alicdn.com/tfs/TB13rfRdoD1gK0jSZFGXXbd3FXa-250-250.png_140x10000.jpg_.webp" alt=""></li>
                    <li><img src="//gw.alicdn.com/tfs/TB1adfPdX67gK0jSZPfXXahhFXa-400-400.jpg_140x10000Q75.jpg_.webp" alt=""></li>
                </ul>
            </ul>
            <ul class="con">
                <b>大资产降价</b><br>
                <span>金融/商业/破产</span>
                <ul class="tu">
                    <li><img src="//gw.alicdn.com/tfs/TB1rTf5doT1gK0jSZFhXXaAtVXa-400-400.jpg_140x10000Q75.jpg_.webp" alt=""></li>
                    <li><img src="//gw.alicdn.com/tfs/TB1D0P6dhn1gK0jSZKPXXXvUXXa-400-400.jpg_140x10000Q75.jpg_.webp" alt=""></li>
                </ul>
            </ul>
        </div>
        <div class="three">
            <b>降幅最大</b>
            <span>起拍价降幅50%以下</span>
            <img src="../images/you.png" alt="">
        </div>
        <div class="four">
            <div class="img">
                <img src="../images/timg1.jpg" alt="">
            </div>
            <div class="content">
                <b>李艳秋《上善若水》陕西书协副</b><br>
                <span >起拍价降88%</span>
                <div class="content-b">
                    <p>当前<span>￥700</span></p>
                    <div class="content-bb">
                        <div class="bl">
                            <span>原价起拍 ￥900 <br>今天10：00结束</span>
                        </div>
                        <div class="br">
                            <span>出价</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="four">
            <div class="img">
                <img src="../images/timg2.jpg" alt="">
            </div>
            <div class="content">
                <b>李百战《人物》西安美院教授</b><br>
                <span >起拍价降95%</span>
                <div class="content-b">
                    <p>当前<span>￥700</span></p>
                    <div class="content-bb">
                        <div class="bl">
                            <span>原价起拍 ￥2000 <br>今天10：00结束</span>
                        </div>
                        <div class="br">
                            <span>出价</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="four">
            <div class="img">
                <img src="../images/timg3.jpg" alt="">
            </div>
            <div class="content">
                <b>四川剑南春股份有限公司自然人</b><br>
                <span >起拍价降50%</span>
                <div class="content-b">
                    <p>当前<span>￥700</span></p>
                    <div class="content-bb">
                        <div class="bl">
                            <span>原价起拍 ￥8.00万 <br>今天10：00结束</span>
                        </div>
                        <div class="br">
                            <span>出价</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.first{
    .one{
      display: flex;
      width: 100%;
      height: 234px;
    }
    .two{
        height: 248px;
        width: 100%;
        display: flex;
        padding-top: 22px;
        .con{
            width: 375px;
            padding-left: 20px;
            border-right: 1px solid rgb(229, 229, 229);
            b{
             border: 0px solid black;
             font-size: 30px;
             line-height: 32px;
             color: rgb(51, 51, 51);
            }
            span{
                padding-top: 10px;
                font-size: 24px;
                line-height: 28px;
                color: rgb(153, 153, 153);
            }
            .tu{
                 display: flex;
                li{
                    img{
                        padding-top: 10px;
                        width: 134px;
                        height: 134px;
                    }
                }
            }
        }
    }
    .three{
        height: 68px;
        width: 100%;
        border-top: 1px solid rgb(229, 229, 229);
         border-bottom: 1px solid rgb(229, 229, 229);
        display: flex;
        b{
            font-size: 30px;
            color: rgb(51, 51, 51);
            line-height: 68px;
        }
        span{
            font-size: 24px;
            color: rgb(153, 153, 153);
            // line-height: 28px;
            margin-top: 24px;
            margin-left: 12px;
        }
        img{
            width: 28px;
            height: 34px;
            margin-left:48%;
            margin-top: 20px;
        }
    }
    .four{
        width: 100%;
        height: 278px;
        padding: 12px 24px 6px;
        display: flex;
        .img{
            width: 260px;
            height: 260px;
        }
        .content{
            width: 442px;
            height: 160px;
            padding: 0 20px 24px;
            b{
                width: 402px;
                height: 32px;
                color: #333333;
                font-size: 30px;
            }
            span{
                width: 146px;
                height: 20px;
                color: #D5294A;
                font-size: 26px;
                margin: 0 10px;
            }
            .content-b{
                width: 402px;
                height: 135px;
                margin-top: 20px;
                p{
                    margin: 22px 0 0;
                    display: flex;
                    // width: 90px;
                    height: 30px;
                    color: #FA2A4C;
                    font-size: 24px;
                    margin: 0 9px 0 0;
                    span{
                        width: 57px;
                        height: 36px;
                        margin: 0 4px 0 0;
                        font-size: 32px;
                    }
                }
                .content-bb{
                    width: 402px;
                    height: 66px;
                    display: flex;
                    margin-top: 20px;
                    .bl{
                        width: 316px;
                        span{
                            
                        color: #909090;
                        font-size: 24px;
                        margin: 0 5px 0 0;
                        }
                    }
                    .br{
                        width: 86px;
                        height: 50px;
                        background: #FA2A4C;
                        margin: 8px 0 0;
                        line-height: 50px;
                        text-align: center;
                        span{
                            color: #ffffff;
                            font-size: 24px;
                        }
                    }
                }
            }
        }
    }
    
}
</style>