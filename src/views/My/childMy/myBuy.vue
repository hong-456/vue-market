<template>
  <div>
    <my-menu>
      <menu-item>
        <img src="~assets/img/my/balance.png" alt="">余额
        <template v-slot:detail>
          0.28
        </template>
      </menu-item>
      <menu-item>
        <img src="~assets/img/my/bill.png" alt="">账单
      </menu-item>
      <menu-item :detailColor="'green'">
        <img src="~assets/img/my/assets.png" alt="">总资产
        <template v-slot:detail>
          账户保障中
        </template>
      </menu-item>
      <menu-item>
        <img src="~assets/img/my/huabei.png" alt="">花呗
      </menu-item>
    </my-menu>

    <my-menu>
      <menu-item>
        <img src="~assets/img/my/sesame.png" alt="">芝麻信用
      </menu-item>
      <menu-item>
        <img src="~assets/img/my/protect.png" alt="">蚂蚁保
      </menu-item>
    </my-menu>
  </div>
</template>

<script>
import {MyMenu,MenuItem} from 'components/common/menu'
export default {
  name:"myBuy",
  components:{
    MyMenu,
    MenuItem
  }
}
</script>

<style lang="less">
  
</style>