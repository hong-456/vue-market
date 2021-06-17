<template>
  
    <swiper class="home-swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="emitHome">
        </a>
      </swiper-item>
    </swiper>
  <!-- <div>
    {{banners}}
  </div> -->
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"myswiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
      emitHome(){
        if(this.aconce){
          this.$emit("swiperLoadOK");
          this.$bus.emit("swiperLoadOK");
          this.aconce = false
          }
      }
    },
    data() {
      return {
        aconce:true
      }
    },
    mounted() {
      
    },
}
</script>

<style lang="less">
  .home-swiper{
    img{
      width: 100%;
    }
  }
</style>