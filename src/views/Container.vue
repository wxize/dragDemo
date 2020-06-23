<template>
    <draggable :style="'flex: 1; background-color: '+ bg +'; min-height: 100px;'" 
    :list="children"
    v-bind="conf"
    :tag="tag"
    :id="id"
    @clone="cloneHandler"
    @add="addHandler"
    @change="changeHandler"
    @choose="chooseHandler"
  >
    <template v-for="(item, index) in children">
      <component 
        :is="item.element" 
        :key="index" 
        :tag="item.renderTag" 
        :children="item.children"
        :id="item.id"
        @clone="cloneHandler"
        @add="addHandler"
        @change="changeHandler"
        @choose="chooseHandler"
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
            default: () => [],
            validator(val) {
                console.log('children ~', val)
                return true
            }
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
        },

        cloneHandler(evt) {
            this.$emit('close', evt)
        },

        chooseHandler(evt) {
            this.$emit('choose', evt)
        }
    }
}
</script>