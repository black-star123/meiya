<template>
    <div id="login">
        <div>
            <div>
                <p><img src="../../assets/my/header.png" alt="头像"></p>
                <p>{{username}}</p>
            </div>
            <div v-show="!onclick" @click="Selection">绑定手机号</div>
            <div v-show="onclick">
                <input type="number" :placeholder="this.placeholder1" ref="input1"><span>发送</span>
                <input type="number" :placeholder="this.placeholder2" ref="input2">
                <div @click="submit">提交</div>
            </div>
        </div>
        <div><img src="../../assets/my/phone.png"><a>联系客服</a></div>
        <div @click="idea"><img src="../../assets/my/view.png"><a>意见反馈</a></div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            username:this.$store.getters.isname,
            onclick:false,
            placeholder1:"请输入手机号码",
            placeholder2:"请输入验证码"
        }
    },
    methods:{
        idea(){
            this.$router.push({path:"ideas"})
        },
        Selection(){
            this.onclick=true
        },
        submit(){
            if(this.$refs.input1.value==""){
                this.placeholder1="手机号不能为空！！！"
            }else{
                if(this.$refs.input2.value==""){
                    this.placeholder2="验证码不能为空！！！"
                }else{
                    alert("绑定成功");
                    this.$refs.input1.value="";
                    this.$refs.input2.value="";
                    this.$router.push({path:"/"})
                }
            }
        }
    }
}
</script>

<style scoped>
    #login{
        padding: 15px 15px 0 15px;
        box-sizing: border-box
    }
    #login>div:first-child{
        height: 190px;
        margin-bottom: 50px
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
    #login>div:first-child>div:nth-of-type(2){
        width: 94%;
        margin: 20px auto;
        background: rgb(16, 173, 25);
        color: white;
        text-align: center;
        vertical-align: middle;
        border-radius: 5px;
        line-height: 45px;
        font-size: 15px;
        font-weight: bold;
    }
    #login>div:first-child>div:nth-of-type(3){
        height: 50px;
        text-align: center;
        background: white;
        border-radius: 10px;
        font-size: 15px;
        width: 94%;
        margin: 20px auto;
    }
    #login>div:first-child>div:nth-of-type(3) input{
        line-height: 30px;
        width: 80%;
        border-radius: 10px;
        outline: none
    }
    #login>div:first-child>div:nth-of-type(3) input:first-of-type{
        width: 60% !important;
        margin-bottom: 5px;
    }
    #login>div:first-child>div:nth-of-type(3) span{
        display: inline-block;
        width: 15%;
        line-height: 30px;
        background: rgba(0, 122, 204,.5);
        border-radius: 10px;
        color: white;
        margin-left: 5%;
        font-weight: bold
    }
    #login>div:first-child>div:nth-of-type(3) div{
        width: 80%;
        line-height: 30px;
        border-radius: 10px;
        background: rgba(0, 128, 0, .8);
        margin: 10px auto;
        color: white;
        font-weight: bold;
        font-size: 16px
    }
    #login>div:not(:first-child){
        line-height: 50px;
        border-bottom: 1px solid rgb(227, 214, 249);
        vertical-align: middle;
    }
    #login>div:not(:first-child) img{
        width: 20px;
        vertical-align: middle;
        margin-right: 10px;
    }
</style>
