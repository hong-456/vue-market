<template>
    <div>
        <i><p class="recommend-key" ref="recommend1">推荐</p></i>
        <good-list :goods="recommends" />
    </div>
  
</template>

<script>
import GoodList from 'components/content/goods/GoodList'
export default {
    name:"",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodList
    },
    mounted() {
    // this.$bus.on('swiperok',()=>this.$bus.emit("detailrecommend",this.$refs.recommend1.offsetTop))
       this.$bus.on('swiperok',()=>
        {
           if(this.$refs.recommend1)
           this.$bus.emit("detailrecommend",this.$refs.recommend1.offsetTop)
        })
    
    },
    methods: {

    },
  
}
</script>

<style lang="less">
    .recommend-key{
        font-weight: bolder;
        font-size: 26px;
        margin: 1rem 0;
        text-align: center;
        color: rgb(0, 0, 0);
    }
</style>