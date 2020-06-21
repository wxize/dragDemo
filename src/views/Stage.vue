<template>
  <draggable :style="'flex: 1; background-color: '+ bg +'; min-height: 100px;'" 
    :list="items"
    v-bind="conf"
    :tag="tag"
    @remove="removeHandler"
    @change="changeHandler"
  >
    <template v-for="(item,index) in items">
      <component 
        :is="item.element" 
        :key="index" 
        :tag="item.renderTag" 
        :nodes="item.items"
        :id="item.id"
        >{{item.label}}
      </component>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import short from 'shortid'
export default {
  name: 'stage',
   components: {
    draggable
  },
  props: {
    tag: {
      type: String,
      default: 'el-row'
    },
    nodes: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      items: this.nodes || [],
      conf: {
        group: {
          name: 'hbird'
        }
      },
      ctrl: null
    }
  },

  computed: {
    bg() {
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
  },

  methods: {
    
    removeHandler(evt) {
      console.log(`removeHandler ~`)
      console.log(evt)
      console.log(this.items)
      console.log(evt.to.id)
      
      this.items.forEach(item => {
        if(item.id === evt.to.id) {
          item.nodes.push(this.ctrl)
        }
      })

      // 此处可以优化，暂时没时间做深入研究
      this.$forceUpdate()
    },

    changeHandler(evt) {
      console.log(`changeHandler ~`)
      console.log(evt)
      console.log(this.items)
      if (evt.added) {
        if(evt.added.element.element === 'stage') {
          evt.added.element.nodes = []
        }
        this.items.splice(evt.added.newIndex, 1, {
          ...evt.added.element,
          id:short.generate()
        })
      }

      if (evt.removed) {
        this.ctrl = evt.removed.element
      }
    }
  }
}
</script>