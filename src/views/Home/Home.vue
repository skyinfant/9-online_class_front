
<template>
  <div>
    <!-- 轮播图组件 -->
    <home-banner :banners="banners"></home-banner>

    <!-- 视频列表组件 -->
    <video-list :courseList="courseList"></video-list>

    <!-- 底部导航栏组件 选项卡-->
    <common-footer></common-footer>
  </div>
</template>

<script>
// 组件引入
import HomeBanner from "./Components/Banner";
import VideoList from "./Components/VideoList";
import CommonFooter from "@/components/CommonFooter";

import { getBanner, getVideoList } from "@/api/getData.js";

export default {
  // 注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter,
  },

  data() {
    return {
      banners: [],
      courseList: [],
    };
  },

  methods: {
    async getBannerData() {
      try {
        const result = await getBanner();
        this.banners = result.data.data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    async getVlist() {
      try {
        const result = await getVideoList();
        this.courseList = result.data.data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getBannerData();
    this.getVlist();
  },
};
</script>

<style lang="scss" scoped>
</style>