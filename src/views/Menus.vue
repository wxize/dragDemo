<template>
  <div style="width: 300px; background-color: gray;">
      <draggable 
        :list="items" 
        v-bind="conf"
        :clone="cloneHandler"
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
import shortid from 'shortid'
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
          renderTag: 'el-row',
          children: []
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
    },

    cloneHandler(evt) {
      console.log(`menus -> clone handler -> `, evt)
      if (evt.children) {
        evt.children = []
      }
      return {
        ...evt,
        id: shortid.generate()
      }
    }
  }
}
</script>