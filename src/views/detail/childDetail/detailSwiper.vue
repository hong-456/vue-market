<template>
  <swiper class="detail-swiper" >
    <swiper-item v-for="(item,index) in swiperList" :key="index" class="detail-swiper-item">
      <a href="#">
          <img :src="item" alt="" @load="detailSwiperImg">
        </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"detailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
      swiperList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      detailSwiperImg(){
        if(this.aconce){
          console.log(1);
          this.$bus.emit('swiperok');
          this.aconce=false
        }
      }
    },
    data() {
      return {
        aconce:true
      }
    },
}
</script>

<style lang="less">
  .detail-swiper{
    img{
      width: 100%;
    }
  }
</style>