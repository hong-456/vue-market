<template>
  <div class="nav-bar">
      <!-- 这里是顶部标题栏的组件，不同的标题可以通过插入不同的内容实现 -->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        // box-shadow: 0 1px 0px #ffe;
        .left,.right{
            width:60px;

        }
        .center{
            flex:1;
            text-align: center;
        }
        text-align:center
       
    }
</style>