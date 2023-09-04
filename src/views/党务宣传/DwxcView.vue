<template>
  <div id="base" class="">
    <HeaderTab text="党务政策宣传"></HeaderTab>

    <!-- Unnamed (图片 ) -->
    <div id="u116" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u118" class="ax_default box_1">
      <div id="u118_div" class=""></div>
      <div id="u118_text" class="text">
        <p><span>党务宣传</span></p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u119" class="ax_default box_1">
      <img id="u119_img" class="img" src="@/assets/images/党务宣传/u119.svg" />
      <div id="u119_text" class="text">
        <p>
          <span>
            <router-link to="/dwxc/jsxc">纪律警示宣传</router-link>
          </span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u120" class="ax_default box_1">
      <div id="u120_div" class=""></div>
      <div id="u120_text" class="text">
        <p><span>党务政策宣传</span></p>
      </div>
    </div>

    <!-- Unnamed (形状) -->
    <div id="u121" class="ax_default box_1">
      <img id="u121_img" class="img" src="@/assets/images/党务宣传/u119.svg" />
      <div id="u121_text" class="text">
        <p>
          <span>
            <router-link to="/dwxc/hdzs">党组织活动展示</router-link>
          </span>
        </p>
      </div>
    </div>

    <!-- Unnamed (线段) -->
    <div id="u122" class="ax_default line">
      <img id="u122_img" class="img" src="@/assets/images/党务宣传/u122.svg" />
      <div
        id="u122_text"
        class="text"
        style="display: none; visibility: hidden"
      >
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u123" class="ax_default _一级标题">
      <div id="u123_div" class=""></div>
      <div id="u123_text" class="text">
        <p>
          <span class="con_left"
            >1、点击首页的“党务宣传”默认显示党务政策宣传中的内容</span
          >
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u124" class="ax_default _一级标题">
      <div id="u124_div" class=""></div>
      <div id="u124_text" class="text">
        <p><span class="con_left">2、显示形式</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u125" class="ax_default _一级标题">
      <!-- <div id="u125_div" class=""></div> -->
      <div
        id="u125_text"
        class="text"
        v-for="items in dwxcArr"
        :key="items.index"
      >
        <p>
          <span class="con_left">{{ items.dwxcTitle }}</span>
          <span class="con_right">{{ items.createTime.slice(0, 10) }}</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u126" class="ax_default _一级标题">
      <!-- <div id="u126_div" class=""></div> -->
      <div id="u126_text" class="text">
        <p>
          <span class="con_left">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          <span class="con_right">2023-05-31</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u127" class="ax_default _一级标题">
      <!-- <div id="u127_div" class=""></div> -->
      <div id="u127_text" class="text">
        <p>
          <span class="con_left">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          <span class="con_right">2023-05-30</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u128" class="ax_default _一级标题">
      <div id="u128_div" class=""></div>
      <div id="u128_text" class="text">
        <p><span class="con_left">3、点击链接后显示页面详情页</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u129" class="ax_default _图片_">
      <DetailPage style="text-align: center"></DetailPage>
    </div>
  </div>
</template>


<script>
import axios from "axios";
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
    return {
      dwxcArr: [],
    };
  },
  beforeMount() {
    this.getData();
    // this.handleArr();
  },
  methods: {
    async getData() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dwxclist")
        .then((res) => {
          this.dwxcArr = res.data.rows;
          console.log(this.dwxcArr);
        });
    },
    // handleArr() {
    //   for (var i = 0; i < this.dwxcArr.length; i++) {
    //     this.dwxcTitle = this.dwxcArr[i].dwxcTitle;
    //     this.dwxcTime = this.dwxcArr[i].createTime.slice(0, 10);
    //     this.dwxcContent = this.dwxcArr[i].dwxcContent;
    //   }
    //   console.log(this.dwxcArr[0].createTime);
    // },
  },
};
</script>


<style lang="less" scoped>
@import url("~@/styles/党务宣传.css");
</style>