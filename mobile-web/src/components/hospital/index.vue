<template>
    <div id="doctor">
        <div class="header">
            <div>全国<img src="../../assets/doctor/down.png" alt="箭头"></div>
            <div>智能排序<img src="../../assets/doctor/down.png" alt="箭头"></div>
        </div>
        <hospital-list/>
    </div>
</template>

<script>
import hospitalList from "../common/hospitalList"
export default {
    components:{
        hospitalList
    }
}
</script>

<style scoped>
    #doctor{
        font-size: 12px;
    }
    #doctor .header{
        background: rgb(245, 245, 245);
        width: 100%;
        padding: 15px 0;
        height: 50px;
        box-sizing: border-box
    }
    #doctor .header::after{
        clear: both;
    }
    #doctor .header div{
        display: inline-block;
        float: left;
        box-sizing: border-box;
        width: 50%;
        text-align: center;
        vertical-align: middle;
        font-size: 12.5px;
    }
    #doctor .header div:first-child{
        border-right: 1px solid rgb(227, 214, 249);
    }
    #doctor .header div img{
        vertical-align: middle;
        margin-left: 5px;
    }
</style>
