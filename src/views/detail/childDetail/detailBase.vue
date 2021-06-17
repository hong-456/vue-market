<template>
  <div>
    <!-- 展示标题和优惠信息 -->
    <div class="detail-item">
      <p class="detail-item-title">{{ itemInfo.title }}</p>
      <p>
        <span class="price1">￥{{ itemInfo.nowPrice }} </span>
        <del
          ><span class="price2">￥{{ itemInfo.oldPrice }}</span></del
        >
        <sup><span class="price3">大减价</span></sup>
      </p>
    </div>

    <p class="info-other">
      <span>销量 999</span>
      <span>收藏 {{sale}}人</span>
      <span>{{ itemInfo.time }}发货</span>
    </p>

    <p class="detail-item-priceDesc">
      <img src="~assets/img/detail/yes.png" alt="" />
      <span>{{ itemInfo.discountDesc }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "detailBase",
  props:{
    sale:{
      type:Number,
      default(){
        return 0
      }
    },
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  
};
</script>

<style lang="less">
.detail-item-title {
  position: relative;
  width: 100%;
  line-height: 29px;
  padding: 5px 5px;
  margin: 2px 0;
}
.price1 {
  font-size: 1.5rem;
  color: rgb(255, 28, 28);
}
.price2 {
  font-size: 0.8rem;
}
.price3 {
  background-color: rgb(255, 20, 98);
  color: white;
  padding: 1.5px 5px;
  border-radius: 8px;
}
.detail-item-priceDesc {
  margin: 1rem 0;
  img {
    width: 1rem;
    height: 1rem;
    position: relative;
    top: 2px;
  }
  span {
    font-size: 0.95rem;
    color: rgb(68, 65, 65);
  }
  border-bottom: 1px solid rgb(216, 216, 216);
  padding-bottom: 10px;
}
.info-other {
  margin-top: 10px;
  line-height: 30px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}
</style>
