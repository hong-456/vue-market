<template>
  <div class="MenuItem">
    <slot></slot>
    <div class="detail" :style="{color:detailColor}"><slot name="detail"></slot></div>
    <p class="to">＞</p>
  </div>
</template>

<script>
export default {
  name:"MenuItem",
  props:{
    detailColor:{
      type:String,
      default:"#aaa"
    }
  },
}
</script>

<style lang="less" scoped>
  .MenuItem{
    display: flex;
    list-style: none;
    align-items: center;

    width: 100%;
    padding: 0.5rem 0;

    border-bottom:1px solid #eee;
  }
  .to{
    position: absolute;
    right: 0.5rem;
    width: 1rem;
    color: #ccc;
  }
  .detail{
    position: absolute;
    right: 1.5rem;
    font-size: 0.8rem;
  }
</style>