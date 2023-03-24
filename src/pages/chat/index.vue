<script lang="ts" setup>
import BarTop from "../../components/BarTop.vue";
function openWindow() {
  window.open('/contact')
}
import {useRoute} from "vue-router";
let route = useRoute();
console.log(route.fullPath)
</script>
<template>
  <div style="height: 100vh">
    <bar-top title="聊天"></bar-top>
    <button @click="openWindow()">聊天界面</button>
    <router-link to="/contact">去联系人</router-link>
    <router-link to="/chat/chat1">去chat1</router-link>
    <router-link to="/chat/chat2">去chat2</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>

</style>
