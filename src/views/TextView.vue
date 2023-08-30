<template>
  <div id="text">
    <!-- <StatusStatistics></StatusStatistics> -->

    <!-- <DataUp></DataUp> -->

    <HomeTab></HomeTab>


    <PageNation></PageNation>

    <!-- <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
// import StatusStatistics from "@/components/StatusStatistics.vue";
// import DataUp from "@/components/DataUp.vue";
import HomeTab from "@/components/HomeTab.vue";
import PageNation from "@/components/PageNation.vue";

export default {
  components: {
    // StatusStatistics,
    // DataUp,
    HomeTab,
    PageNation
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
</script>>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>