<template>
    <div id="login">
        <div>
            <div>
                <p><img src="../../assets/my/header.png" alt="头像"></p>
                <p>微信用户123456</p>
            </div>
            <div>绑定手机号</div>
        </div>
        <div><img src="../../assets/my/phone.png"><a>联系客服</a></div>
        <div><img src="../../assets/my/view.png"><a>意见反馈</a></div>
    </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style scoped>
    #login{
        padding: 15px 15px 0 15px;
    }
    #login>div:first-child{
        height: 190px;
        border-bottom: 1px solid rgb(227, 214, 249);
    }
    #login>div:first-child div p{
        text-align: center;
    }
    #login>div:first-child div p:first-child img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    #login>div:first-child div p:last-child{
        font-size: 15px;
        margin-top: 5px;
        font-weight: bold;
    }
    #login>div:first-child>div:last-child{
        width: 94%;
        margin: 20px auto;
        background: rgb(16, 173, 25);
        color: white;
        text-align: center;
        vertical-align: middle;
        border-radius: 5px;
        line-height: 45px;
        font-size: 15px;
        font-weight: bold
    }
    #login div:not(:first-child){
        line-height: 50px;
        border-bottom: 1px solid rgb(227, 214, 249);
        vertical-align: middle;
    }
    #login div:not(:first-child) img{
        width: 20px;
        vertical-align: middle;
        margin-right: 10px;
    }
</style>
