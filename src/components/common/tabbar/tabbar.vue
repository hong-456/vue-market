<template>
  <div id="tabbar">
    <!--放入插槽，将菜单的组件插入到插槽中-->
    <slot></slot> 
  </div>  
</template>
<script>

export default {

  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="less" scoped>
#tabbar{
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0px -2px 1px rgba(165, 165, 165, 0.2);
}
</style>