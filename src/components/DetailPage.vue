<template>
  <div class="detail_wapper">
    <div class="title">
      <h1>标题</h1>
    </div>
    <div class="content">
      <h2>内容</h2>
      <CarouselLamp></CarouselLamp>
    </div>
  </div>
</template>

<script>
import CarouselLamp from './CarouselLamp.vue';
export default {
  components: {
    CarouselLamp
  }
};
</script>

<style lang="less" scoped>
.detail_wapper {
  position: relative;
  overflow: hidden;
  div {
    margin: 30px 0;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
}
</style>