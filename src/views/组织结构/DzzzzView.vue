<template>
  <div id="base" class="">
    <!-- <div class="header">
      <HeaderTab text="党组织职责"></HeaderTab>

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
              ><router-link to="/dzzzz"
                >党组织职责</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
      <div class="bigTitle">
        <h1>{{ this.zzTitle }}</h1>
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
          <div  id="u84_height" v-html="zzContent"></div>

          <div class="list">
            <!-- Unnamed (线段) -->
            <!-- <div id="u82" class="ax_default line">
              <img
                id="u82_img"
                class="img"
                src="@/assets/images/党组织职责/u81.svg"
              />
            </div> -->

            <!-- Unnamed (矩形) -->
            <!-- <div id="u80" class="ax_default _一级标题">
              <div id="u80_text" class="text">
                <p style="margin-top: 30px">
                  <span>时间：{{ this.publicDate }}</span>
                  <span>发布人：{{ this.publicName }}</span>
                </p>
              </div>
            </div> -->

            <!-- Unnamed (矩形) -->
            <!-- <div id="u83" class="ax_default _一级标题">
              <div id="u83_text" class="text">
                <p>
                  <span>发布人：{{ this.dyInfo.createBy }}</span>
                </p>
              </div>
            </div> -->
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
import FooterTab from "../../components/FooterTab.vue";
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
      console.log("执行了");
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
  // width: 100%;
  position: relative;
  // padding-left: 290px;
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
  // top: 500px;
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