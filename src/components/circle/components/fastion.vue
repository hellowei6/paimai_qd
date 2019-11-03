<template>
    <div>
    <img src="https://gw.alicdn.com/tfs/TB1OR1NguH2gK0jSZJnXXaT1FXa-124-124.png" alt />
    <div class="qes">
      <div class="qes-right">
        <span>晒分享</span>
      </div>
      <div class="branching"></div>
      <div class="qes-left">
        <span>去问问</span>
      </div>
    </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
img {
  display: flex;
  width: 124px;
  height: 124px;
  position: fixed;
  right: 20px;
  bottom: 300px;
}
.qes {
  border: 0px solid black;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  place-content: flex-start space-between;
  flex-shrink: 0;
  width: 316px;
  height: 84px;
  -webkit-box-pack: justify;
  left: 218px;
  bottom: 144px;
  border-radius: 42px;
  background-image: linear-gradient(
    to right,
    rgb(252, 54, 87),
    rgb(217, 0, 81)
  );
  .qes-right {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    place-content: flex-start center;
    flex-shrink: 0;
    width: 156px;
    height: 84px;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
    span {
      white-space: pre-wrap;
      border: 0px solid black;
      position: relative;
      box-sizing: border-box;
      display: block;
      -webkit-box-orient: vertical;
      flex-direction: column;
      align-content: flex-start;
      flex-shrink: 0;
      font-size: 28px;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
  }
  .branching {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    align-content: flex-start;
    flex-shrink: 0;
    height: 84px;
    width: 2px;
    background-color: rgb(255, 255, 255);
  }
  .qes-left {
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    place-content: flex-start center;
    flex-shrink: 0;
    width: 156px;
    height: 84px;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
    span {
      white-space: pre-wrap;
      border: 0px solid black;
      position: relative;
      box-sizing: border-box;
      display: block;
      -webkit-box-orient: vertical;
      flex-direction: column;
      align-content: flex-start;
      flex-shrink: 0;
      font-size: 28px;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
  }
}
</style>