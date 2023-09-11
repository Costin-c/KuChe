<template>
  <div id="base" class="">
    <div class="header">
      <HeaderTab text="党组织职责"></HeaderTab>

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
              ><router-link to="/dzzzz"
                >党组织职责</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="bigTitle">
        <h1>习近平总书记谈开展主题教育的主要考量</h1>
      </div>

      <!-- Unnamed (线段) -->
      <div id="u81" class="ax_default line">
        <img
          id="u81_img"
          class="img"
          src="@/assets/images/党组织职责/u81.svg"
        />
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u84" class="ax_default _一级标题">
        <div id="u84_text" class="text">
          <p>
            <span>
              7月16日，库车市组织召开2022年上半年“访惠聚”驻村工作暨群众工作推进会。
              <!--  -->
            </span>
          </p>
          <p>
            <span
              >会前，与会人员先后来到玉奇吾斯塘乡拜什格然木村农产品展销会场及村级事务管理项目阵地、阿拉哈格镇库纳斯村网格精细化范点、齐满镇阿曼托格拉克村宣传阵地就基层党组织建设及群众工作、“访惠聚”工作等内容进行了现场观摩。</span
            >
          </p>
          <div class="bottom20">
            <img src="@/assets/images/党组织职责/u84.png" alt="" />
          </div>
          <p>
            <span>
              {{ publicData }}
            </span>
          </p>
        </div>
      </div>

      <!-- Unnamed (线段) -->
      <div id="u82" class="ax_default line">
        <img
          id="u82_img"
          class="img"
          src="@/assets/images/党组织职责/u81.svg"
        />
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u80" class="ax_default _一级标题">
        <div id="u80_text" class="text">
          <p>
            <span>时间：{{ publicDate }}</span>
          </p>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u83" class="ax_default _一级标题">
        <div id="u83_text" class="text">
          <p>
            <span>发布人：{{ publicName }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u78" class="ax_default _图片_">
        <FooterTab></FooterTab>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import DjBg from "@/components/DjBg.vue";
import axios from "axios";

export default {
  components: {
    FooterTab,
    HeaderTab,
    HomeTabNew,
    DjBg,
  },
  data() {
    return {
      publicName: "xxx",
      publicDate: "2023-5-31",
      publicData: `“学习贯彻新时代中国特色社会主义思想是新时代新征程开创事业发展新局面的根本要求。”

近期出版的《求是》杂志刊发习近平总书记重要文章《在二十届中央政治局第四次集体学习时的讲话》。在这篇重要文章中，习近平总书记深刻阐释开展主题教育的主要考量。“学习贯彻新时代中国特色社会主义思想是新时代新征程开创事业发展新局面的根本要求。”

近期出版的《求是》杂志刊发习近平总书记重要文章《在二十届中央政治局第四次集体学习时的讲话》。在这篇重要文章中，习近平总书记深刻阐释开展主题教育的主要考量。“学习贯彻新时代中国特色社会主义思想是新时代新征程开创事业发展新局面的根本要求。”

近期出版的《求是》杂志刊发习近平总书记重要文章《在二十届中央政治局第四次集体学习时的讲话》。在这篇重要文章中，习近平总书记深刻阐释开展主题教育的主要考量。“学习贯彻新时代中国特色社会主义思想是新时代新征程开创事业发展新局面的根本要求。”`,
      dyInfo: [],
    };
  },
  created() {
    // this.getDyInfo();
  },
  methods: {
    async getDyInfo() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dangyuanlist")
        .then((res) => {
          // console.log(res);
          this.dyInfo = res.data.rows;
        });

      console.log(this.dyInfo);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党组织职责.css");

.top {
  position: absolute;
  width: 100%;
  top: 1748px;
}

.breadCrumb {
  // width: 100%;
  position: relative;
  padding-left: 208px;
  padding-top: 24px;
  overflow: hidden;
  z-index: 99;
  .title {
    float: left;
  }
  .tool {
    margin-top: 4px;
  }
}

.bigTitle {
  margin-top: 30px;
}
</style>