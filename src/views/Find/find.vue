<template>
  <div id="find">
    <!-- 分类需要两个滚动的，一个是列表，一个是商品
    不搞那么多数据，这里主要的目是学会使用多个scroll -->
    
    <nav-bar class="find-nav">
      <template v-slot:center>
        分类
      </template>
    </nav-bar>
    <scroll class="find-scroll1 content" ref="detailScroll">
      <li v-for="(item,index) in zuobian" :key="index" :class="{active:index==isActive}" @click="changeActive(index)">{{item}}</li>
    </scroll> 
    <scroll class="find-scroll2 content" ref="scroll2" :probe-type="3" @position="rightPosition">
      <goods :goods="youbian" />
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
        // 这里是每个分类的名称，要在数据库获取
        zuobian:['aaa','bbb','ccc','ddd','aaa','bbb',
        'ccc','ddd','aaa'],
        // 商品数据
        youbian:[],
        // 左边的分类栏哪个处于活跃
        isActive:0,
        // 这里需要获取每个分类的位置，存入数组
        zuobianP:[111,222,333,444,555,666,777,888,1200]

      }
    },
    components:{
      Scroll,
      goods,
      NavBar
    },
    created() {
      getHomeMultidata('pop',1).then((data)=>this.youbian=data)
    },
    methods: {
      changeActive(index){
        this.isActive = index;
        this.$refs.scroll2.MyScrollTo(0,-this.zuobianP[index],20)
      },
      rightPosition(position){
        for(let i in this.zuobian){
          if(Math.abs(position.y) > this.zuobianP[i]-1)
           this.isActive = i
        }
      }
    },
  }
</script>
<style lang='less' scoped>
  #find{
    display: flex;
    padding:44px 0 51px 0;
    height: 100vh;
    overflow: hidden;
  }
  .find-scroll1{
    width:27%;
    background-color: rgb(235, 235, 235);
    padding: 3px;
    text-align: center;
    height: 100%;
  }
  .find-scroll2{
    flex:1;

  }
  li{
    list-style: none;
    padding: 10px 0;
    border: 1px solid #ebebeb;
  }
  .active{
    background-color: white;
    border:1px solid black;
    border-radius: 4px;
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