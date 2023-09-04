<template>
  <div id="base" class="">
    <HeaderTab text="党员风采展示"></HeaderTab>
    <!-- Unnamed (图片 ) -->
    <div id="u56" class="ax_default _图片_">
      <!-- <img
        id="u56_img"
        class="img"
        src="@/assets/images/党员风采展示/u56.png"
      /> -->
      <div id="u56_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u58" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>

    <!-- Unnamed (文本框) -->
    <!-- <div id="u60" class="ax_default text_field">
      <div id="u60_div" class="">党务学习情况</div>
      <input
        id="u60_input"
        type="text"
        value="党务学习情况"
        class="u60_input"
      />
    </div> -->

    <!-- Unnamed (文本框) -->
    <!-- <div id="u61" class="ax_default text_field">
      <div id="u61_div" class="">惠访聚情况</div>
      <input id="u61_input" type="text" value="惠访聚情况" class="u61_input" />
    </div> -->

    <!-- Unnamed (矩形) -->
    <!-- <div id="u62" class="ax_default text_field">
      <div id="u62_div" class=""></div>
      <div id="u62_text" class="text">
        <p><span>更多&gt;&gt;</span></p>
      </div>
    </div> -->

    <!-- Unnamed (矩形) -->
    <!-- <div id="u63" class="ax_default text_field">
      <div id="u63_div" class=""></div>
      <div id="u63_text" class="text">
        <p><span>更多&gt;&gt;</span></p>
      </div>
    </div> -->

    <!-- Unnamed (矩形) -->
    <div id="u64" class="ax_default box_1">
      <div id="u64_div" class=""></div>
      <div id="u64_text" class="text">
        <p><span>全体党员</span></p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u65" class="ax_default box_1">
      <div id="u66_div" class="">
        <div id="u65_text" class="text">
          <p>
            <span>李四</span>
          </p>
        </div>
      </div>
    </div>

      <!-- <ul>
        <li v-for="name in nameArr" :key="name">{{ name }}</li>
      </ul> -->
    <!-- Unnamed (矩形) -->
    <div id="u66" class="ax_default box_1">
      <div id="u66_div" class="">
        <div id="u66_text" class="text">
          <p>
            <span>张三</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u67" class="ax_default _图片_">
      <img
        id="u67_img"
        class="img"
        src="@/assets/images/党员风采展示/u67.png"
      />
      <div id="u67_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u68" class="ax_default text_field">
      <div id="u68_div" class="">
        党员姓名：{{ dyxm }}
      </div>
      <!-- <input
        id="u68_input"
        type="text"
        value="党员姓名：张xx"
        class="u68_input"
      /> -->
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u69" class="ax_default text_field">
      <div id="u69_div" class="">
        人生格言：{{ rsgy }}
      </div>
      <!-- <input
        id="u69_input"
        type="text"
        value="人生格言：不忘初心，牢记使命"
        class="u69_input"
      /> -->
    </div>

    <!-- Unnamed (形状) -->
    <div id="u70" class="ax_default box_1">
      <div id="u66_div" class="">
        <div id="u70_text" class="text">
          <p>
            <span>王五</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <!-- <div id="u71" class="ax_default box_1">
      <div id="u66_div" class="">
        <div id="u71_text" class="text">
          <p>
            <span>党员姓名</span>
          </p>
        </div>
      </div>
    </div> -->

    <!-- Unnamed (形状) -->
    <div id="u72" class="ax_default box_1">
      <div id="u66_div" class="">
        <div id="u72_text" class="text">
          <p>
            <span>赵六</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u73" class="ax_default text_field">
      <div id="u73_div" class="">
        负责职务：{{ fzzw }}
      </div>
      <!-- <input
        id="u73_input"
        type="text"
        value="负责职务：书记xx"
        class="u73_input"
      /> -->
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u74" class="ax_default text_field">
      <div id="u74_div" class="">领导简介</div>
      <!-- <input id="u74_input" type="text" value="领导简介" class="u74_input" /> -->
      <!-- <div class="u74_input">领导简介</div> -->
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u75" class="ax_default _图片_">
      <img
        id="u75_img"
        class="img"
        src="@/assets/images/党员风采展示/u75.png"
      />
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u76" class="ax_default box_1">
      <div id="u76_div" class=""></div>
      <div id="u76_text" class="text">
        <p><span>简介内容</span></p>
      </div>
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
  data() {
    return {
      nameArr: ["党员姓名", "党员姓名", "党员姓名", "党员姓名", "党员姓名"],
      imgSrc: "",
      dyxm: "张xx",
      fzzw: "书记",
      rsgy: "不忘初心，牢记使命",
    };
  },
};
</script>
<style lang="less" scoped>
@import url("~@/styles/党员风采展示.css");
</style>