<template>
    <div id="home">
        <header>
            <div class="toptitle">
                <h3>美丫网</h3>
            </div>
            <div class="input">
                <router-link to="/city" tag="div" class="select">成都<span></span></router-link>
                <span></span>
                <div><span><img src="../../assets/home/search.png" alt="搜索"></span><router-link to="/search" tag="input" type="text" placeholder="大家都在搜：双眼皮 隆鼻"/></div>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/my">
                            <img src="../../assets/home/my.png" alt="我的">
                            <p>我的</p>
                        </router-link> 
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="../../assets/home/consult.png" alt="咨询">
                            <p>咨询</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/hospital">
                            <img src="../../assets/home/hospitai.png" alt="医院">
                            <p>医院</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/doctor">
                            <img src="../../assets/home/doctor.png" alt="医生">
                            <p>医生</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/question">
                            <img src="../../assets/home/answer.png" alt="问答">
                            <p>问答</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </header>
        <div id="content">
            <div>
                <span></span><strong>变美记</strong><span></span>
            </div>
        </div>
        <footer id="footer">
            <nav :class="{'navfix':isfix}">
                <div>
                    <ul>
                        <li v-for="(item,index) in list" :key="index" @click="active(index)" :class="{'now':index==nowindex}">{{item.title}}</li>
                    </ul>
                </div>
                <div @click="isshow">全部</div>
            </nav>
            <div :class="{'allnav':true,'modalshow':show}" @click="istrue">
                <ul>
                    <li v-for="(item,index) in list" :key="index" @click="active(index)">
                        <div>
                            {{item.title}}
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 清除浮动 -->
            <div class="clear"></div>
            <diary/>
        </footer>
    </div>
</template>

<script>
import diary from "../common/diary"

export default {
    name:"home",
    data(){
        return{
            list:[
                {"title":"推荐"},
                {"title":"眼部"},
                {"title":"鼻部"},
                {"title":"瘦脸"},
                {"title":"自体脂肪"},
                {"title":"标签"},
                {"title":"推荐"},
                {"title":"推荐"},
                {"title":"推荐"},
                {"title":"推荐"},
            ],
            nowindex:0,
            isfix:false,
            show:false
        }
    },
    components:{
        diary
    },
    mounted(){
        window.addEventListener("scroll",this.watchScroll)
        // window.scroll(0,0)
    },
    methods:{
        active(num){
            this.nowindex=num
        },
        watchScroll(){
            var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
            if(scrollTop>246){
                this.isfix=true
            }else{
                this.isfix=false
            }
        },
        totop(){
            window.scroll(0,0)
        },
        isshow(){
            this.show=true
        },
        istrue(){
            this.show=false
        }
    }
}
</script>

<style scoped>

/* 导航标签选中样式 */
.now{
    border-bottom: 2px solid rgb(170, 129, 223);
    font-weight: bolder;
    transition: all .25s
}
/* 中部导航吸顶样式 */
.navfix{
    position: fixed;
    top: 0;
    z-index: 999;
    background: white;
    padding-top: 5px;
    width: 100%;
}
/* 中部导航标签模态弹出展示 */
.allnav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    opacity: 0;
    z-index: 1122;
    transform: scale(1.1);
    visibility: hidden;
    transition: opacity .25s,transfrom .25s,visibility .25s;
}
.allnav ul{
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
}
/* modal显示样式 */
.modalshow{
    visibility: visible !important;
    opacity: 1 !important;
    transform: scale(1) !important;
    transition: visibility .25s,opacity .25s,transfrom 0 linear .25s
}
.allnav ul li{
    margin: 10px;
    float: left;
    width: 26%;
    box-sizing: border-box;
    font-size: 13px;
}
.allnav ul li div{
    display: inline-block;
    line-height: 26px;
    text-align: center;
    border-radius: 15px;
    background: rgb(226, 120, 121);
    padding: 0 10px;
    color: white;
}
#home header{
    background:url(../../assets/home/headerBg.png) no-repeat center;
    background-size: 100% 100%;
    background-position: 0 0;
    height: 220px;
}
/* 清除浮动 */
.clear{
    clear: both;
    zoom: 1;
}
.toptitle{
    line-height: 60px;
    width: 100%;
    font-size: 18px;
    text-align: center;
    color:white;
}
.input{
    height: 40px;
    border:1px solid rgb(227, 214, 249);
    border-radius: 10px;
    width: 80%;
    margin: 0px auto;
    padding-left: 22px;
    background: white;
    position: relative;
    top: 0;
}
.input>span{
    display: inline-block;
    width: 1%;
    border-left: 1px solid rgb(184, 184, 184);
    height: 20px;
    box-sizing: border-box;
    float: left;
    position: absolute;
    top: 10px;
}
.input div{
    display: inline-block;
}
.input .select{
    width: 23%;
    box-sizing: border-box;
    float: left;
    font-size: 15px;
    line-height: 40px;
    position: relative;
    font-weight: bold;
}
.input .select span{
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
    line-height: 40px;
    position: absolute;
    top:18px;
    left:40px;
}
.input div:last-child{
    width: 76%;
    float: left;
    position: relative;
}
.input div:last-child span{
    margin-left: 10px;
}
.input div:last-child span img{
    display: inline-block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 12px
}
.input div:last-child input{
    border: none;
    line-height: 40px;
    outline: none;
    margin-left: 19px;
    position: relative;
}
/* 处理首页Topbar显示问题 */
#home{
    margin-top: -50px !important;
    position: relative;
    z-index: 1000;
    background: white
}
#home header nav ul{
    position: absolute;
    top: 120px;
    min-width: 375px;
    width: 100%;
}
#home header nav ul li{
    float: left;
    width: 20%;
    text-align: center
}
#home header nav ul li a{
    text-decoration: none;
    color: black;
    height: 57px;
    display: inline-block;
}
#home header nav ul li img{
    display: inline-block;
    width: 36px;
    height: 36px;
}
#home header nav ul li p{
    font-size: 13px;
    font-weight: bold
}
#content{
    text-align: center;
    margin-top: 19px;
    margin-bottom: 25px;
}
#content span{
    display: inline-block;
    width: 31px;
    border-top: 1px solid black;
    line-height: 67px;
    vertical-align: middle
}
#content strong{
    margin: 15px;
    font-weight: 500;
    font-size: 18px;
}
#footer nav{
    height: 30px;
    border-bottom: 1px solid rgb(243, 247, 247)
}
#footer nav div::-webkit-scrollbar{
    display: none
}
#footer nav div:first-child{
    width: 82%;
    display: inline-block;
    float: left;
    overflow-x: scroll;
    margin-right: 3%
}
#footer nav div:first-child ul{
    width: 5120px;
}
#footer nav div:first-child ul li{
    font-size: 14px;
    float: left;
    margin-left: 29px;
    font-weight: bold
}
#footer nav div:first-child ul li:first-child{
    margin-left: 13px;
}
#footer nav div:last-child{
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    width: 14%;
    float: left;
    box-shadow: -7px 0 5px -4px rgb(200, 220, 220)
}
</style>
