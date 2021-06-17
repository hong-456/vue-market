<template>
  <!-- 这个组件用于显示详情页的参数数据 -->
  <div>
    <p class="set-key" ref="params">{{params.key}}</p>
    <table>
      <tr v-for="(item,index) in params.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <p class="rule-key">{{rule.key}}</p>
    <table class="detail-params-rule">
      <tr v-for="(item,index) in rule.tables" :key="index">
        <th>{{item[0]}}</th>
        <td v-for="i in item.length-1" :key="i">{{item[i]}}</td>
      </tr>
    </table>
    <p class="disclaimer">*{{rule.disclaimer}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name:"detailParams",
  data() {
    return {
      offsetTOp:1
    }
  },
  props:{
    params:{
      type:Object,
      default(){
        return {}
      }
    },
    rule:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted() {
    // this.$bus.emit("detailparams",this.$refs.params1.offsetTop)
    // this.$bus.on('swiperok',()=>this.$bus.emit("detailparams",this.$refs.params1.offsetTop))
    this.$bus.on('swiperok',()=>
        {
           if(this.$refs.params)
           this.$bus.emit("detailparams",this.$refs.params.offsetTop)
        })
  },
}
</script>

<style lang="less" scoped>
  .disclaimer{
    font-size: 10px;
    text-indent:2em;
    margin-top: 2px;
  }
  hr{
    margin-top: 0.5rem;
  }
  .params-key{
    text-align: center;
  }
  table{
    border:1px solid rgb(197, 197, 192);
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-collapse:collapse;
    text-align: center;
    width:100%;
    tr th,td{
      border:1px solid rgb(197, 197, 192);
      border-right:none;
      border-left:none;
      border-top: none;
      height: 2rem;
      line-height: 2rem;
    }
    th{
      width:25%;
      font-weight: normal;
    }
    
  }
  .rule-key,.set-key{
    text-align: center;
    margin: 1rem 0 0.75rem 0;
  }
</style>