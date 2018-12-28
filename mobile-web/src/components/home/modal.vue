<template>
    <div>
        <div @click="isshow">全部</div>
        <div :class="{'allnav':true,'show':show}">
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <div>
                            {{item.title}}
                        </div>
                    </li>
                    <button @click="this.show=!this.show">关闭</button>
                </ul>
                
            </div>
    </div>
</template>

<script>
export default {
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
        show:false,
        // close:true
    }
},
methods:{
    isshow(){
        this.show=true
        // this.close=false
    }
}
}
</script>

<style scoped>
/* MODAL显示样式 */

.allnav{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.2);
    transition: opacity .25s,visibility .25s,transfrom 0 linear .25s;
}
.allnav ul{
    
    height: 200px;
    width: 500px;
    text-align: center;
    background: white;
    z-index: 1111;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.show{
    visibility: visible;
    opacity: 1;
    transform: translate(1);
    transition: all .25s;
}
.allnav ul li{
    margin: 10px;
    float: left;
    width:50px;
    box-sizing: border-box;
}
.allnav ul li div{
    display: inline-block;
    line-height: 26px;
    text-align: center;
    border-radius: 15px;
    background: rgb(226, 120, 121);
    padding: 0 15px;
    color: white;
}
</style>
