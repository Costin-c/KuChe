<template>
  <div id="base" class="">
    <!-- <HeaderTab text="党组织结构"></HeaderTab> -->

    <!-- <HomeTabNew></HomeTabNew> -->

    <div class="header">
      <div id="u3" class="ax_default _图片_"></div>

      <div class="tab">
        <HomeTabNew></HomeTabNew>
      </div>

      <!-- <div class="breadCrumb">
        <div class="title">
          <span>您当前所在的位置：</span>
        </div>
        <div class="tool">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item style="cu"
              ><router-link to="/">首页</router-link></el-breadcrumb-item
            >
            <el-breadcrumb-item
              ><router-link to="/dyfc"
                >党员风采展示</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div> -->
    </div>

    <div class="content">
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
              ><router-link to="/dzzjg"
                >党组织结构</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
      <!-- Unnamed (图片 ) -->
      <div id="u53" class="ax_default _图片_">
        <img
          id="u53_img"
          class="img"
          src="@/assets/images/党组织结构/u53.jpg"
        />
      </div>
    </div>

    <div class="top">
      <DjBg></DjBg>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u54" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>
  </div>
</template>

<script>
// import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import DjBg from "@/components/DjBg.vue";

export default {
  components: {
    FooterTab,
    // HeaderTab,
    HomeTabNew,
    DjBg,
  },
};
</script>

<style lang="less" scoped>
.top {
  position: absolute;
  width: 100%;
  top: 1048px;
}
.form_sketch {
  border-color: transparent;
  background-color: transparent;
}
#base {
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

#u53_img {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1101px;
  height: 621px;
}
#u53 {
  border-width: 0px;
  position: relative;
  left: 50%;
  top: 36px;
  margin-left: -550px;
  width: 1101px;
  height: 621px;
  display: flex;
}

#u54 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 1100px;
  width: 100%;
  height: 57px;
  display: flex;
}

.breadCrumb {
  // width: 100%;
  position: relative;
  // padding-left: 208px;
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

.content {
  position: relative;
  width: 1109px;
  margin: 0 auto;
}
#u3 {
  background-color: #c8161d;
  width: 100%;
  height: 300px;
  display: flex;
  background-image: url(~@/assets/images/首页/head.png);
  background-size: 100%;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>