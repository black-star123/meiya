<template>
    <div id="doc-detail">
        <header class="header">
            <div></div>
            <h3>北京丽都整形医院</h3>
            <p>机构类型：民营机构</p>
            <p>业务范围：四级项目</p>
            <p>地址：北京市朝阳区慧忠里103楼D座</p>
        </header>
        <div class="content">
            <h3>关于该院</h3>
            <p>成立于2004年的四川米兰美容外科医院座落在成都宽窄巷 子附近的中同仁路55号(市妇幼保健院旁)，是中国十强整形 美容医院之一<br><br>目前，米兰整形医院拥有医技人员140余人，其中以吴开泉 院长、张义明副院长为首的十多位资深的整形美容、皮肤美 容专家均为中国整<br><br>2011年，米兰整形医院将搬迁到成都市人民南路四段的新 址。届时，12000m2的美容专科医院规模、千级层流净化 手术室、五星</p>
            <ul>
                <li><img src="../../assets/hospital/hospital_03.png" alt="医院详情"></li>
                <li><img src="../../assets/hospital/hospital_05.png" alt="医院详情"></li>
                <li><img src="../../assets/hospital/hospital_07.png" alt="医院详情"></li>
                <li><img src="../../assets/hospital/hospital_03.png" alt="医院详情"></li>
            </ul>
        </div>
        <div class="title">其他医院推荐</div>
        <div class="list">
            <ul>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div>
                        <h3>北京丽都整形医院<img src="../../assets/hospital/lable.png" alt="标签"></h3>
                        <p>北京市朝阳区慧忠里103楼D座</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="footer">
            <div>
                <img src="../../assets/question/home.png" alt="首页">
            </div>
            <div>
                <img src="../../assets/question/consult.png" alt="咨询">
                <span>我要咨询</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'doc-detail'
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
        background: url(../../assets/hospital/hospital.jpg) no-repeat center;
        background-size: cover;
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
        overflow: hidden;
    }
    .content h3{
        text-align: center;
        font-size: 15px;
        margin-bottom: 10px
    }
    .content ul{
        width: 452px;
        height: 61px;
        margin-top: 20px;
    }
    .content ul li{
        width: 98px;
        height: 61px;
        float: left;
    }
    .content ul li:not(:first-child){
        margin-left: 15px;
    }
    .title{
        line-height: 50px;
        background: rgb(238, 238, 238);
        font-size: 16px;
        font-weight: bold;
        padding-left: 15px;
    }
    .recommend>ul>li{
        height: 95px;
        padding: 20px 15px 15px 15px;
        border-bottom: 1px solid rgb(227, 214, 249);
        font-size: 12px;
    }
    .recommend>ul>li::after{
        clear: both;
    }
    .recommend ul li div:first-child{
        display: inline-block;
        width: 60px;
        height: 60px;
        background: url(../../assets/doctor/doctor.jpg) no-repeat center;
        background-size: cover;
        float: left;
    }
    .recommend ul li div:nth-of-type(2){
        margin-left: 10px;
        display: inline-block;
        width: 78%;
        float: left;
    }
    .recommend ul li div:nth-of-type(2) h3{
        font-size: 15px;
    }
    .recommend ul li div:nth-of-type(2) h3 span{
        margin-left: 10px;
        font-size: 12px;
    }
    .recommend ul li div:nth-of-type(2) div{
        margin-top: 5px;
    }
    .recommend ul li div:nth-of-type(2) div img{
        height: 10px;
        margin-right: 10px;
    }
    .recommend ul li div:nth-of-type(2) ul{
        margin-top: 10px;
    }
    .recommend ul li div:nth-of-type(2) ul li{
        float: left;
        color: rgb(239, 181, 59);
    }
    .recommend ul li div:nth-of-type(2) ul li:not(:first-child){
        margin-left: 10px;
    }
    .recommend ul li div:nth-of-type(2) ul li img{
        width: 15px;
        vertical-align: middle
    }
    .list{
        font-size: 12px;
        padding-bottom: 50px;
    }
    .list>ul>li{
        height: 65px;
        padding: 20px 15px 15px 15px;
        border-bottom: 1px solid rgb(227, 214, 249);
    }
    .list>ul>li::after{
        clear: both;
    }
    .list ul li div:first-child{
        display: inline-block;
        width: 60px;
        height: 60px;
        background: url(../../assets/hospital/hospital.jpg) no-repeat center;
        background-size: cover;
        float: left;
        vertical-align: middle
    }
    .list ul li div:nth-of-type(2){
        margin-left: 10px;
        display: inline-block;
        width: 78%;
        float: left;
    }
    .list ul li div:nth-of-type(2) h3{
        font-size: 15px;
    }
    .list ul li div:nth-of-type(2) h3 img{
        width: 45px;
        float: right
    }
    .list ul li div:nth-of-type(2) div{
        margin-top: 5px;
    }
    .list ul li div:nth-of-type(2) div img{
        height: 10px;
        margin-right: 10px;
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
