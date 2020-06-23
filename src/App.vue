<template>
  <div id="app">
    <myMenu></myMenu>
    <myStage @sync-setting="syncSetting"></myStage>
    <mySetting :conf="setting"></mySetting>
  </div>
</template>

<script>
import myMenu from './views/Menus'
import myStage from './views/Stage'
import mySetting from './views/Setting'
export default {
  name: 'app',
  components: {
    myMenu,
    myStage,
    mySetting
  },

  data() {
    return {
      setting: []
    }
  },
  
  methods: {
    syncSetting(evt) {
      this.setting = evt
    }
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
