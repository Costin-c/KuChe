<template>
  <div id="base" class="">
    <!-- <div class="header">
      <HeaderTab text="关于我们"></HeaderTab>

      <HomeTabNew></HomeTabNew>
    </div> -->

    <div class="header">
      <div id="u3" class="ax_default _图片_"></div>

      <div class="tab">
        <HomeTabNew></HomeTabNew>
      </div>
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
              ><router-link to="/about"
                >关于我们</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
      <div class="bigTitle">
        <h1>关于我们</h1>
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
          <div id="u84_height">
            <p style="line-height: 40px">
              库车惠源农村供水有限公司党支部成立于2018年5月，隶属库车水务投资集团有限公司党委，现有党员15名，其中：正式党员13名、预备党员2名、女性党员7名、少数民族党员13名、在职党员15名。党支部高标准严要求，相继开展了“两学一做”学习教育、“不忘初心、牢记使命”主题教育，党史学习教育等党的主题活动，教育党员职工坚定理想信念，不断改进作风，激励担当作为，永葆政治本色，坚守为库车市农村居民供好水服好务的初心使命。作为民生保障企业，库车惠源农村供水有限公司致力于围绕业务抓党建，抓好党建促工作，高质量推进“党建+业务”的融合发展，走出一条“党建+业务+互联网”特色党建道路。下一步，公司将深化“智慧水务”建设，完善供水“一张网”，推进城乡供水“一体化”，提升城乡供水安全保障能力，逐步形成智能化运行、科学化调度、精准化服务，向智慧化供水企业迈进。
            </p>
          </div>
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
// import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "@/components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import DjBg from "@/components/DjBg.vue";
import axios from "axios";

export default {
  components: {
    FooterTab,
    // HeaderTab,
    HomeTabNew,
    DjBg,
  },
  data() {
    return {
      zzTitle: "",
      zzContent: "",
      textHeight: 1200,
      showFooter: false,
    };
  },
  beforeMount() {
    this.getDzzInfo();
  },
  methods: {
    async getDzzInfo() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dyzzlist")
        .then((res) => {
          console.log(res);
          this.zzTitle = res.data.rows[0].zzTitle;
          this.zzContent = res.data.rows[0].zzContent;
        });
      // console.log(this.zzContent);
      let imgs = document
        .getElementById("u84_height")
        .getElementsByTagName("img");
      if (imgs.length == 0) this.getEleHeight();
      else
        for (var i = 0; i < imgs.length; i++)
          imgs[i].onload = () => {
            if (i == imgs.length) this.getEleHeight();
          };
    },
    async getEleHeight() {
      this.showFooter = true;
      const footer = document.getElementsByClassName("footer")[0];
      footer.style.top =
        document.getElementById("u84_height").clientHeight + 300 + "px";
    },
  },
};
</script>
  
  <style lang="less" scoped>
@import url("~@/styles/党组织职责.css");

.top {
  position: relative;
}

.breadCrumb {
  position: relative;
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

.bigTitle {
  margin-top: 30px;
}

.footer {
  position: relative;
  width: 100%;
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