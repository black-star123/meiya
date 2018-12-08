<template>
    <div id="detail">
        <div class="header">
            <header>
                <h3>玻尿酸隆鼻可以管多久？</h3>
                <a href="#">共8个回答<span><img src="../../assets/question/right.png" alt="箭头"></span></a>
            </header>
            <div class="content">
                <div>
                    <span></span>
                    <span>王医生</span>
                </div>
                <p>你好，玻尿酸在注射之后，会被人体不断的吸收代谢，最终 让玻尿酸分子之间的交联度降低，从而失效，这段时间一般 维持6-8个月，也是比较常见的玻尿酸效果持续时间，但这个数值并不固定，还和其他几个因素有关。<br><br>1、玻尿酸的种类和品牌。<br><br>2、注射部位，注射部位的表情活跃度和丰富程度，部位活 动越频繁代谢越快，玻尿酸越容易流失。<br><br>3、个人体质以及术后护理，最明显的，体质不同对于玻尿 酸的适应性也不同。<br></p>
                <p>2018-08-18</p>
            </div>
        </div>
        <div class="footer">
            <div>
                <img src="../../assets/question/home.png" alt="首页">
            </div>
            <div>
                <img src="../../assets/question/consult.png" alt="咨询">
                <span>我要咨询</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail'
}
</script>

<style scoped>
    .header{
        padding: 20px 15px 50px 15px;
    }
    .header header{
        height: 80px;
        border-bottom:1px solid rgb(243, 247, 247);
        box-sizing: border-box;
    }
    .header header a{
        color: black;
        font-size: 12px;
        vertical-align: middle;
        float: right;
        margin-top: 20px
    }
    .header header a span img{
        vertical-align: middle;
        margin-left: 5px;
    }
    .header .content{
        margin-top: 15px;
        margin-bottom: 50px;
    }
    .header .content div span:first-child{
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(../../assets/question/doctor.jpg) no-repeat center;
        background-size: 200%;
        border-radius: 50%;
        margin-right: 5px;
    }
    .header .content div span{
        vertical-align: middle;
        font-size: 12px
    }
    .header .content p:first-of-type{
        font-size: 13px;
        margin-top: 15px;
        margin-bottom: 20px;
        text-align: justify;
    }
    .header .content p:last-of-type{
        font-size: 12px;
        color: rgb(188, 188, 188);
        padding-left: 83%;
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
