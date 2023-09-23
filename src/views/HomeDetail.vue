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
                >工作情况</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="bigTitle">
        <h1>{{ this.gzdtInfo.gzdtTitle }}</h1>
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
          <p id="u84_height">
            <span>
              {{ formattedData }}
            </span>
          </p>
          <!-- <p>
            <span
              >会前，与会人员先后来到玉奇吾斯塘乡拜什格然木村农产品展销会场及村级事务管理项目阵地、阿拉哈格镇库纳斯村网格精细化范点、齐满镇阿曼托格拉克村宣传阵地就基层党组织建设及群众工作、“访惠聚”工作等内容进行了现场观摩。</span
            >
          </p> -->
          <div class="bottom20" :v-if="0">
            <img :src="imgSrc" alt="" />
          </div>
          <p :v-if="0">
            <span>
              <!-- {{ publicData }} -->
            </span>
          </p>

          <div class="list">
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
                <p style="margin-top: 30px">
                  <span>时间：{{ formattedDate }}</span>
                  <span>发布人：{{ this.gzdtInfo.createBy }}</span>
                  <!-- this.dyInfo.createTime.slice(0, 10) -->
                </p>
                <!-- <p>
                  <span>发布人：{{ this.dyInfo.createBy }}</span>
                </p> -->
              </div>
            </div>

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
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "@/components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import formatDate from "@/utils/formatDate";
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
      publicDate: "",
      gzdtInfo: [],
      gzdtId: "",
      imgSrc: "",
      gzdtContent: "",
      createTime: "",
      textHeight: 800,
    };
  },
  mounted() {
    // this.getDyInfo();
    console.log(this.$route);
    this.gzdtId = this.$route.params.gzdtId;
    this.getGzdtId(this.$route.params.gzdtId);
  },
  methods: {
    formatDate,
    async getGzdtId() {
      await axios
        .get(`http://www.tsllhf.cn:8078/news/webrequest/gzdt/${this.gzdtId}`)
        .then((res) => {
          // console.log(res);
          this.gzdtInfo = res.data.data;
          console.log(this.gzdtInfo);
          this.gzdtContent = this.gzdtInfo.gzdtContent;
          this.createTime = this.gzdtInfo.createTime;
        });

      this.getEleHeight();

      const footer = document.getElementsByClassName("footer")[0];
      footer.style.top = this.textHeight + 300 + "px";
    },
    // async getDyInfo() {
    //   await axios
    //     .get("http://www.tsllhf.cn:8078/news/webrequest/dyxxlist")
    //     .then((res) => {
    //       // console.log(res);
    //       this.dyInfo = res.data.rows;
    //     });

    //   console.log(this.dyInfo);
    // },

    getEleHeight() {
      const div = document.getElementById("u84_height");
      console.log(div.clientHeight);
      this.textHeight = div.clientHeight;
      return this.textHeight;
    },
  },
  computed: {
    formattedData() {
      return this.gzdtContent.replace(/<.+?>/g, "");
    },
    formattedDate() {
      return this.createTime.slice(0, 10);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党组织职责.css");

.top {
  position: relative;
  // width: 100%;
  // top: 1748px;
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
.content {
  position: relative;
  width: 1109px;
  margin: 0 auto;
}
.footer {
  position: relative;
  width: 100%;
  // top: 500px;
}
</style>