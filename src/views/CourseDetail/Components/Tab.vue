<template>
  <div>
    <!-- 简介+目录 -->
    <cube-tab-bar v-model="selectedLabel" show-slider>
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
      </cube-tab>
    </cube-tab-bar>

    <!--vue的过渡组件   动画效果-->
    <transition :duration="{ enter: 100, leave: 100 }" mode="out-in">

      <!--vue的动态组件   点击哪个就显示哪个页面-->
      <component
        :videoInfo="videoInfo"
        :chapter_list="chapter_list"

        :is="selectedLabel === '简介' ? 'Summary' : 'CataLog'"
      >
      </component>
    </transition>
  </div>
</template>

<script>
import Summary from "./Summary";
import CataLog from "./CataLog";

export default {
  components: {
    Summary,
    CataLog,
  },
  props: {
    videoInfo: {
      type: Object,
      required: true,
    },
    chapter_list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
        // 默认显示简介
      selectedLabel: "简介",
      tabs: [
        {
          label: "简介",
        },
        {
          label: "目录",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
