<template>
  <div class="header_wapper">
    <div class="header_con">
      <div class="header_text">
        <p><span><h2>{{ text }}</h2></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
.header_con {
  border-width: 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 255px;
  overflow: hidden;
  // background-color: #c41909;
  background-image: url(~@/assets/images/首页/bg4.jpg);
  background-size: 100%;
  .header_text {
    position: absolute;
    font-family: "Arial Negreta", "Arial Normal", "Arial", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #ffffff;
  }
}
</style>