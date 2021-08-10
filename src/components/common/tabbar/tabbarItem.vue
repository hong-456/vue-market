<template>
    <!-- 监听组件是否被点击 -->
    <div class="tag-bar-item" @click="itemClick()">
    <!-- 传入两张图片，分别用于活跃和不活跃状态，使用v-show决定图片是否显示 -->
      <div v-show="!isShow"><slot name="img"><img src="assets/img/tabbar/home.png" alt=""></slot></div>
      <div v-show="isShow"><slot name="img2"><img src="assets/img/tabbar/home1.png" alt=""></slot></div>
      <!-- 可以用绑定class的方法设定下方文字颜色，
      但这样无法让组件使用者自己定义颜色
        <div :class="{active:isShow}">
          <slot name="text"><div>首页</div></slot></div> -->
      <!-- 用route判断组件是否活跃，如果是，将使用者传入的颜色赋值 -->
      <div :style="isactive">
        <slot name="text">
          <div>首页</div>
        </slot>
      </div>
    </div>
</template>
<script>
  export default {
    name:'item',
    props:{
      link:String,
      activeColor:{
        path:String,
        default:"green"
      }
    },
    data(){
      return {
        // isShow:true,
      }
    },
    computed:{
      isShow(){
        // return this.link==this.$route.path
        return this.link.includes(this.$route.path)
      },
      isactive(){
        return this.isShow?{color:this.activeColor}:{}
      
      }
    },
    methods:{
      itemClick(){
        // console.log("itemClick");
        // this.$router.push(this.link)
        this.$router.replace(this.link)
        
      }
    }
  }
</script>
<style lang='less'>
.tag-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  img{
    width:24px;
    height: 24px;
  }
}

</style>