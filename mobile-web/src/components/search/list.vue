<template>
    <div id="searchList">
        <div id="search">
            <div class="input">
                <span><img src="../../assets/search/search.png" alt="搜索"></span>
                <input id="oinput" type="text" placeholder="隆鼻">
                <span @click="del"><img src="../../assets/search/del.png" alt="删除"></span>
            </div>
        </div>
        <nav>
            <ul>
                <li @click="index=1" :class="{'active':index==1}">日记</li>
                <li @click="index=2" :class="{'active':index==2}">医生</li>
                <li @click="index=3" :class="{'active':index==3}">医院</li>
                <li @click="index=4" :class="{'active':index==4}">问答</li>
            </ul>
        </nav>
        <div>
            <diary v-show="index==1"></diary>
            <doctor v-show="index==2"></doctor>
            <hospital-list v-show="index==3"></hospital-list>
            <question v-show="index==4"></question>
            <sorry v-show="index==5"></sorry>
        </div>
    </div>
</template>

<script>
import diary from "../common/diary"
import doctor from "../common/doctor"
import hospitalList from "../common/hospitalList"
import question from "../question/index"
import sorry from "./404"

export default {
    name:'searchList',
    data(){
        return{
            index:1
        }
    },
    methods:{
        del(){
            document.getElementById("oinput").value=''
        }
    },
    components:{
        "diary":diary,
        "doctor":doctor,
        "hospitalList":hospitalList,
        "question":question,
        "sorry":sorry
    },
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
        margin-left: 3%
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
        border-bottom: 2px solid
    }
</style>
