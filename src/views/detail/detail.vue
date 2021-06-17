<template>
  <!-- 这个组件用于显示点击商品后显示的细节 -->
  <div id="detail">
    <detail-nav class="detail-nav" @navClick='navActive' ref="detailnav" :now-active="nowActive" />
    <scroll class="content" :probeType="3" @position='detailScroll' ref="detailScroll">
      <detail-swiper :swiper-list="swiperList" ></detail-swiper>
      <detail-base :sale="sale" :itemInfo="itemInfo" />
      <detail-shop :shop-info="shopInfo" :evaluation="shopInfo.evaluation" />
      <detail-goods :detail-image="detailImage" />
      <detail-params :params="params" :rule="rule"/>
      <detail-commont />
      <detail-recommend :recommends="recommends" ref="recommend" />
    </scroll>
    
    <detail-bottom @addCartClick="addCart()" />
    <toast ref="mytoast" />
    
  </div>
</template>

<script>
import detailNav from "./childDetail/detailNav";
import detailSwiper from "./childDetail/detailSwiper";
import detailBase from './childDetail/detailBase';
import detailShop from './childDetail/detailShop';
import detailGoods from './childDetail/detailGoods';
import detailBottom from './childDetail/detailBottom';
import detailParams from './childDetail/detailParams';
import detailCommont from './childDetail/detailCommont';
import detailRecommend from './childDetail/detailRecommend'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'

import { getDetail,shopInfoData} from "network/detail";
//请求30条数据过来做下推荐
import {getHomeMultidata} from 'network/home'

export default {
  name: "detail",
    components: {
    detailNav,
    detailSwiper,
    detailBase,
    detailShop,
    detailGoods,
    detailBottom,
    Scroll,
    detailParams,
    detailCommont,
    detailRecommend,
    Toast
  },
  data() {
    return {
      id: null, // 点击商品跳转过来时携带的id
      swiperList: [],  //轮播图数据
      itemInfo: {}, // 所有细节页面数据
      sale: 0,    //商品收藏
      shopInfo:{},  // 商家信息展示
      detailImage:{},  // 详细图片展示
      params:{},  //参数信息展示
      rule:{},  //尺寸包含的对象过多，另外传输
      recommends:[], //推荐信息
      recommendTop:0, //推荐的所在位置
      paramsTop:0 , //参数的所在位置
      commontTop:0 , //评论的所在位置
      titleposition:[0],//参数、评论、推荐的数据组合放到数组中
      nowActive:0, //导航栏现在活跃的对象

    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  mounted() {
    // 其实要根据id去查询的，但是数据库就一条数据，就这样吧
    // getDetail(this.id)
    getDetail()
      .then((result) => {
        console.log(result);
        this.itemInfo = result.itemInfo;
        this.sale = result.hot.sale;
        this.shopInfo = new shopInfoData(result.shopInfo)
        this.detailImage = result.detailImage
        this.params = result.params
        this.rule = result.params.rule
        const r = result.swiper;
        for (const i in r) {
          this.swiperList.push(r[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getHomeMultidata("pop",1)
    .then((data)=>{
      this.recommends = data
    })
    
    this.$bus.on("detailrecommend",(data)=>{
      this.recommendTop = data-49;
      this.titleposition.push(data-49)
    })
    this.$bus.on("detailcommont",(data)=>{
      this.commontTop = data-49;
      this.titleposition.push(data-49)
    })
    this.$bus.on("detailparams",(data)=>{
      this.paramsTop = data-49;
      this.titleposition.push(data-49)
    })

    //测试下在这里直接获取高度
    // this.$bus.on('swiperok',()=>console.log(this.$refs.$el.recommend.offsetTop))
    


  },
  methods: {
    // 点击了添加到购物车按钮
    addCart(){
      // 调用store的actions方法，将id和对应的数据都传输到store的state数据中
      this.$store.dispatch('addToCart',{
        iid:this.id,
        img:this.swiperList[0],
        desc:this.itemInfo.desc,
        nowPrice:this.itemInfo.nowPrice
      // }).then(()=>this.$refs.mytoast.TanChu("添加进购物车",2000))
      }).then(()=>this.$toast.TanChu("添加进购物车",2000))
      
      
    },
    // 当导航活跃改变时
    navActive(index){
      this.nowActive = index;
      this.$refs.detailScroll.MyScrollTo(0,-this.titleposition[index]);
      // switch (index) {
      //   case 0:{
      //     this.$refs.detailScroll.MyScrollTo(0,0);
      //     break;
      //   }
      //   case 1:{
      //     this.$refs.detailScroll.MyScrollTo(0,-this.paramsTop);
      //     break;
      //   }
      //   case 2:{
      //     this.$refs.detailScroll.MyScrollTo(0,-this.commontTop);
      //     break;
      //   }
      //   case 3:{
      //     this.$refs.detailScroll.MyScrollTo(0,-this.recommendTop);
      //     break;
      //   }
      // }
    },
    detailScroll(position){
      // console.log(this.titleposition);
      let y = Math.abs(position.y)
      // if(y < this.paramsTop)
      //   this.nowActive = 0
      // else if(y >= this.paramsTop && y < this.commontTop)
      //   this.nowActive = 1
      // else if(y >= this.commontTop && y < this.recommendTop)
      //   this.nowActive = 2
      // else
      //   this.nowActive = 3
      const length = this.titleposition.length
      for(let i=0; i<length;i++){
        // 判断当前循环到的i和活跃的是否相同，相同就直接跳过这个判断
        if(this.nowActive!==i && 
        // 当i小于数组长度-1，也就是数组中i位置后面还有其他的值，表示滚动还没到最后
        // 判断是否滚动到了i位置和i+1位置之间，也就是这次滚动过了分界线
        (i < length-1 && y >= this.titleposition[i] && y<=this.titleposition[i+1])||
        // 当i等于数组长度-1，也就是到了最后一个位置了，只要判断有没有超过最后的先就行
        (i == length-1 && y >= this.titleposition[i]))
        // 如果判断成功，设置当前i为活跃
          this.nowActive = i
       
      }

    },
    
  },
  
};
</script>

<style scoped lang="less">
  .detail-nav{
    background-color: white;
    // position: relative;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .content{
    height: 100%;
  }
  #detail{
    // 另一种方法无需padding
    padding:44px 0 51px 0;
    height: 100vh;
  }

</style>
