<template>
    <div>
        <div id="search">
            <div class="input">
                <span><img src="../../assets/search/search.png" alt="搜索"></span>
                <form><input id="oinput" type="search" :placeholder="this.thetext" v-model="text" ref="inputval" @keypress="enter"></form>
                <span @click="del"><img src="../../assets/search/del.png" alt="删除"></span>
            </div>
        </div>
        <div class="clear"></div>
        <div class="hot">
            <h6><span><img src="../../assets/search/hot.png" alt="热门"></span>热门搜索</h6>
            <ul v-for="(item,index) in list" :key="index" @click="add(item)">
                 <li>{{item.name}}</li>
            </ul>
        </div>
        <div class="clear"></div>
        <div class="hot">
            <h6><span><img src="../../assets/search/history.png" alt="历史记录"></span>历史记录<span class="lable" @click="clearHistory"><img src="../../assets/search/clear.png" alt="清空"></span></h6>
            <ul  v-for="(item,index) in items" :key="index">
                 <li @click="historycilck(item)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>
 
 <script>
 import local from "@/store/store"
 export default {
     name:'search',
     data(){
         return{
             list:[
                 {"name":"面部吸脂","id":1,"path":"/list"},
                 {"name":"水光针","id":2,"path":"/list"},
                 {"name":"瘦脸","id":3,"path":"/list"},
                 {"name":"隆胸","id":4,"path":"/list"},
                 {"name":"双眼皮","id":5,"path":"/list"},
                 {"name":"美颜","id":6 ,"path":"/list"},
                 {"name":"磨皮","id":7 ,"path":"/list"},
                 {"name":"隆鼻","id":8,"path":"/list"},
             ],
             items:local.fetch(),
             text:'',
             thetext:"大家都在搜：双眼皮 隆鼻"
         }
     },
     methods:{
         del(){
             document.getElementById('oinput').value=""
         },
         add(e){
            let isHave=false;
            for(let i=0;i<this.items.length;i++){
                if(this.items[i].id==e.id||this.items[i].name==e.name){
                    isHave=true
                }
            };
            if(isHave==false){
                this.items.push({name:e.name,id:e.id,path:e.path})
            };
            local.save(this.items);
            this.$router.push({
                name:"list",
                params:{
                    messge:e.name,
                    error:true
                }})
         },
         clearHistory(){
             this.items=[];
             localStorage.clear();
         },
         historycilck(e){
             this.$router.push({
                name:"list",
                params:{
                    messge:e.name,
                    error:true
                }})
         },
         enter(evevt){
             let _this=this
             let istrue=false;
             let have=false;
             if(event.keyCode==13){
                //  清除默认行为
                 evevt.preventDefault();
                //  判断输入框是否为空
                 if(this.$refs.inputval.value!=""){
                   //  判断输入关键词在列表中是否存在
                     for(let i=0;i<_this.list.length;i++){
                        if(_this.list[i].name==_this.$refs.inputval.value){
                            have=true;
                            // 判断历史记录是否存在这个标签
                            for(let i=0;i<_this.items.length;i++){
                                if(_this.items[i].name!=_this.$refs.inputval.value){
                                istrue=true
                                }
                            }
                            // 判断历史记录是否为空
                            if(_this.items.length==0){
                                istrue=true
                            }
                            //  如果历史记录里面没有就保存到本地仓库
                            if(istrue==true){
                                this.items.push({name:_this.$refs.inputval.value,path:"/list"});
                                local.save(_this.items);
                            }
                            _this.$router.push({
                                name:"list",
                                params:{
                                    messge:_this.$refs.inputval.value,
                                    error:true
                                }})
                            }
                    }
                    // 如果没有找到页面就进入404页面
                    if(have==false){
                        _this.$router.push({
                            name:"sorry",
                            params:{
                                messge:_this.$refs.inputval.value,
                                error:false
                            }})
                        console.log("error")
                    }
                    }else{
                        _this.thetext="请输入搜索关键词！！"
                    }
             }
         }
     }
 }
 </script>
 
 <style scoped>
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
    #search .input input::-webkit-search-cancel-button{
        display: none
    }
    .hot{
        margin-top: 40px;
        font-size: 13px;
    }
    .hot h6{
        margin-left: 15px;
    }
    .hot h6 span:first-child{
        margin-right: 5px;
    }
    .lable{
        float: right;
        margin-right: 15px;
    }
    .hot h6 span img{
        width: 15px;
        vertical-align: top;
    }
    .hot ul li{
        line-height: 30px;
        display: inline-block;
        float: left;
        background: rgb(246, 246, 246);
        border-radius: 15px;
        text-align: center;
        padding:0 15px;
        margin:10px 0 0 15px;
    }
    .clear{
        clear: both;
        zoom: 1;
    }
 </style>
 