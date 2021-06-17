<template>
    <nav-bar>
        <template v-slot:left class="left">
            <div @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
        </template>
        <template v-slot:center>
            <div class="center">
                <!-- 详情页的导航有4个选项，商品、参数、评论、推荐
                因为比较复杂，所以最好还是另外封装 -->
                <div class="centet-item"
                v-for="(item,index) in nav" :key="item" @click="navActive(index)"
                :class="{detailActive:nowActive === index}">{{item}}</div>
            </div>
        </template>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"detailNav",
    data() {
        return {
            nav:["商品","参数","评论","推荐"],
            
        }
    },
    props:{
        nowActive:{
            type:Number,
            default:0
        }
    },
    components:{
        NavBar
    },
    methods: {
        navActive(index){
            this.$emit("navClick",index);
            
        },
        backClick(){
            // console.log(this.$router);
            this.$router.back()
        }
    },
}
</script>

<style lang="less" scoped>
    .center{
        display: flex;
        .centet-item{
            flex: 1;
        }
    }
    .detailActive{
        color: deeppink;
    }
    .left{
        img{
            vertical-align: middle;
        }
    }
</style>