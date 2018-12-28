<template>
     <div id="diary">
                <div class="card">
                    <div>
                        <div>
                            <span></span>
                            <span>漂亮小姐姐</span>
                        </div>
                        <div>
                            <img src="../../assets/home/before.jpg" alt="前" preview="1">
                            <span>before</span>
                            <img src="../../assets/home/after.jpg" alt="后" preview="1">
                            <span>after</span>
                        </div>
                        <router-link to="/case" tag="a" class="router">
                            <p>人在最好的年纪没有去做你想做的事情对于以后你就会留下 很大的一个遗憾，年轻给我我们无限的可能，也给了我 ……</p>
                            <div>
                                <img src="../../assets/home/lable.png" alt="标签">
                                <small>瘦脸</small>
                                <small>双眼皮</small>
                            </div>
                            <div>
                                <a href="javescripy">
                                    <img src="../../assets/home/see.png" alt="浏览">
                                    <small>998</small>
                                </a>
                                <a href="/case#comment" @click.stop="onceclick">
                                    <img src="../../assets/home/comment.png" alt="评论">
                                    <small>1998</small>
                                </a>
                                <a href="javescript:void(0)" @click.stop="praise">
                                    <img src="../../assets/home/praise.png" alt="未点赞" v-show="!this.$store.getters.praiseimg">
                                    <img src="../../assets/home/red.png" alt="点赞" v-show="this.$store.getters.praiseimg">
                                    <small>{{count}}</small>
                                </a>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return{
            clicked:this.$store.getters.praiseimg,
        }
    },
    methods:{
        praise(){
            this.clicked=!this.clicked;
            if(this.clicked){
                this.$store.commit("addpraisenum")
            }else{
                this.$store.commit("reducepraisenum")
        }},
        onceclick(){
            return false
        }
    },
    computed:{
        count(){
            return this.$store.getters.praisenum
        }
    }
}
</script>

<style>
    #diary .card{
    padding: 4%;
    }
    #diary .card div div:first-child{
        position: relative;
        height: 45px;
    }
    #diary .card div div:first-child span:first-child{
        background: url(../../assets/home/people.png) no-repeat center;
        background-size: 200% 200%;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
    }
    #diary .card div div:first-child span:last-child{
        font-size: 14px;
        color: rgb(119, 119, 119);
        position: absolute;
        top: 5px;
        left: 38px;
    }
    #diary .card>div>div:nth-child(2){
        margin-bottom: 12px;
        float: left;
        position: relative;
        width: 100%;
    }
    #diary .card>div>div:nth-child(2) img{
        width: 48%;
        float: left;
    }
    #diary .card>div>div:nth-child(2) img:last-of-type{
        margin-left: 4%
    }
    #diary .card>div>div:nth-child(2) span{
        display: inline-block;
        color: white;
        width: 45px;
        line-height: 15px;
        background: rgba(0, 0, 0, .2);
        text-align: center;
        font-size: 8px;
        border-radius: 5px;
    }
    #diary .card>div>div:nth-child(2) span:first-of-type{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    #diary .card>div>div:nth-child(2) span:last-of-type{
        position: absolute;
        bottom: 0;
        left: 51.88%;
    }
    /* 去掉a标签点击背景色 */
    #diary .card div .router{
        -webkit-tap-highlight-color: transparent
    }
    #diary .card div .router p{
        width: 100%;
        font-size: 13px;
        margin-bottom: 14px;
        color: black;
    }
    #diary .card div .router div:first-of-type{
        margin-bottom: 7px;
    }
    #diary .card div .router div:first-of-type small{
        color: rgb(255, 214, 91);
        vertical-align: top;
    }
    #diary .card div .router div:last-of-type{
        height: 29px;
        border-bottom: 1px solid rgb(243, 247, 247)
    }
    #diary .card div .router div:last-of-type a:not(:first-child){
        margin-left: 16px;
    }
    #diary .card div .router div:last-of-type a{
        text-decoration: none;
        color: rgb(182, 182, 182);
    }
</style>
