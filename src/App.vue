<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
