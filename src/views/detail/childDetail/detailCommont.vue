<template>
  <div>
    <i><p class="commont-key" ref="detailcommont">评论</p></i>
    <div class="commont-item">
      <img src="~assets/img/detail/dark.png" alt="">
      <span>暗黑佟大为</span>
      <p class="commont-item-text">
        That's good♂~
      </p>
      <p class="commont-params">
        <span class="commont-params-color">颜色:白</span>
        <span class="commont-params-rule">尺码：XL</span>
        <span class="commont-params-time">2021.5.30</span>
      </p>
    </div>
  </div>
  
</template>

<script>
export default {
  name:"detailCommont",
  props:{
    commonts:{
      type:Array
    }
  },
  mounted() {
    this.$bus.on('swiperok',()=>
    {
      console.log('执行了');
      if(this.$refs.detailcommont)
        this.$bus.emit("detailcommont",this.$refs.detailcommont.offsetTop)
    })
    
  },
}
</script>

<style lang="less" scoped>
    img{
      position: relative;
      top: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 2.5rem;
      margin: 0 5px;
    }
    .commont-item{
      border: 1px solid #eee;
      padding: 3px 0;
      
    }
    .commont-item-text{
      text-indent: 2em;
      margin: 1rem 0;
      line-height: 27px;
    }
    .commont-params{
      widows: 100%;
      span{
        font-size: 14px;
        color: rgb(168, 167, 167);
      }
      .commont-params-color{
        margin-right: 0.5rem;
      }
      .commont-params-time{
        position: absolute;
        right: 0;
      }
    }
    .commont-key{
              font-weight: bolder;
        font-size: 26px;
        margin: 1rem 0;
        text-align: center;
        color: rgb(0, 0, 0);
    }
</style>