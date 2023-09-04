<template>
  <div id="base" class="">
    <HeaderTab text="党组织结构"></HeaderTab>

    <!-- Unnamed (图片 ) -->
    <div id="u53" class="ax_default _图片_">
      <img id="u53_img" class="img" src="@/assets/images/党组织结构/u53.png" />
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u54" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";
export default {
  components: {
    FooterTab,
    HeaderTab,
  },
};
</script>

<style lang="less" scoped>
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
  position: absolute;
  left: 50%;
  top: 266px;
  margin-left: -550px;
  width: 1101px;
  height: 621px;
  display: flex;
}

#u54 {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 900px;
  width: 100%;
  height: 57px;
  display: flex;
}
</style>