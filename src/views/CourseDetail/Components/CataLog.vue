<template>
  <div class="cate_box">
    <div class="category">

      <!-- 遍历目录章节 一章一个ul-->
      <ul class="content"

        v-for="(item1, index1) in chapter_list"
        :key="item1.id">

        <h1>第{{index1 + 1}}章 &nbsp;{{item1.title}}</h1>

         <!-- 一集一个li -->
         <li class="sub_cate"
         v-for="(item2,index2) in item1.episode_list"
         :key="item2.id">

         <span class="sub_title">
             {{index1 + 1}}-{{index2 + 1}} &nbsp; {{item2.title}}
         </span>

         </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // 从父组件获取章节数据
  props: {
    chapter_list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// 目录包裹层设置边距
.cate_box {
  padding: 0 15px 50px;
  background-color: #fff;
  margin: 15px 0;
}

//每一章包裹层
.content {
  padding: 10px;
  // 章标题
  & h1 {
    font-size: 16px;
    width: 100%;
    margin-bottom: 15px;
    font-weight: bolder;
    // 设置章标题过长,超过行宽度省略隐藏
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

//集包裹层
.sub_cate {
  font-size: 12px;
  padding: 10px 0;
  //集标题
  .sub_title {
    // 设置集标题过长,超过行宽度省略隐藏
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>

