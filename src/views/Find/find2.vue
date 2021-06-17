<template>
  <div id="find">
    <!-- 分类需要两个滚动的，一个是列表，一个是商品
    不搞那么多数据，这里主要的目是学会使用多个scroll -->
    
    <nav-bar class="find-nav">
      <template v-slot:center>
        分类
      </template>
    </nav-bar>
    <!-- <scroll class="find-scroll1">
      <li v-for="(item,index) in zuobian" :key="index">item</li>
    </scroll> -->
    <!-- <scroll class="find-scroll2" ref="scroll2">
      <goods :goods="youbian" />
    </scroll> -->
    <scroll class="content" ref="detailScroll" style="height:100%">
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
      <p>sadfafdgfa</p>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar';

import goods from 'components/content/goods/GoodList'

import {getHomeMultidata} from 'network/home'
  export default {
    name:'find',
    data(){
      return {
        zuobian:['aaa','bbb','ccc','ddd','aaa','bbb',
        'ccc','ddd','aaa','bbb','ccc','ddd','aaa','bbb','ccc','ddd'],
        youbian:[]

      }
    },
    components:{
      Scroll,
      goods,
      NavBar
    },
    created() {
      getHomeMultidata('pop',1).then((data)=>{
        this.youbian=data
        console.log(data);
        }
        )
    },
    methods: {
      tiao(){
        console.log(this.$refs.scroll2.scroll)
      }
    },
  }
</script>
<style lang='less'>
  #find{
    display: flex;
    padding:44px 0 51px 0;
    height: 100%;
  }
  .find-scroll1{
    width:27%;
    background-color: red;
    padding: 2px 3px;
    text-align: center;
    height: 100%;
  }
  .find-scroll2{
    flex:1;
background-color: deeppink;
    height: 100%;
  }
  li{
    list-style: none;
    padding: 4px 0;
  }
  .find-nav{
     background-color:pink;
    color:#fff;
    // position: relative;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    
    z-index: 999;
  }
</style>