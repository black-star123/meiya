<template>
    <div id="unlisted">
        <div class="header"></div>
        <div>
            <img src="../../assets/my/header.png" alt="头像">
            <p>未登录</p>
        </div>
        <div><a href="/my">授权使用微信登录</a></div>
    </div>
</template>

<script>
export default {
    name:'unlisted'
}
</script>

<style scoped>
    #unlisted .header{
        background: url(../../assets/my/mybackground.jpg) no-repeat center;
        background-size: 100% 100%;
        width: 100%;
        height: 200px;;
    }
    #unlisted div:nth-last-of-type(2){
        height: 107px;
        position: relative;
        padding-top: 30px;
    }
    #unlisted div:nth-last-of-type(2) img{
        width: 50px;
        height: 50px;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        top: -25px;
        left: 42.5%;
    }
    #unlisted div:nth-last-of-type(2) p{
        text-align: center;
        font-size: 15px;
        color: rgb(155, 155, 155)
    }
    #unlisted div:last-child a{
        display: block;
        width: 86%;
        margin: 0 auto;
        color: white;
        border-radius: 5px;
        background: rgb(16, 173, 25);
        line-height: 45px;
        text-align: center;
        -webkit-tap-highlight-color: transparent
    }
</style>
