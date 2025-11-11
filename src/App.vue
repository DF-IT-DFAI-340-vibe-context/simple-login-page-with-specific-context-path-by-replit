<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/styles/variables.scss';

#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
