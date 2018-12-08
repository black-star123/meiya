<template>
    <div id="theCase">
        <div id="case">
            <header>
                <span><img src="../../assets/case/timg.jpg" alt="头像"></span>
                <span>漂亮小姐姐</span>
            </header>
            <div>
                <ul>
                    <li><img src="../../assets/case/IMG_4757.png" alt="1"></li>
                    <li><img src="../../assets/case/IMG_4758.png" alt="2"></li>
                    <li><img src="../../assets/case/IMG_4759.png" alt="3"></li>
                    <li><img src="../../assets/case/IMG_4760.png" alt="4"></li>
                    <li><img src="../../assets/case/IMG_4761.png" alt="5"></li>
                    <li><img src="../../assets/case/IMG_4762.png" alt="6"></li>
                    <li><img src="../../assets/case/IMG_4763.png" alt="7"></li>
                    <li><img src="../../assets/case/IMG_4764.png" alt="8"></li>
                    <li><img src="../../assets/case/IMG_4765.png" alt="9"></li>
                </ul>
            </div>
            <!-- 清除浮动 -->
            <div class="clearfloat"></div>  
            <div>
                <img src="../../assets/home/lable.png" alt="标签">
                <ul>
                    <li>瘦脸</li>
                    <li>隆鼻</li>
                    <li>自体脂肪填充</li>
                </ul>
            </div>
            <!-- 清除浮动 -->
            <div class="clearfloat"></div>  
            <div>
                <p>Hi 亲们 我回来啦~~<br>  感谢上次帮助我的美丫网咨询师姐姐，不知道你现在怎么样 啦~~ <br>
                我做手术已经过了10个月的时间。<br> 我做的手术是：<br><br>眼部：埋线法双眼皮+开内眼角。<br>
                鼻部：硅胶隆鼻（5毫米）+鼻尖移植软骨。<br><br>以前的眼睛很丑，真的很丑，眼睛有点肿泡眼
                的感觉眼睛有 点内双、总想着等自己变漂亮了要怎么怎么样~但总是想可不 能变漂亮……<br><br>
                于是鼓起勇气，决定对自己做一次大改变！ 但是鼓起勇气选 择改变哪有那么容易……单说做手术很纠结
                的说，担心做不好 怎么办？也不知道到底哪里做得好...这里给大家一个好的选择：那就是下边的“我要
                咨询” 哟~<br><br> 很高兴自己现在的变化……都说女子最美好的时光很短，
                又怎 能被无奈打破？ </p>
                <span>2018-08-18</span>
                <div>
                    <div>
                        <span>999次浏览</span>
                        <img src="../../assets/home/see.png" alt="浏览">
                    </div>
                    <div>
                        <span>9999个赞</span>
                        <img src="../../assets/home/praise.png" alt="点赞">
                    </div>
                </div>
            </div>
        </div>
        <div id="comment">
            <p>评论</p>
            <div>
                <div>
                    <img src="../../assets/case/comment.png" alt="评论">
                </div>
                <input type="text" placeholder="想勾搭，来评论！">
                <img src="../../assets/case/submit.png" alt="icon提交">
            </div>
            <div>
                <ul>
                    <li>
                        <div>
                            <span><img src="../../assets/case/timg.jpg" alt="头像"></span>
                            <span>谢广坤</span>
                            <span>2018-08-18</span>
                        </div>
                        <div>
                            <img src="../../assets/home/praise.png" alt="点赞">
                            <span>9</span>
                            <img src="../../assets/home/comment.png" alt="评论">
                            <span>9</span>
                        </div>
                        <p>小姐姐好美！</p>
                    </li>
                    <li>
                        <div>
                            <span><img src="../../assets/case/timg.jpg" alt="头像"></span>
                            <span>谢广坤</span>
                            <span>2018-08-18</span>
                        </div>
                        <div>
                            <img src="../../assets/home/praise.png" alt="点赞">
                            <span>9</span>
                            <img src="../../assets/home/comment.png" alt="评论">
                            <span>9</span>
                        </div>
                        <p>小姐姐好美！</p>
                    </li>
                    <li>
                        <div>
                            <span><img src="../../assets/case/timg.jpg" alt="头像"></span>
                            <span>谢广坤</span>
                            <span>2018-08-18</span>
                        </div>
                        <div>
                            <img src="../../assets/home/praise.png" alt="点赞">
                            <span>9</span>
                            <img src="../../assets/home/comment.png" alt="评论">
                            <span>9</span>
                        </div>
                        <p>小姐姐好美！</p>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="footer">
                <a>
                    <img src="../../assets/case/praise.png" alt="点赞">
                    <span>我来点赞</span>
                </a>
                <a>
                    <img src="../../assets/case/msg.png" alt="消息">
                    <span>我要咨询</span>
                </a>
        </footer>
        <a href="#"><img src="../../assets/case/up.png" alt="箭头"></a>
    </div>
</template>

<script>
export default {
    name:"theCase"
}
</script>

<style scoped>
    #case{
        padding: 4%;
        border-bottom: 1px solid rgb(243, 247, 247);
        margin-bottom: 20px;
    }
    #case header{
        position: relative;
        height: 45px;
    }
    #case header span:first-child{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
    }
    #case header span:first-child img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    #case header span:last-child{
        font-size: 14px;
        color: rgb(119, 119, 119);
        position: absolute;
        top: 5px;
        left: 38px;
    }
    #case div:first-of-type ul li{
        width: 31.98%;
        height: 111px;
        float: left;
        margin-bottom: 7px;
    }
    #case div:first-of-type ul li:nth-child(2),#case div:first-of-type ul li:nth-child(8),
    #case div:first-of-type ul li:nth-child(3),#case div:first-of-type ul li:nth-child(9),
    #case div:first-of-type ul li:nth-child(5),#case div:first-of-type ul li:nth-child(6){
        margin-left: 7px
    }
    #case div:first-of-type ul li img{
        width: 100%;
        height: 100%;
    }
    .clearfloat{
        clear: both;
        zoom: 1;
    }
    #case div:nth-of-type(3){
        margin-top: 7px;
    }
    #case div:nth-of-type(3) img{
        float: left;
    }
    #case div:nth-of-type(3) ul li{
        display: inline-block;
        color: rgb(255, 214, 91);
        vertical-align: top;
        float: left;
        font-size: 11px;
        margin-left: 7px;
    }
    #case div:nth-of-type(5){
        margin-top: 14px;
    }
    #case div:nth-of-type(5)>p{
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    #case div:nth-of-type(5)>div{
        display: inline-block;
        font-size: 10px;
        color: rgb(216, 216, 216);
        margin-left:108px;
    }
    #case div:nth-of-type(5) div div{
        display: inline
    }
    #case div:nth-of-type(5) div div:first-child{
        margin-right: 15px
    }
    #case div:nth-of-type(5)>span{
        font-size: 10px;
        color: rgb(216, 216, 216);
    }
    #comment{
        padding-left: 4%;
        padding-right: 4%;
    }
    #comment>p{
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    #comment>div:first-of-type{
        margin-bottom: 25px
    }
    #comment div:first-of-type div{
        background: rgb(158, 121, 205);
        display: inline-block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        text-align: center;
        position: relative;
        vertical-align: middle;
    }
    #comment div:first-of-type div img{
        z-index: 998;
        display: inline-block;
        width: 80%;
        position: absolute;
        top: 3px;
        left: 3px;
    }
    #comment div:first-of-type input{
        outline: none;
        height: 37px;
        margin-left: 5px;
        width: 78%;
        border: none;
        background: rgb(245, 248, 250);
        vertical-align: middle;
        border-radius: 5px;
    }
    #comment div:first-of-type input::-webkit-input-placeholder{
        font-size: 13px;
        padding-left: 20px
    }
    #comment div:first-of-type img{
        vertical-align: middle
    }
    #comment div:nth-of-type(2) ul{
        margin-bottom: 50px;
    }
    #comment div:nth-of-type(2) ul li{
        margin-bottom: 20px;
    }
    #comment div:nth-of-type(2) ul li div{
        font-size: 13px;
        display: inline-block;
        color: rgb(141, 141, 141)
    }
    #comment div:nth-of-type(2) ul li div:first-child>span:first-child{
        display: inline-block;
    }
    #comment div:nth-of-type(2) ul li div:first-child>span:first-child img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    #comment div:nth-of-type(2) ul li div:first-child span{
        vertical-align: middle
    }
    #comment div:nth-of-type(2) ul li div:last-of-type{
        display: inline-block;
        line-height: 30px;
        float: right;
    }
    #comment div:nth-of-type(2) ul li div:last-of-type img:last-of-type{
        margin-left: 10px;
    }
    #comment div:nth-of-type(2) ul li div:last-of-type img, #comment div:nth-of-type(2) ul li div:last-of-type span{
         vertical-align: middle
    }
    #comment div:nth-of-type(2) ul li>p{
         margin-left: 33px;
         font-size: 13px
    }
    .footer{
         height: 50px;
         position: fixed;
         bottom: 0;
         width: 100%;
         z-index: 999;
    }
    .footer a{
        display: inline-block;
        line-height: 50px;
        text-align: center;
        float: left;
        width: 50%;
        font-size: 18px;
        color: white;
    }
    .footer a:first-child{
        background: rgb(158, 121, 205,.9)
    }
    .footer a:last-child{
        background: rgb(190, 153, 236,.9)
    }
    .footer a img,.footer a span{
        vertical-align: middle
    }
    .footer a img{
        margin-right: 5px;
        width: 24px;
    }
    #theCase>a{
        position: fixed;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-color: rgba(158, 121, 205, .4);
        border-radius: 50%;
        bottom: 60px;
        right: 15px;
        text-align: center;
    }
    #theCase>a img{
        width: 25px;
        position: absolute;
        top: 8px;
        left: 8px;
    }
</style>
