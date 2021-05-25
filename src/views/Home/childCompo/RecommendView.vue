<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item._id" class="recommend-item" >
          <a href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="less">
    .recommend{
        display: flex;
        text-align: center;
        width:100%;
        font-size: 14px;
        
        
        img{
            width:5rem;
            border-radius: 66px;
            height: 5rem;
           
        }
        padding: 12px 0px 15px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex:1
    }
</style>