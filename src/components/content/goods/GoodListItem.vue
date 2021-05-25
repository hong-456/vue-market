<template>
    <div class="goods-item">
        <img :src="goodsItem.img" alt="">
        <div class="goods-info">
            <p>{{goodsItem.detail}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="favorites">  收藏：{{goodsItem.favorites}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodListItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
  .goods-item {
    width:100%;
    padding-bottom: 40px;
    position: relative;
    // width:calc(50% - 10px);
    // margin: 0 5px;
    width:48%
    
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .favorites {
    position: relative;
  }

  .goods-info .favorites::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>