<template>
    <div id="doc-detail">
        <header class="header">
            <div></div>
            <h3>高圆圆</h3>
            <p>职称：主任医师</p>
            <p>医院：南京华美</p>
            <p>擅长：双眼皮、开眼角、双眼皮吸脂</p>
        </header>
        <div class="content">
            <h3>医生简介</h3>
            <p>南京华美整形外科专家<br><br>韩国延世大学医学整形硕士<br><br>中韩整形美容医学院会员<br><br>对美学数据有过人的、超精准的掌控力，深谙鼻部美学黄金 标准及其对应数值，坚持数字化测量、数字化分析、数字化 精微雕刻植入体。</p>
        </div>
        <div class="title">其他医生推荐</div>
        <doctor/>
        <footer class="footer">
            <router-link to="/" tag="div">
                <img src="../../assets/question/home.png" alt="首页">
            </router-link>
            <div>
                <img src="../../assets/question/consult.png" alt="咨询">
                <span>我要咨询</span>
            </div>
        </footer>
    </div>
</template>

<script>
import doctor from "../common/doctor"

export default {
    name:'doc-detail',
    components:{
        doctor
    }
}
</script>

<style scoped>
    .header{
        height: 245px;
        color: white;
        font-size: 12px;
        text-align: center;
        background: url(../../assets/doctor/bg.png) repeat-x;
        overflow: hidden;
    }
    .header div{
        background: url(../../assets/doctor/doctor.jpg) no-repeat center;
        background-size: 100%;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        border: 1px solid rgb(75, 166, 210);
        box-sizing: border-box;
        margin-top: 30px
    }
    .header h3{
        margin-top: 20px;
        font-size: 15px;
    }
    .header p:first-child{
        margin-top: 18px;
    }
    .header p:not(:first-child){
        margin-top: 10px;
    }
    .content{
        padding: 20px 15px 30px 15px;
        font-size: 13px;
        text-align: justify;
    }
    .content h3{
        text-align: center;
        font-size: 15px;
        margin-bottom: 10px
    }
    .title{
        line-height: 50px;
        background: rgb(238, 238, 238);
        font-size: 16px;
        font-weight: bold;
        padding-left: 15px;
    }
    .footer{
        height: 50px;
        position: fixed;
        bottom: 0;
        background: rgba(190, 153, 236,.9);
        width: 100%;
        z-index: 998;
    }
    .footer>div:first-child{
        width: 15%;
        background: rgb(158, 121, 205,.9);
        line-height: 50px;
    }
    .footer>div:first-child img{
        vertical-align: middle
    }
    .footer>div{
        display: inline-block;
        float: left;
        text-align: center;
    }
    .footer>div:last-child{
        line-height: 50px;
        text-align: center;
        width: 85%;
        color: white;
        font-size: 18px;
    }
    .footer>div:last-child img,.footer>div:last-child span{
        vertical-align: middle
    }
    .footer>div:last-child img{
        margin-right: 10px;
    }
</style>
