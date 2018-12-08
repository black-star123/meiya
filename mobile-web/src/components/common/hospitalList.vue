<template>
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
            </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
