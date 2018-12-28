<template>
    <div id="question">
        <div>
            <ul>
                <router-link to="/questionList" tag="li">
                    <div>
                        <h6>玻尿酸隆鼻可以管多久？</h6>
                        <p>你好，玻尿酸在注射之后，会被人体不断的吸收代谢，最终 让玻尿酸分子之间的交联度降低，从而失效，这段时间一般 维持6-8个月，也是比较常见的玻尿酸维持效果时间......</p>
                        <div>
                            <span>
                                <img src="../../assets/home/see.png" alt="浏览">
                                <span>998</span>
                            </span>
                            <span @click.stop="praise">
                                <img src="../../assets/home/praise.png" alt="点赞" v-show="!clicked">
                                <img src="../../assets/home/red.png" alt="点赞" v-show="clicked" >
                                <span>899</span>
                            </span>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'question',
    data(){
        return{
            clicked:this.$store.getters.questionimg
        }
    },
    methods:{
        praise(){
            this.clicked=!this.clicked;
            if(this.clicked){
                this.$store.commit("addquestionimg")
            }else{
                this.$store.commit("reducequestionimg")
        }},
    },
}
</script>

<style scoped>
    #question{
        padding-left: 4%;
        padding-right: 4%;
        font-size: 13px;
    }
    #question div ul li{
        margin-top: 20px;
        border-bottom: 1px solid rgb(243, 247, 247);
        height: 130px;
    }
    #question div ul li div{
        display: block;
        height: 130px;
        text-decoration: none;
        color: rgb(103, 103, 103);
    }
    #question div ul li div h6{
        font-size: 16px;
        color: black;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    #question div ul li div p{
        margin-top: 8px;
    }
    #question div ul li div div{
        font-size: 11px;
        margin-top: 8px;
        color: rgb(103, 103, 103);
    }
    #question div ul li div div img,#question div ul li div span{
        vertical-align: middle
    }
    #question div ul li div div>span:last-of-type{
        margin-left: 10px;
    }
</style>
