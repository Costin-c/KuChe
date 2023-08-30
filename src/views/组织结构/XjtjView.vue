<template>
  <div id="base">
    <!-- 页头 -->
    <HeaderTab text="学籍统计"></HeaderTab>

    <!-- 表格区域 -->
    <div id="u88" class="ax_default box_1">
      <div class="tableCon">
        <TableTool></TableTool>
      </div>

      <div class="Paging">
        <PageNation></PageNation>
      </div>
    </div>

    <!-- 页尾 -->
    <div id="u86" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "@/components/FooterTab.vue";
import TableTool from "@/components/TableTool.vue";
import PageNation from "@/components/PageNation.vue";
export default {
  components: {
    HeaderTab,
    FooterTab,
    TableTool,
    PageNation,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/学籍统计.css");
</style>