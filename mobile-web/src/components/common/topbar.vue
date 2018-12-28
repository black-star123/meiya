<template>
    <div>
        <img src="../../assets/home/back.png" alt="back" @click="goback">
        <h3>{{$route.meta.title}}</h3>
    </div>
</template>

<script>
export default {
    methods:{
        goback(){
            this.$router.goback()
        }
    }
}
</script>

<style scoped>
div{
    width: 100%;
    line-height: 20px;
    padding: 15px;
    font-size: 18px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    background: white;
    z-index: 999;
    min-width: 375px;
}
div img{
    float: left;
}
div h3{
    text-align: center;
}
</style>
