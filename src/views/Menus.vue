<template>
  <div style="width: 300px; background-color: gray;">
      <draggable v-model="items" v-bind="conf" 
        @change="change"
      >
        <template v-for="(item, index) in items">
          <el-button :key="index">{{item.label}}</el-button>
        </template>
      </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      items: [
        {
          label: '按钮',
          element: 'el-button',
        },
        {
          label: '行',
          element: 'container',
          renderTag: 'el-row'
        }
      ],
      conf: {
        group: {
          name: 'hbird',
          pull: 'clone',
          put: false
        }
      }
    }
  },
  methods: {
    change(evt) {
      console.log(evt)
    }
  }
}
</script>