<template>
  <div>
    <!-- 在这里使用组件tabbar和tabbarItem，将下方菜单栏实例化 -->
    <home>
      <item link="/home" activeColor="rgb(255, 42, 42)">
        <template v-slot:img>
          <img src="~@/assets/img/tabbar/home.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="~assets/img/tabbar/home1.png" alt="">
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </item>
       <item link="/find">
        <template v-slot:img>
          <img src="@/assets/img/tabbar/find.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="~assets/img/tabbar/find1.png" alt="">
        </template>
        <template v-slot:text>
          <div>发现</div>
        </template>
      </item>
       <item link="/Cart">
        <template v-slot:img>
          <img src="~assets/img/tabbar/chat.png" alt="">
        </template>
        <template v-slot:img2>
          <img src="~assets/img/tabbar/chat1.png" alt="">
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </item>
       <item link="/qqq" activeColor="deeppink">
        <template v-slot:img>
          <img src="~assets/img/tabbar/user.png" alt="">
        </template>
         <template v-slot:img2>
          <img src="~assets/img/tabbar/user1.png" alt="">
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </item>
    </home>
  </div>
</template>
<script>
import home from "components/common/tabbar/tabbar"
import item from "components/common/tabbar/tabbarItem"
  export default {
    name:'',
    data(){
      return {
        
      }
    },
    components:{
    home,
    item
    }
  }
</script>
<style lang=''>

</style>