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
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:[Boolean,Object],
        default:false
      }
    },
    mounted() {
       this.scroll = new Bscroll(this.$refs.wrapper,{
        observeDOM:true,
        mouseWheel:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true
        
      })
      console.log("ss");
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
