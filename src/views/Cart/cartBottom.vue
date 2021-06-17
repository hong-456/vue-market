<template>
 <!-- 购物车底部，用来放置最后的价格总和还有结算按钮 -->
  <div class="cart-bottom">
    <div @click="changeCheck" class="all-check">
      <img src="~assets/img/cart/tick.svg" alt="" class="all-check-img" :class="{isAllCheck:allCheck}">
      <span style="margin-right:10px">全选</span>
    </div>
    <div><span class="cart-bottom-title">合计:￥{{finalP}}</span></div>
    <div class="cart-bottom-right">
      <span>结算({{this.$store.getters.nowCheck}})</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"cartBottom",
  props:{
    finalP:{
      type:Number,
      default:0
    }
  },
  computed:{
    allCheck(){
      return this.$store.state.cartAllCheck
    }
  },
  methods: {
    // 我需要一个方法，这个方法可以将现在活跃的购物对象的价格给相加
    // 尝试实现：首先需要一个数组，数组的长度跟购物车相同，里面的值全是true
    // 循环购物车列表，每次循环判断当前的index是否为true，如果是就加上去
    // 点击√图片按钮的时候，发送点击的index，这边监听并将数组的对应位置更改为!取反
    changeCheck(){
      this.$store.dispatch('allClick')
    }
  },
}
</script>

<style lang="less">
  .all-check{
    display: flex;
    align-items: center;
  }
  .all-check-img{
    height: 1.25rem;
    width: 1.25rem;
    border:2px solid #aaa;
    border-radius: 50%;
  }
  .cart-bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 51px;
    left: 0;
    right: 0;
    width: 100%;
    font-size: 20px;
    padding: 5px ;
    height: 36px;
    line-height: 36px;
    background-color: #eee;
  }
  .cart-bottom-right{
    padding: 0 8px;
    height: 36px;
    background-color: red;
    // font-weight: bolder;
    color: white;
  }
  .cart-bottom-title{
    color: rgb(110, 109, 109);
    font-size: 1rem;
  }
  .isAllCheck{
    background-color: red;
  }
</style>