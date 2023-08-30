<template>
  <div id="base" class="">
    <HeaderTab text="党员学习"></HeaderTab>

    <!-- Unnamed (图片 ) -->
    <div id="u242" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u244" class="ax_default box_1">
      <div id="u244_div" class=""></div>
      <div id="u244_text" class="text">
        <p><span>党员学习</span></p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u245" class="ax_default box_1">
      <img id="u245_img" class="img" src="@/assets/images/党务宣传/u119.svg" />
      <div id="u245_text" class="text">
        <p>
          <span>
            <router-link to="/dyxx/szxx">素质学习</router-link>
          </span>
        </p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u246" class="ax_default box_1">
      <div id="u256_div" class=""></div>
      <div id="u246_text" class="text">
        <p><span>党史学习</span></p>
      </div>
    </div>

    <!-- Unnamed (线段) -->
    <div id="u247" class="ax_default line">
      <img id="u247_img" class="img" src="@/assets/images/党员学习/u247.svg" />
      <div
        id="u247_text"
        class="text"
        style="display: none; visibility: hidden"
      >
        <p></p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u248" class="ax_default box_1">
      <img id="u248_img" class="img" src="@/assets/images/党务宣传/u119.svg" />
      <div id="u248_text" class="text">
        <p>
          <span>
            <router-link to="/dyxx/zyjn">专业技能</router-link>
          </span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u249" class="ax_default _一级标题">
      <div id="u249_div" class=""></div>
      <div id="u249_text" class="text">
        <p><span class="con_left">2、显示形式</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u250" class="ax_default _一级标题">
      <div id="u250_div" class=""></div>
      <div id="u250_text" class="text">
        <p>
          <span class="con_left">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          <span class="con_right">2023-05-31</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u251" class="ax_default _一级标题">
      <div id="u251_div" class=""></div>
      <div id="u251_text" class="text">
        <p>
          <span class="con_left">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          <span class="con_right">2023-05-30</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u252" class="ax_default _一级标题">
      <div id="u252_div" class=""></div>
      <div id="u252_text" class="text">
        <p>
          <span class="con_left">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          <span class="con_right">2023-06-01</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u253" class="ax_default _一级标题">
      <div id="u253_div" class=""></div>
      <div id="u253_text" class="text">
        <p><span class="con_left">3、点击链接后显示页面详情页</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u254" class="ax_default _图片_">
      <DetailPage style="text-align: center"></DetailPage>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u255" class="ax_default _一级标题">
      <div id="u255_div" class=""></div>
      <div id="u255_text" class="text">
        <p><span class="con_left">1、默认显示“三会一课”内容</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u256" class="ax_default box_1">
      <img id="u246_img" class="img" src="@/assets/images/党务宣传/u119.svg" />
      <div id="u256_text" class="text">
        <p>
          <span>
            <router-link to="/dyxx">三会一课</router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import DetailPage from "../../components/DetailPage.vue";
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";

export default {
  components: {
    DetailPage,
    HeaderTab,
    FooterTab,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党员学习.css");
#u246 {
  color: #fff;
}
</style>