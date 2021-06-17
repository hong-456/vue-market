<template>
  <div class="myMoney">
    <p class="jiben">常用功能</p>
    <div class="wallet">
      <img src="~assets/img/my/wallet.png" alt="">
      <p>钱包</p>
    </div>
    <div>
      <img src="~assets/img/my/youhui.png" alt="">
      <p>优惠</p>
    </div>
    <div>
      <img src="~assets/img/my/tongzhi.png" alt="">
      <p>通知</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"myMoney"
}
</script>

<style lang="less">
.myMoney{
    background-color: white;
    width: 97%;
    display: flex;
    div{
      flex:1;
      img{
        width:2.5rem;
        height:2.5rem
      }
    }
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 5px;
    margin: 4px auto 0;
    flex-wrap: wrap;
    .jiben{
      text-align: left;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
</style>