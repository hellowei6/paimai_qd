<template>
    <!--主内容  -->
    <div class="content">
        <!--  -->
        <div class="top">
        <div class="top-left">
            <!-- 头像 -->
        <img src="//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i1/2204147378473/O1CN01lsdims2CSgQguSn0w_!!2204147378473-0-beehive-scenes.jpg" alt="">
        <span>求知的小儿货</span>
         </div>
        <div class="top-right">
        <span>司法那些事</span>
        <img src="https://gw.alicdn.com/tfs/TB1VkGWO4naK1RjSZFtXXbC2VXa-26-44.png" alt="">
        </div>
        </div>
        <div class="title">
            <span>不动产权证书是什么</span>
        </div>
        <div class="picture">
            <img src="//img.alicdn.com/imgextra/i3/2204147378473/O1CN01x9apQb2CSgQvKjE2X_!!2204147378473-2-daren.png" alt="">
        </div>
        <div class="access">
          <span>179人看过</span>
          <div class="access-right">
          <img src="https://img.alicdn.com/tfs/TB1qiIMc1H2gK0jSZJnXXaT1FXa-54-54.png" alt="">
          <span>12</span>
          <img src="https://img.alicdn.com/tfs/TB1feMJc7P2gK0jSZPxXXacQpXa-54-54.png" alt="">
          <span>9</span>
          <img src="https://img.alicdn.com/tfs/TB1hKsKc1H2gK0jSZFEXXcqMpXa-54-54.png" alt="">
        </div>
        </div>
        <div class="comment"> 
            <div class="comment-make">
              <span>我家放牛娃：</span>
              <span class="com">请问法拍房支持公积金贷款吗？</span>
              <span class="whole">查看全部9条评论</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.content{
    width:750px;
    height:840px;
      background-color:#E1E1E1;
    padding-top: 30px;
    .top{
        display: flex;
        flex-direction: row;
        padding: 18px 18px;
        margin-left:20px;
        background-color:#ffff;
        align-items: center;
        width:674px;
        height:80px;
        .top-left{
            width:506px;
            height:56px;
        img{
            width:52px;
            height:52px;
            border-radius: 26px;
            line-height: 26px;
            float: left;
         }
         span{
             display: flex;
             font-size:26px;
             color:rgb(51,51,51);
             line-height:26px;
             float: left;
              font-weight: bold;
              margin-top:16px;
               margin-left: 10px;
         }
        }
        .top-right{
           width:172px;
           height:56px; 
     background-color: rgb(250, 250, 250);
    border-radius: 40px;
    span{
    flex-shrink: 0;
    font-size: 24px;
    color: rgb(255, 51, 98);
    margin-right: 8px;
    margin-left: 12px;
    line-height: 52px;
     }
     img{
         width:8px;
         height:14px;
         margin-right:12px;
     }
   }
  }
  .title{
    width:690px;
    height:64px;
    background-color:#ffff;
    padding-left:20px;
    margin-left:20px;
   
    span{
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex: 1 1 0%;
    font-size: 30px;
    width: 674px;
    line-height: 26px;
    text-overflow: ellipsis;
    margin-bottom: 18px;
    -webkit-box-flex: 1;
    font-weight: lighter;
    color: rgb(51, 51, 51);
    word-break: normal;
    text-align: justify;
    -webkit-line-clamp: 5;
    overflow: hidden;
    }
  }
  .picture{
      height:424px;
      width:690px;
 background-color:#ffff;
    padding-left:20px;
    margin-left:20px;
    
      img{
          width:400px;
          height:400px;
              border-radius: 10px;
      }
   }
   .access{
       height:36px;
        width:690px;
        background-color:#ffff;
        padding-left:20px;
        margin-left:20px;
      
        span{
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex: 1 1 0%;
    font-size: 24px;
    -webkit-box-flex: 1;
    color: rgb(153, 153, 153);
    float: left;
        }
        }
     .access-right{
          padding-left:340px;
        img{
    width: 36px;
    height: 36px;
    margin: 0px 10px 0px 48px; 
    float: left;
   }
 }
 .comment{
     height:176px;
        width:690px;
        background-color:#ffff;
        padding-left:20px;
        margin-left:20px;
        padding-top:24px;
        .comment-make{
            width:609px;
            height:110px;
    text-decoration: none;
    -webkit-box-flex: 1;
    flex: 1 1 0%;
    background-color: #FAFAFA;
    border-radius: 12px;
    padding: 20px 24px;
    -webkit-box-orient: vertical;
    flex-direction: column;
    padding-top:24px;
    span{
    color: #333333;
    font-size: 26px;
    font-weight: bold;
    line-height: 50px;
    background-color: rgb(250, 250, 250);
    float: left;
    flex-direction: row;
    }
    .com{
    color:rgb(51,51,51);
    font-weight: normal;
    font-size: 26px;
    line-height: 50px;
    background-color: #FAFAFA;
    float: left;
    }
    .whole{
        color:#9999;
    }
  }
 }
}
</style>