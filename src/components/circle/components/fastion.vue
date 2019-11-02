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
  width: 62px;
  height: 62px;
  position: fixed;
  right: 10px;
  bottom: 150px;
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
  width: 158px;
  height: 42px;
  -webkit-box-pack: justify;
  left: 109px;
  bottom: 72px;
  border-radius: 21px;
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
    width: 78px;
    height: 42px;
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
      font-size: 14px;
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
    height: 42px;
    width: 1px;
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
    width: 78px;
    height: 42px;
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
      font-size: 14px;
      color: rgb(255, 255, 255);
      font-weight: bold;
    }
  }
}
</style>