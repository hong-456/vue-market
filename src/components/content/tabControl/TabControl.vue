<template>
  <div class="tab-control">
<!-- 这里写的是一个标题，有多个选项，由于是纯文字，因此不用跟以前一样
使用插槽来让使用者插东西，只要让使用者传入一个数组，再将数组按照格式渲染即可 -->
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" 
    :class="{active:index===currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index;
            this.$emit("tabClick",index)
        }
    },
}
</script>

<style lang="less" scoped>
    .tab-control{
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: center;
        background-color: #fff;
        z-index: 99;
    }
    .tab-control-item{
        flex:1;
        span{
            padding:5px
        }
    }
    .active{
        color:deeppink;
        span{
            border-bottom: 2px solid deeppink;
        }
    }
</style>