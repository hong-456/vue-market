<template>
  <div class="myInfo">
    <img src="~assets/img/test.png" alt="">
    <span>用户昵称</span>
    <span class="myInfo-detail">></span>
  </div>
</template>

<script>
export default {
  name:"myInfo"
}
</script>

<style lang="less">
.myInfo{
    height: 5rem;
    width: 100%;
    img{
      height: 3.7rem;
      width: 3.7rem;
      border-radius: 50%;
      margin-right: 5px;
    }
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding-left: 15px;
    background-color: pink;
  }
  .myInfo-detail{
    position: absolute;
    right: 0.4rem;
    color: rgb(0, 0, 255);
    
  }

</style>