<template>
  <div id="home">
    <!-- 使用标题菜单组件，只在中间插入文字 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <!-- 设置滚动，在组件props可接收probe-type：是否监听滚动，pull-up-load：是否开启监听上拉事件 -->
    <scroll class="content" ref="scroll">
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
      <p>qsdafsfsdafsasd</p>
    </scroll>
  </div>
</template>
<script>

import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'
//这里是方法
import {getHomeMultidata } from 'network/home';
  export default {
    name:'Home',
    data(){
      return {

        }
    },
    components:{
      NavBar,
      Scroll
    },
    
    created() {
      getHomeMultidata('pop',1).then((data)=>{
        this.youbian=data
        console.log(data);
        }
        )
    },
    
  }
</script>
<style scoped lang='less'>
  .home-nav{
    background-color:pink;
    color:#fff;
    // position: relative;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  #home{
    // 另一种方法无需padding
    padding:44px 0 51px 0;
    height: 100vh;
      }
  .tab-control1{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
   .content {
    height: 100%;
  }
</style>