<template>
    <div>
        <form action="">
            <textarea cols="50" rows="10" ref="input" :placeholder="this.error"></textarea>
            <div>
                <div @click="onsubmit">提交</div>
                <div @click="resettext">清空</div>
            </div>
        </form>
        <div class="modal" :class="{'modalshow':show}" @click="back">
            <div><strong>意见已提交</strong><br><br>感谢您提出的宝贵意见，我们会第一时间将处理结果反馈给您，谢谢!
                <router-link to="/" tag="div">返回首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            error:""
        }
    },
    methods:{
        resettext(){
            this.$refs.input.value=""
        },
        onsubmit(){
            if(this.$refs.input.value==""){
                this.error="输入内容不能为空！！！"
            }else{
                this.show=true
            }
        },
        back(){
            this.show=false,
            this.error="",
            this.$refs.input.value=""
        }
    }
}
</script>

<style scoped>
    div form{
        text-align: center;

    }
    div form>div{
        margin-top: 10px
    }
    div form div div:not(:first-child){
        margin-left: 60px;
    }
    div form div div{
        display: inline-block;
        line-height: 30px;
        width: 60px;
        border-radius: 10px;
        border: 1px solid black;
        box-shadow: 3px 3px 10px;
        vertical-align: bottom

    }
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: opacity .25s,visibility .25s,transfrom .25s
    }
    .modal>div{
        height: 200px;
        width: 80%;
        text-align: center;
        background: white;
        z-index: 1111;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 15px;
        transform: translate(-50%,-50%);
        padding: 15px;
    }
    .modal>div div{
        display: inline-block;
        width: 80%;
        line-height: 30px;
        text-align: center;
        color: white;
        background: rgba(125, 125, 125, .5);
        border-radius: 10px;
        font-weight: bold;
        margin-top: 80px
    }
    .modalshow{
        transform: scale(1);
        visibility: visible;
        opacity: 1;
        transition: all .25s
    }
</style>
