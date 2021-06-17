<template>
  <div class="order">
    <p class="jiben">订单处理</p>
    <div>
      <img src="~assets/img/my/daifu.png" alt="">
      <p>待付款</p>
    </div>
    <div>
      <img src="~assets/img/my/fahuo.png" alt="">
      <p>待发货</p>
    </div>
    <div>
      <img src="~assets/img/my/shouhuo.png" alt="">
      <p>待收货</p>
    </div>
    <div>
      <img src="~assets/img/my/commont.png" alt="">
      <p>评价</p>
    </div>
    <div>
      <img src="~assets/img/my/shouhou.png" alt="">
      <p>退款/售后</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"myOrder"
}
</script>

<style lang="less">
.order{
    background-color: white;
    width: 97%;
    display: flex;
    div{
      flex:1;
      img{
        width:2rem;
        height:2rem
      }
    }
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 5px;
    margin: 0.4rem auto 0;
    flex-wrap: wrap;
    .jiben{
      text-align: left;
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    font-size: 0.5rem;
  }
</style>