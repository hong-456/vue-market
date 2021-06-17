<template>
  <main class="My">
    <!-- 我需要一个列表，展示的分别是：(头像，昵称)，(钱包，优惠，信息)，花呗，设置 -->
    <nav-bar class="my-nav">
      <template v-slot:left>
        我的
      </template>
      <template v-slot:right>
        <a href="" class="my-set">
          <img src="~assets/img/my/set.png" alt="">
        </a>
      </template>
    </nav-bar>
    <scroll style="height:100%">
      <!-- 显示头像和昵称 -->
      <my-info />
      <!-- 显示钱包、优惠、信息 -->
      <my-money />
      <!-- 订单信息 -->
      <my-order />
      <!-- 其他，封装成组件，可以随意添加，样式是一个宽度97%的框
      使用li分行，可以往li里添加图片和文字 -->
      <my-buy />
          <footer>你触碰到了我的底线(￣～￣)</footer>
    </scroll>

  </main>

  
</template>

<script>
import MyInfo from './childMy/myInfo'
import MyMoney from './childMy/myMoney'
import MyOrder from './childMy/myOrder'
import MyBuy from './childMy/myBuy'

import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'

export default {
  name:"qqq",
  components:{
    NavBar,
    MyInfo,
    MyMoney,
    MyOrder,
    MyBuy,
    Scroll
  }
}
</script>

<style lang="less">
  .My{
    padding: 44px 0 58px 0;
    background-color: #f6f6f6;
    height: 100vh;
  }

  .my-nav{
    background-color:pink;
    color:rgb(255, 0, 0);
    // position: relative;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  .my-set{
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
      position: absolute;
      right: 0.5rem;
      top:0.4rem
  }

  footer{
    color: rgb(139, 139, 139);
    margin: 1rem 0;
    text-align: center;
  }

</style>