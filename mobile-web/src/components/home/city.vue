<template>
    <div id="city">
        <div class="header">当前定位<strong>成都</strong></div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in items" @click="active(index)" :class="{'now':index==nowindex}" :key="index" :id="index">{{item.name}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'city',
    data(){
        return{
            items:[
                {"id":1,"name":"热门城市"},
                {"id":2,"name":"北京"},
                {"id":3,"name":"上海"},
                {"id":4,"name":"深圳"},
                {"id":5,"name":"广州"},
                {"id":6,"name":"湖南"},
                {"id":7,"name":"安徽"},
                {"id":8,"name":"四川"},
                {"id":9,"name":"重庆"},
                {"id":10,"name":"新疆"},
                {"id":11,"name":"西藏"},
            ],
            list:[
                {"id":3,"name":"上海"},
                {"id":4,"name":"深圳"},
                {"id":5,"name":"广州"},
                {"id":6,"name":"湖南"},
                {"id":7,"name":"安徽"},
            ],
            nowindex:0
        }
    },
    methods:{
        active(num){
            this.nowindex=num
        }
    }
}
</script>

<style scoped>
#city .header{
    line-height: 50px;
    border-bottom: 1px solid rgb(243, 247, 247);
    font-size: 13px;
    padding-left: 10px;
}
#city .header strong{
    margin-left: 15px;
}
#city .content ul:first-child{
    width: 38.4%;
    float: left;
}
#city .content{
    font-size: 13px;
}
#city .content ul:first-child li{
    line-height: 50px;
    text-align: center;
    background: rgb(245, 245, 245);
    font-weight: bold;
}
#city .content ul:last-child{
    width: 61.6%;
    float: left;
}
#city .content ul:last-child li{
    line-height: 49px;
    text-align: center;
    border-bottom: 1px solid rgb(243, 247, 247);
    box-sizing: border-box;
}
.now{
    color: rgb(170, 129, 223);
    border-left: 5px solid rgb(170, 129, 223);
    background: white !important;
    font-size: 15px;
    transition: all .25s
}
</style>
