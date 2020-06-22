<template>
  <div id="app">
    <myMenu></myMenu>
    <myStage></myStage>
  </div>
</template>

<script>
import myMenu from './views/Menus'
import myStage from './views/Stage'
export default {
  name: 'app',
  components: {
    myMenu,
    myStage
  },
  mounted() {
    
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>
