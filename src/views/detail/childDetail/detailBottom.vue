<template>
  <!-- 显示下方菜单栏 -->
  <div class="detail-tabbar">
      <div class="detail-tabbar-item">
        <!-- 客服 -->
        <div class="detail-tabbar-sevice">
          <img src="~assets/img/detail/sevice.png" alt="">
          <p>客服</p>
        </div>
        <!-- 店铺 -->
        <div>
          <img src="~assets/img/detail/shop.png" alt="">
          <p>店铺</p>
        </div>
        <!-- 收藏 -->
        <div>
          <img src="~assets/img/detail/star.png" alt="">
          <p>收藏</p>
        </div>
      </div>
    <!-- 加入购物车 -->
    <div class="buy-shopcat">
        <div class="shopcat" @click="addCart">
          <p>加入购物车</p>
        </div>
        <!-- 购买 -->
        <div class="buy">
          <p>购买</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"detailBottom",
  components:{
    
  },
  methods: {
    addCart(){
      this.$emit('addCartClick')
    }
  },
}
</script>

<style lang="less">

.detail-tabbar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;


}
  .detail-tabbar-item{
    img{
      width:24px;
      height: 24px;
    }
     text-align: center;
    background-color: white;
    display: flex;
    width: 50%;
    div{
      flex: 1;
    }
  }
  .buy-shopcat{
    background-color: deepskyblue;
    display: flex;
    width: 50%;
    height: 51px;
    .shopcat{
      position: relative;
      width: 60%;
      text-align: center;
      height: 51px;
      line-height: 51px;
      background-color: orange;
    }
    .buy{
      position: relative;
      width: 40%;
      text-align: center;
      height: 51px;
      line-height: 51px;
      background-color: greenyellow;
    }
  }
</style>