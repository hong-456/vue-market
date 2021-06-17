<template>
  <div>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive"></component>
    </router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

import mainTabbar from "components/content/mainTabbar/mainTabbar"
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}

</script>

<style lang="less">
@import url("assets/css/base.css");
</style>
