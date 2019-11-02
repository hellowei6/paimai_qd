<template>
    <!--主内容  -->
    <div class="content">
        <!--  -->
        <div class="top">
        <div class="top-left">
            <!-- 头像 -->
        <img src="//gw.alicdn.com/tfscom/img.alicdn.com/imgextra/i2/2204141602601/O1CN01D38jGB1V5IjRynioW_!!2204141602601-0-beehive-scenes.jpg" alt="">
        <span>方叔说事</span>
         </div>
        <div class="top-right">
        <span>司法那些事</span>
        <img src="https://gw.alicdn.com/tfs/TB1VkGWO4naK1RjSZFtXXbC2VXa-26-44.png" alt="">
        </div>
        </div>
        <div class="title">
            <span>为什么有很多人专挑"老破小"</span>
        </div>
        <div class="picture">
            <img src="//img.alicdn.com/imgextra/i3/2204141602601/O1CN01MjAlv51V5IjhCnSSq_!!2204141602601-0-daren.jpg" alt="">
        </div>
        <div class="access">
          <span>28人看过</span>
          <div class="access-right">
          <img src="https://img.alicdn.com/tfs/TB1qiIMc1H2gK0jSZJnXXaT1FXa-54-54.png" alt="">
          <span>10</span>
          <img src="https://img.alicdn.com/tfs/TB1feMJc7P2gK0jSZPxXXacQpXa-54-54.png" alt="">
          <span>8</span>
          <img src="https://img.alicdn.com/tfs/TB1hKsKc1H2gK0jSZFEXXcqMpXa-54-54.png" alt="">
        </div>
        </div>
        <div class="comment"> 
            <div class="comment-make">
              <span>风雪夜归人：</span>
              <span class="com">谌江，一个出人才的地方!</span>
              <span class="whole">查看全部7条评论</span>
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
    width:375px;
    height:420px;
      background-color:#E1E1E1;
    padding-top: 15px;
   
    .top{
        display: flex;
        flex-direction: row;
        padding: 9px 9px;
        margin-left:10px;
        background-color:#ffff;
        align-items: center;
        width:337px;
        height:40px;
        .top-left{
            width:253px;
            height:28px;
        img{
            width:26px;
            height:26px;
            border-radius: 13px;
            line-height: 13px;
            float: left;
         }
         span{
             display: flex;
             font-size:13px;
             color:rgb(51,51,51);
             line-height:13px;
             float: left;
              font-weight: bold;
              margin-top:8px;
               margin-left: 5px;
         }
        }
        .top-right{
           width:86px;
           height:28px; 
     background-color: rgb(250, 250, 250);
    border-radius: 20px;
    span{
    flex-shrink: 0;
    font-size: 12px;
    color: rgb(255, 51, 98);
    margin-right: 4px;
    margin-left: 6px;
    line-height: 26px;
     }
     img{
         width:4px;
         height:7px;
         margin-right:6px;
     }
   }
  }
  .title{
    width:345px;
    height:32px;
    background-color:#ffff;
    padding-left:10px;
    margin-left:10px;
    margin-left:10px;
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
    font-size: 15px;
    width: 337px;
    line-height: 23px;
    text-overflow: ellipsis;
    margin-bottom: 9px;
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
      height:212px;
      width:345px;
 background-color:#ffff;
    padding-left:10px;
    margin-left:10px;
    margin-left:10px;
      img{
          width:200px;
          height:200px;
              border-radius: 5px;
      }
   }
   .access{
       height:18px;
        width:345px;
        background-color:#ffff;
        padding-left:10px;
        margin-left:10px;
        margin-left:10px;
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
    font-size: 12px;
    -webkit-box-flex: 1;
    color: rgb(153, 153, 153);
    float: left;
        }
        }
     .access-right{
          padding-left:170px;
        img{
    width: 18px;
    height: 18px;
    margin: 0px 5px 0px 24px; 
    float: left;
   }
 }
 .comment{
     height:88px;
        width:345px;
        background-color:#ffff;
        padding-left:10px;
        margin-left:10px;
        padding-top:12px;
        .comment-make{
            width:309px;
            height:55px;
    text-decoration: none;
    -webkit-box-flex: 1;
    flex: 1 1 0%;
    background-color: #FAFAFA;
    border-radius: 6px;
    padding: 10px 12px;
    -webkit-box-orient: vertical;
    flex-direction: column;
    padding-top:12px;
    span{
    color: #333333;
    font-size: 13px;
    font-weight: bold;
    line-height: 25px;
    background-color: rgb(250, 250, 250);
    float: left;
    flex-direction: row;
    }
    .com{
    color:rgb(51,51,51);
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
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