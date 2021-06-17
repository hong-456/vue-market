<template>
<!-- 与支付宝“我的”界面相似，一个Menu就是一个盒子，
里面可加入多条选项，也就是加入多条MenuItem
图片大小与间距已设定完成，直接加入图片和文字，监听MenuItem点击即可 -->
  <div class="Menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"Menu"
}
</script>

<style lang="less">
  .Menu{
    width: 97%;
    border-radius: 5px;
    background-color: white;
    margin: 0.4rem auto 0;
    div:last-child{
        border: none;
    }
    padding-left:0.5rem;
    img{
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 0.5rem;
    }
  }
</style>