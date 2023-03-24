<script setup lang="ts">
import {useRoute} from "vue-router";
let route = useRoute();
console.log(route.fullPath)
</script>
<template>
  <div>联系人</div>
  <router-link to="/chat">去聊天</router-link>
</template>
<style scoped lang="scss">

</style>
