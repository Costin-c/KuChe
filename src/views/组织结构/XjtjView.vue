<template>
  <div id="base">
    <div class="header">
      <!-- 页头 -->
      <HeaderTab text="学籍统计"></HeaderTab>

      <HomeTabNew></HomeTabNew>

      <div class="breadCrumb">
        <div class="title">
          <span>您当前所在的位置：</span>
        </div>
        <div class="tool">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item style="cu"
              ><router-link to="/">首页</router-link></el-breadcrumb-item
            >
            <el-breadcrumb-item
              ><router-link to="/xjtj"
                >学籍统计</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="xjCon">
      <!-- 表格区域 -->
      <div id="u88" class="ax_default box_1">
        <div class="tableCon">
          <TableTool></TableTool>
        </div>

        <div class="Paging">
          <!-- <PageNation></PageNation> -->
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- 页尾 -->
      <div id="u86" class="ax_default _图片_">
        <FooterTab></FooterTab>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "@/components/FooterTab.vue";
import TableTool from "@/components/TableTool.vue";
// import PageNation from "@/components/PageNation.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import DjBg from "@/components/DjBg.vue";

export default {
  components: {
    HeaderTab,
    FooterTab,
    TableTool,
    // PageNation,
    HomeTabNew,
    DjBg,
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

.breadCrumb {
  // width: 100%;
  position: relative;
  padding-left: 233px;
  padding-top: 15px;
  overflow: hidden;
  z-index: 99;
  .title {
    float: left;
  }
  .tool {
    margin-top: 4px;
  }
}

.footer{
  position: relative;
  width: 100%;
  top: 950px;
}
</style>