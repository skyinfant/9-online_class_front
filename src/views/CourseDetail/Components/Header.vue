<template>
<div>
    <header>
        <!-- 视频详情顶部的标题 -->
        <div class="header">
            <!-- 后退图标《 -->
            <span @click="$router.back(-1)">
                <i class="cubeic-back"></i>
            </span>
            <!-- 标题 -->
            <div class="title">{{videoInfo.title}}</div>
        </div>
    </header>
</div>
    
</template>

<script>
export default {
    props: {
        videoInfo: {
            type: Object,
            required: true
        }
    },

 //用于调试
    mounted() {
         console.log(this.videoinfo)
    }
}
</script>



<style lang="scss" scoped>
.header {
    display: flex;//flex左右布局
    background-color: #07111b;
    padding: 10px 20px;
    color: #fff;
}  
// 返回箭头
.cubeic-back {
    color: #fff;
    margin-right:5px;
}
//视频标题
.title {
    font-size: 16px;
    width: 80%;
    //超出省略
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>