<template>
    <div>
      <div style="color: #34495E"><p style="font-size: 20px;font-weight: bold;font-family: Arial">跟
        <span style="color: #D35400;font-size: 22px;">小爱</span>
        一起<span style="color: #34495E">学</span></p></div>
      <div>
        <button class="tipsOne "><i class="icon-icon-" style="font-size: 22px;"></i>讲故事</button>
        <button class="tipsTwo "><i class="icon-laoshi1" style="font-size: 22px;"></i>读故事</button>
        <button class="tipsThree"><i class="icon-zhinengyuyinjiaohu" style="font-size: 22px;"></i>语音交互</button>
      </div>
      <div style="margin-top: 10px">
        <img src="../../assets/images/开始1.png" style="width: 20%;height: 20%;"><br>
        <router-link :to="{path:'teachDesign'}">
          <button class="start">开始阅读</button>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'start'
}
</script>

<style scoped>
.start{
  background-color: #599ee7;
  border: solid 1px #599ee7;
  border-radius: 6px;
  color: #fff;
  padding: 3px 5px;
  font-size: 18px;
}
  .start:hover{
    background-color: #4CB1FC;
  }
  .tipsOne{
    width: 32%;
    padding: 20px 0px;
    font-size: 18px;
    color: #fff;
    background-color: #2980B9;
    border: solid 1px #2980B9;
    border-radius: 4px;
  }
  .tipsTwo{
    width: 32%;
    padding: 20px 0px;
    font-size: 18px;
    color: #fff;
    border: solid 1px #FC744C;
    background-color: #FC744C;
    border-radius: 4px;
  }
  .tipsThree{
    width: 32%;
    padding: 20px 0px;
    font-size: 18px;
    color: #fff;
    border: solid 1px #85929E;
    background-color: #85929E;
    border-radius: 4px;
  }
</style>
