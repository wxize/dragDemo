<template>
    <div class="box"> {{id}} </div>
</template>

<script>
export default {
    name:'box',
    props:['id','list'],
    mounted() {
        console.log(this.id)
        console.log(this.list)
    }
}
</script>

<style>
    .box {
        width: 100%;
        height: 60px;
        background-color: red;
    }
</style>
