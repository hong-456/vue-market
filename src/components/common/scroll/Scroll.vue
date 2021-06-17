<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
      return {
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,//需要传入数字决定是否监听滚动
        default:0
      },
      pullUpLoad:{
        type:[Boolean,Object],//传入布尔或对象决定是否开启上拉加载
        default:false
      }
    },
    mounted() {
       this.scroll = new Bscroll(this.$refs.wrapper,{
        observeDOM:true,// DOM加载新东西自动调用refresh
        mouseWheel:true,// 允许使用鼠标滚轮操作
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true,
        keepAlive:true
        
      })
      // 在probeType==2||3 吗，也就是使用者需要监听的时候，才开启监听
      if(this.probeType==2 || this.probeType==3) {
        this.scroll.on('scroll',(position)=>{
          this.$emit('position',position)
        })
      }
      // 同理，在使用者需要上拉加载的时候，再上拉
      if(this.pullUpLoad || typeof this.pullUpLoad == Object){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pulling');
      })
      }
    },
    methods: {
      MyScrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll != null && this.scroll.refresh()
      }
    },
}
</script>

<style>

</style>
