// 轮播图
<template>
  <div>
      <!-- 遍历banners数组，生成轮播图 -->
    <cube-slide :data="banners">
      <cube-slide-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.img" style="width: 100%" />
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>


<script>

// 把轮播图组件向外暴露
export default {

  // 声明一个banners数组，用来接收父组件传递的轮播数据
  props: {
    banners: {
      type: Array,
      require: true,
    },
  },
};


</script>

<style lang="scss" scoped>
</style>