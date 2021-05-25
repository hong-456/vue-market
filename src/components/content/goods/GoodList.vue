<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :key="item._id" :goodsItem="item"/>
  </div>
  
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
    name:"goodlist",
    data(){
        return {
            
        }
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodListItem
    }
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;
        /* space-evenly将所有组件均等分，但兼容性不太好 */
        justify-content: space-evenly;
        /* space-around让组件之间的间隔是：最左最右的组件和边界的间隔的两倍 
        所以，需要使用padding进行一些微调*/
        /* padding: 0 2px;
        justify-content: space-around; */
    }
</style>