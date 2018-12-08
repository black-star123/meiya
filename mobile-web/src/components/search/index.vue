<template>
    <div>
        <div id="search">
            <div class="input">
                <span><img src="../../assets/search/search.png" alt="搜索"></span>
                <input type="text" placeholder="大家都在搜：双眼皮 隆鼻">
                <span><img src="../../assets/search/del.png" alt="删除"></span>
            </div>
        </div>
        <div class="clear"></div>
        <div class="hot">
            <h6><span><img src="../../assets/search/hot.png" alt="热门"></span>热门搜索</h6>
            <ul>
                 <li>面部吸脂</li>
                 <li>水光针</li>
                 <li>瘦脸</li>
                 <li>隆胸</li>
                 <li>面部吸脂</li>
                 <li>水光针</li>
                 <li>瘦脸</li>
                 <li>隆胸</li>
            </ul>
        </div>
        <div class="clear"></div>
        <div class="hot">
            <h6><span><img src="../../assets/search/history.png" alt="历史记录"></span>历史记录<span class="lable"><img src="../../assets/search/clear.png" alt="清空"></span></h6>
            <ul>
                 <li>面部吸脂</li>
                 <li>水光针</li>
            </ul>
        </div>
    </div>
</template>
 
 <script>
 export default {
     name:'search'
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
 