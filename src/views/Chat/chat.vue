<template>
<!-- 在这里测试一下滚动 -->
  <div class="content">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <button @click="MyScrollTo(0,0)"></button>
    </ul>
  </div>
</template>
<script>
import scroll from 'better-scroll'
  export default {
    name:'chat',
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      const Bscroll = new scroll(".content",{
        click:false,
        probeType:3,//监听所有滚动
        pullUpLoad:{
          threshold:50
        },
        mouseWheel:true
        
      })
      this.scroll = Bscroll
      // Bscroll.on('scroll',(position)=>console.log(position))
      Bscroll.on('pullingUp',function() {
        console.log("上拉加载更多");
        // 上拉加载事件只会触发一次，我们需要在请求完新的数据后，重载这个方法
        //在下面这里请求数据

        //然后告诉他我请求完了，可以让进行下次上拉加载了
        setTimeout(() => {
          Bscroll.finishPullUp()
        }, 2000);
        
        
      })
    },
     methods: {
      MyScrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
    // methods: {
      bclick(){
        console.log("按钮被点击了");
        this.scroll.scrollTo(0,0,300)
      }
    },
  }
</script>
<style scoped lang='less'>
  .content{
    height: 200px;
    background-color: red;
    overflow: hidden;
    
    
  }
</style>