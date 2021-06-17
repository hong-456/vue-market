<template>
  <div>
    <!-- 显示商家信息 -->
    <div class="shop-head">
      <img :src="shopInfo.logo" alt="头像">
      <span>hw旗舰店</span>
    </div>
    <div class="detail-shop">
      <div class="detail-shop-item1">
        <p>55万</p>
        <p>总销量</p>
      </div>
      <div class="detail-shop-item2">
        <p>202</p>
        <p>全部宝贝</p>
      </div>
      <div class="detail-shop-item3">
        <p v-for="i in evalu" :key="i">
          {{i.name}} {{i.fraction}} 
          <span :class="{high:i.height,low:!i.height}" >{{i.yes}}</span>
          </p>
      </div>
    </div>
    <div class="toshop">
      <a href="">进店看看</a>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailShop",
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    },
    evaluation:{
       type:Object,
      default(){
        return {
          babyDesc:{
            
          }
        }
      }
    }
    
  },
  data() {
    return {
      evalu:{}
    }
  },
  computed:{
    
  },
  watch:{
    shopInfo(newindex,oldindex){
      this.evalu = newindex.evaluation;
      this.evalu.babyDesc.name = "描述相符";
      this.evalu.quality.name = "产品质量";
      this.evalu.attitude.name = "服务态度";
      if(this.evalu.attitude.height){
        this.evalu.attitude.yes = "高"
      }else{
        this.evalu.attitude.yes = "低"
      }
      if(this.evalu.quality.height){
        this.evalu.quality.yes = "高"
      }else{
        this.evalu.quality.yes = "低"
      }
      if(this.evalu.babyDesc.height){
        this.evalu.babyDesc.yes = "高"
      }else{
        this.evalu.babyDesc.yes = "低"
      }
      console.log(this.evalu);
      
    }
  }
}
</script>

<style lang="less">

  .shop-head{
    img{
      position: relative;
      top: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 2.5rem;
      margin: 0 5px;
    }
    
    margin-bottom: 2rem;
  }

  .detail-shop{
    display: flex;
    justify-content: space-around;
    
  }
   .detail-shop-item1{

     position: relative;
     width: 28%;
     height: 4.1rem;
     p{
       text-align: center;
       margin-bottom: 4px;
     }
     padding: 1rem 0;
     p:last-child{
       font-size: 10px;
     }
   }
   .detail-shop-item2{

     position: relative;
     width: 28%;
     height: 4.1rem;
     p{
       text-align: center;
        margin-bottom: 4px;
     }
     padding: 1rem 0;
     p:last-child{
       font-size: 10px;
     }
     margin-right: 1rem;
   }
   .detail-shop-item3{
     position: relative;
     width: 48%;
      height: 4.1rem;
     p{

       font-size: 14px;
       margin-bottom: 0.3rem;
     }
     padding: 0.4rem 1rem;
   }
   .high{
     background-color: rgb(255, 46, 46);
     color: white;
   } 
   .low{
     background-color: green;
     color: white;
   }
   .toshop{
     width: 50%;
     margin:1rem auto 0px;
     background-color: rgb(211, 209, 209);
     text-align: center;
     border-radius: 1rem;
     
     a{
       height: 1.8rem;
      line-height: 1.8rem;
      font-size: 14px;
     }
   }
</style>