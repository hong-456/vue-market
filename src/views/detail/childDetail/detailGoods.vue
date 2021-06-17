<template>
  <!-- 显示下面的商品详细图片介绍 -->
    <div class="detail-goods">
      <!-- 首先是优惠介绍 -->
      <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailImage.desc}}</div>
      <div class="end"></div>
    </div>
      <!-- 然后是finish图片 -->

      <!-- 然后循环展示图片 -->
      <div class="detail-showImage">
        <p class="showImage-key">{{detailImage.key}}</p>
        <img v-for="item in detailImage.list" :key="item" :src="item" alt="">
      </div>
      <!-- 最后是价格介绍 -->
      <div class="price-desc">
        <p style="color:rgb(255, 80, 173)">价格说明：</p>
        <p class="price-desc-item">{{detailImage.priceDesc}}</p>
      </div>
      <hr>
    </div>
</template>

<script>
export default {
  name:"detailGoods",
  props:{
    detailImage:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="less">
  .detail-goods{
    margin-top:20px;
  }
  hr{
    margin: 1rem 0;
    height: 10px;
    background-color: #eee;
    border-left: none;
  }
  .detail-showImage{
    img{
      width: 100%;
      margin-bottom:0.1rem ;
    }
  }
  .price-desc{
    border-left:5px solid rgb(255, 80, 173);
    padding-left: 4px;
  }
   .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .showImage-key{
    margin:0.4rem 0
  }
</style>