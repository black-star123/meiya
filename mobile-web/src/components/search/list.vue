<template>
    <div id="searchList">
        <div id="search">
            <div class="input">
                <span><img src="../../assets/search/search.png" alt="搜索"></span>
                <input type="search" placeholder="热搜：隆鼻 双眼皮" @keypress="starSearch" ref="input1">
                <span @click="del"><img src="../../assets/search/del.png" alt="删除"></span>
            </div>
        </div>
        <nav>
            <ul>
                <li @click="diaryclick" :class="{'active':index==1}">日记</li>
                <li @click="doctorclick" :class="{'active':index==2}">医生</li>
                <li @click="hospitalclick" :class="{'active':index==3}">医院</li>
                <li @click="questionclick" :class="{'active':index==4}">问答</li>
            </ul>
        </nav>
        <div>
            <div v-show="this.error">
                <diary v-if="index==1"></diary>
                <doctor v-if="index==2"></doctor>
                <hospital-list v-if="index==3"></hospital-list>
                <question v-if="index==4"></question>
            </div>
            <router-view v-show="!this.error"></router-view>
        </div>
    </div>
</template>

<script>
import diary from "../common/diary"
import doctor from "../common/doctor"
import hospitalList from "../common/hospitalList"
import question from "../question/index"
export default {
    name:'searchList',
    data(){
        return{
            index:1,
            error:true
        }
    },
    created(){
        console.log(this.$route.params.error);
        console.log(typeof(this.$route.params.error));
        if(this.$route.params.error){
            this.error=true
        }else{
            this.error=false;
        }
    
    },
    mounted(){
        this.$refs.input1.value=this.$route.params.messge
    },
    methods:{
        del(){
            this.$refs.input1.value='';
            console.log(this.error)
        },
        diaryclick(){
                this.index=1
        },
        doctorclick(){
            this.index=2;
        },
        hospitalclick(){
            this.index=3;
        },
        questionclick(){
            this.index=4;
        },
        starSearch(){
            console.log(this.$refs.input1.value),
            console.log(this.$route.params.error)
        }
    },
    components:{
        diary,doctor,hospitalList,question
    }
}
</script>

<style scoped>
    #searchList,html,body{
        height: 100%;
    }
    #search{
        padding: 8px 15px 0 15px;
        font-size: 13px;
    }
    #search .input{
        width: 97%;
        height: 41px;
        border-radius: 10px;
        background: rgb(245, 245, 245);
        box-sizing: border-box;
        border: 1px solid rgb(251, 251, 251);
        color: rgb(174, 174, 174);
        margin: 0 auto;
        padding:0 15px 0 15px;
    }
    #search .input span{
        width: 5%;
        display: inline-block;
        float: left;
        line-height: 39px;
    }
    #search .input span img{
        width: 16px;
        vertical-align: middle
    }
    #search .input input{
        outline: none;
        border: none;
        background: rgb(245, 245, 245);
        width: 87%;
        height: 39px;
        float: left;
        vertical-align: middle;
        margin-left: 3%;
    }
    /* 隐藏输入框默认× */
    #search .input input::-webkit-search-cancel-button{
        display: none
    }
    nav{
        padding: 0 15px;
    }
    nav ul{
        height: 70px;
        border-bottom: 1px solid rgb(227, 214, 249);
        width: 100%;
        box-sizing: border-box;
        padding-top: 13px;
    }
    nav ul li{
        display: inline-block;
        float: left;
        width: 17.3%;
        line-height: 40px;
        font-size: 15px;
        font-weight:bold;
        text-align: center;
    }
    nav ul li:not(:first-child){
        margin-left: 10.14%;
    }
    .active{
        color: rgb(170, 129, 223);
        border-bottom: 2px solid;
        transform: scale(1.1);
        transition: transform .25s
    }
</style>
