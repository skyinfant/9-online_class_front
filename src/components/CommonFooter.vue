<template>
  <div class="tab">
    <!-- 底部选项卡 selectedLabelDefault就是默认选中的选项 -->
    <cube-tab-bar v-model="selectedLabelDefault" @click="changeHandler">
      <!--:value="item.path" 是传入changeHandler的参数-->
      <!-- 遍历tabs，得到选项卡的选项 -->
      <cube-tab
        v-for="item in tabs"
        :icon="item.icon"
        :label="item.label"
        :key="item.path"
        :value="item.path"
      >
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      //选项数组
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
          path: "/",
        },
        {
          label: "我的订单",
          icon: "cubeic-like",
          path: "/order",
        },
        {
          label: "个人中心",
          icon: "cubeic-person",
          path: "/personal",
        },
      ],
    };
  },

  methods: {
    // 点击tab跳转
    changeHandler(path) {
      //this.$route.path 是当前路由
      //path !== this.$route.path的意思是点击的不是当前的页面才跳转
      if (path != this.$route.path) {
        // push就是跳到该页面,并且向history栈添加⼀个新的记录
        this.$router.push(path);
      }
    },
  },

  //在模板渲染成html前调⽤，通常初始化某些属性值，然后再渲染成视图
  created() {
    //默认选择的路由，比如刷新当前页面，需要重新进到浏览器的路由
    // this.$route.path  当前的路由
    // 即是原先在某个页面，然后刷新浏览器后回到该页面
    this.selectedLabelDefault = this.$route.path;
  },
};
</script>

<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
}
.cube-tab_active {
  color: #3bb149;
}
</style>
