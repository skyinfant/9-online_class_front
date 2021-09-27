<template>
  <div>
    <img :src="videoInfo.summary" class="summary" />
  </div>
</template>

<script>
export default {
  // 接收父组件传来的数据
  props: {
    videoInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
  width: 100%;
  padding-bottom: 50px;
  margin: 15px 0;
}
</style>