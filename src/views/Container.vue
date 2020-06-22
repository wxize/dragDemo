<template>
    <draggable :style="'flex: 1; background-color: '+ bg +'; min-height: 100px;'" 
    :list="children"
    v-bind="conf"
    :tag="tag"
    :id="id"
    @add="addHandler"
    @change="changeHandler"
  >
    <template v-for="(item,index) in children">
      <component 
        :is="item.element" 
        :key="index" 
        :tag="item.renderTag" 
        :children="item.children"
        :id="item.id"
        @add="addHandler"
        @change="changeHandler"
        >{{item.label}}
      </component>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name: 'container',
    components: {
        draggable
    },
    props: {
        id: {
            type: String,
            default: '',
            validator(val) {
                console.log('id ~', val)
                return true
            }
        },
        tag: {
            type: String,
            default: ''
        },
        children: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        bg() {
            return '#'+Math.floor(Math.random()*16777215).toString(16);
        },
    },

    data() {
        return {
            conf: {
                group: {
                name: 'hbird'
                }
            },
        }
    },

    methods: {
        changeHandler(evt) {
            this.$emit('change', evt)
        },
        
        addHandler(evt) {
            this.$emit('add', evt)
        }
    }
}
</script>