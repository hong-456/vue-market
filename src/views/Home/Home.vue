<template>
  <div id="home">
    <!-- 使用标题菜单组件，只在中间插入文字 -->
    <nav-bar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <tab-control class="home-tab-control tab-control1" :titles="['流行','新款','精选']" 
      @tabClick="tabactive" ref="tabControl1" v-show="contrShow" />
    <!-- 设置滚动，在组件props可接收probe-type：是否监听滚动，pull-up-load：是否开启监听上拉事件 -->
    <scroll class="content" ref="scroll" :probe-type="3" @position="ControlScroll" 
    :pull-up-load="{threshold:50}" @pulling="pullingRequest">
      <!-- 轮播图、推荐、本周流行3个组件另外封装完成，这里传给组件数据并调用即可 -->
      <home-swiper :banners="banners" @swiperLoadOK="swiperTop"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control class="home-tab-control" :titles="['流行','新款','精选']" 
      @tabClick="tabactive" ref="tabControl2"/>
      <!-- 由当前active决定显示哪个组件商品列表 -->
      <good-list :goods="goods[active].list" />
    </scroll>
    <!-- 回到顶部按钮，position为1000px显示 -->
    <back-top @click.native="topClick()" v-show="isShow"/>
  </div>
</template>
<script>
// 导入的时候按规范导入，将组件按类型分开
//这里都是子组件
import HomeSwiper from './childCompo/HomwSwiper'
import RecommendView from './childCompo/RecommendView'
import FeatureView from './childCompo/FeatureView'
//这里是第三方组件
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
//这里是方法
import { getSwiper,getHomeMultidata } from 'network/home';
  export default {
    name:'Home',
    data(){
      return {
        // 创建两个数组用来保存横幅的数据和推荐的数据
        banners:[],
        recommends:[],
        cungepop:[],
        // 如果请求数据过慢，图片未加载完成，轮播图就启动了，轮播图可能会无法播放，设置备用数据，测试用
        banners2:[
          {link: "", title: "", _id: "60a38ce8779a141ac0e20e3b", name: "banner", image: "https://img.alicdn.com/imgextra/i1/52451301/O1CN019KZxSS1LTtxXyY4WI_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"},
          {link: "", title: "", _id: "60a38ce8779a141ac0e20e3c", name: "banner", image: "http://localhost:3000/public/img/432.jpg"},
          {link: "", title: "", _id: "60a38ce8779a141ac0e20e3a", name: "banner", image: "http://localhost:3000/public/img/432.jpg"},
          {link: "", title: "", _id: "60a38ce8779a141ac0e20e39", name: "banner", image: "http://localhost:3000/public/img/43.jpg"}
          ],
        // 增加一个对象，存放3个对象，分别对应流行、新款、精选的数据
        goods:{
          pop:{page:0,list:[]}, //存放product集合的数据
          new:{page:0,list:[]}, //存放newArrival集合的数据
          boutique:{page:0,list:[]} //存放boutique集合的数据
        },
        active:'pop', //创建一个字符串来保存当前活跃的界面
        isShow:false,  //创建布尔值，判断是否显示回到顶部按钮
        contrShow:false,//创建布尔值，判断第一个tabControl是否显示，滚动到某一位置就显示
        tabControlActive:0, //保存当前活跃的tabControl
        tabControlTop:0, // tabControl距离顶部高度
        }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
 
    created(){
      //请求轮播图和推荐数据
      this.Swiper()
      //请求pop数据
      this.HomeMultidata("pop")
      this.HomeMultidata("new")
      this.HomeMultidata("boutique")
      
    },
    methods:{
      HomeMultidata(type){
        //每次调用方法时，获取当前页码，然后发送请求获取页码的下一页的数据
        let page = this.goods[type].page + 1;
        this.goods[type].page+=1 //请求数据完成后，页码+1
        console.log(page);
        getHomeMultidata(type,page)
        .then(res=>{
          this.goods[type].list.push(...res); //将请求的数据加入data
          console.log(this.goods);
          this.$refs.scroll.refresh()
          this.$refs.scroll.finishPullUp() //数据加入完成后，调用finishPullUp()允许下一次上拉加载
          
        })
      },

      // 请求轮播图和推荐的数据，并保存到data
      Swiper(){
        getSwiper().then(res=>{
          console.log(res);
          this.banners = res.banners
          this.recommends = res.recommends
        })
      },

      // 判断当前活跃的组件
      tabactive(index){
        switch (index) {
          case 0:{
            this.active = 'pop'
            break;
          }
          case 1:{
            this.active = 'new'
            break;
          }
          case 2:{
            this.active = 'boutique'
            break;
          }
        };
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
        this.$refs.scroll.MyScrollTo(0,-this.$refs.tabControl2.$el.offsetTop,1)

      },
      // 监听按钮，点击后回到顶部
      topClick(){
        this.$refs.scroll.MyScrollTo(0,0)
        // window.scrollTo({
        //   top:0,
        //   behavior:"smooth"
        // })
        console.log("a");
      },
      // 获取当前滚动到的位置
      ControlScroll(position){
        // 判断回到顶部按钮是否显示
        this.isShow = Math.abs(position.y) > 1000
        // console.log(position);
        // 判断是否吸顶
        this.contrShow =  Math.abs(position.y) > this.$refs.tabControl2.$el.offsetTop
      },
      swiperTop(){
        this.tabControlTop =  this.$refs.tabControl2.$el.offsetTop
      },
      //判断上拉加载是否被触发
      pullingRequest(){
        setTimeout(() => {
           this.HomeMultidata(this.active);
        }, 1000);
       
      },
      
      
    },
    mounted() {
      this.$bus.on("swiperLoadOK",()=>{
        console.log(this.$refs.tabControl2.$el.offsetTop);
      })
      
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
    // position: absolute;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
    // 第二种
    height: 100%;
  }
</style>