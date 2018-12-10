<template>
<div id="doctor">
     <div class="content">
            <ul>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
                <router-link to="/docDetail" tag="li">
                    <div></div>
                    <div>
                        <h3>高圆圆<span>主任医师</span></h3>
                        <p>北京丽都整形医院</p>
                        <div>
                            <img src="../../assets/doctor/score.png" alt="评分">
                            <span>5.0</span>
                        </div>
                        <ul>
                            <li>
                                <img src="../../assets/doctor/lable.png" alt="标签">
                            </li>
                            <li>双眼皮</li>
                            <li>开眼角</li>
                            <li>双眼皮吸脂</li>
                        </ul>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #doctor{
        font-size: 12px;
        padding-bottom: 50px;
    }
   #doctor .content>ul>li{
        height: 95px;
        padding: 20px 15px 15px 15px;
        border-bottom: 1px solid rgb(227, 214, 249);
    }
    #doctor .content>ul>li::after{
        clear: both;
    }
    #doctor .content ul li div:first-child{
        display: inline-block;
        width: 60px;
        height: 60px;
        background: url(../../assets/doctor/doctor.jpg) no-repeat center;
        background-size: cover;
        float: left;
    }
    #doctor .content ul li div:nth-of-type(2){
        margin-left: 10px;
        display: inline-block;
        width: 78%;
        float: left;
    }
    #doctor .content ul li div:nth-of-type(2) h3{
        font-size: 15px;
    }
    #doctor .content ul li div:nth-of-type(2) h3 span{
        margin-left: 10px;
        font-size: 12px;
    }
    #doctor .content ul li div:nth-of-type(2) div{
        margin-top: 5px;
    }
    #doctor .content ul li div:nth-of-type(2) div img{
        height: 10px;
        margin-right: 10px;
    }
    #doctor .content ul li div:nth-of-type(2) ul{
        margin-top: 10px;
    }
    #doctor .content ul li div:nth-of-type(2) ul li{
        float: left;
        color: rgb(239, 181, 59);
    }
    #doctor .content ul li div:nth-of-type(2) ul li:not(:first-child){
        margin-left: 10px;
    }
    #doctor .content ul li div:nth-of-type(2) ul li img{
        width: 15px;
        vertical-align: middle
    }
</style>
