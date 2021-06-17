<template>
  <div @click="TanChu" class="Toast" :class="{show:isShow}">
    <p>{{showText}}</p>
  </div>
</template>

<script>
export default {
  name:"Toast",
  data() {
    return {
      isShow:false,
      showText:""
    }
  },
  methods: {
    TanChu(index,time){
      this.isShow = !this.isShow;
      this.showText = index
      setTimeout(() => {
        this.isShow = !this.isShow;
      }, time);
    }
  },
}

</script>


<style lang="less" scoped>
  .Toast{
    padding: 3px;
    background-color: rgb(150, 150, 150);
    color: white;
    font-size: 1.3rem;
    position: fixed;
    z-index: 999;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: opacity 2s;
  }
  .show{
    opacity: 1;
  }
  
</style>