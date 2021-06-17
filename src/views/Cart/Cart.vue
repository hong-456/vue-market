<template>
<!-- 在这里测试一下滚动 -->
  <div id="cart">
    <nav-bar class="cart-nav-bar"> 
      <template v-slot:center>
        <p style="color:white">购物车({{cart.length}})</p>
      </template>
    </nav-bar>
    <scroll class="cart-content">
      <li v-for="(item,index) in cart" :key="index" class="cart-item">
        <div class="cart-item-left">
          <img src="~assets/img/cart/tick.svg" alt="" class="img1" :class="{ischeck:final[index]}" @click="yesClick(index)">
          <img :src="item.img" alt="" class="img2">
        </div>
        <div class="cart-item-right">
          <p style="text-indent:1em;" class="cart-desc">{{item.desc}}</p>
          <span class="cart-item-price">￥{{item.finalPrice}}</span>
          <span class="cart-item-number">×{{item.count}}</span>
        </div>
      </li>
    </scroll>
    <cart-bottom :finalP="finalP"/>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import cartBottom from './cartBottom.vue'

import {mapGetters} from 'vuex'
  export default {
    name:'Cart',
    data(){
      return {
        finalP:0
      }
    },
    methods: {
      yesClick(index){
        this.$store.commit('yesIsClick',index)
        this.finalP = 0;
        for (let index = 0; index < this.cart.length; index++) {
          if(this.final[index])
            this.finalP += this.cart[index].finalPrice
        }
        this.$store.dispatch('oneClick')
      }
    },
    components:{
      navBar,
      Scroll,
      cartBottom
    },
    computed:{
      ...mapGetters([
      'cart',
      'final'
    ]),
    },
    created() {
       for (let index = 0; index < this.cart.length; index++) {
          if(this.final[index])
            this.finalP += this.cart[index].finalPrice
        }
        if(this.$store.state.cartList.length == 0)
          this.$store.commit('cartIsNone')
        else
          this.$store.dispatch('oneClick')
    },
  }
</script>
<style scoped lang='less'>
  #cart{
    padding:0 0 51px 0;
    height: 100vh;
  }
  .cart-content{
    height: 100%;
  }
  .cart-nav-bar{
    background-color: pink;
  }
  .cart-item{
    position: relative;
    width: 100%;
    height: 7rem;
    display: flex;
    padding: 0.5rem 0;
    .img2{
      height: 6rem;
      width: 6rem;
    }
    .img1{
      position: relative;
      height: 1.25rem;
      width: 1.25rem;
      margin: 0 5px;
      top: calc(-50% + 0.625rem);
      border:2px solid #aaa;
      border-radius: 50%;
    }
    list-style: none;
    border-bottom: 1px solid #aaa;
  }

  .ischeck{
    background-color: red;
  }
  hr{
    margin: 0;
    height: 1px;
  }
  .cart-item-price{
    position:absolute;
    bottom: 0.5rem;
    right: 3px;
    color: rgb(255, 27, 27);
    font-size: 1.5rem;
  }
  .cart-item-number{
    position:absolute;
    bottom: 2rem;
    right: 3px;
  }
  .cart-item-right{
    flex:1;
    margin-left: 3px;
  }
</style>