<template>
  <div id="base" class="">
    <HeaderTab text="党员学习"></HeaderTab>

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
            ><router-link to="/dyxx">党员学习</router-link></el-breadcrumb-item
          >
          <el-breadcrumb-item>三会一课</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="list_left">
      <h3>党员学习</h3>
      <div class="imgcenter">
        <ul>
          <li>
            <router-link to="/dyxx">三会一课</router-link>
          </li>

          <li>
            <router-link to="/dyxx/szxx">素质学习</router-link>
          </li>

          <li>
            <router-link to="/dyxx/dsxx">党史学习</router-link>
          </li>

          <li>
            <router-link to="/dyxx/zyjn">专业技能</router-link>
          </li>
        </ul>
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

    <div class="newsList">
      <div class="dyw981_act">
        <ul class="dyw981_text">
          <li class="text" v-for="items in newsArr" :key="items.index">
            <a href="">{{ items.content }}</a>
            <span>{{ items.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="top">
      <DjBg></DjBg>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u242" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>
  </div>
</template>

<script>
// import DetailPage from "../../components/DetailPage.vue";
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import DjBg from "@/components/DjBg.vue";


export default {
  components: {
    // DetailPage,
    HeaderTab,
    FooterTab,
    HomeTabNew,
    DjBg
  },
  data() {
    return {
      newsArr: [
        {
          content: "新时代十年党内集中教育创新发展和经验总结",
          date: "2023-09-02",
        },
        {
          content: "深刻认识和把握“六个必须坚持”的立场观点方法",
          date: "2023-08-15",
        },
        {
          content: "如何高质量开展主题教育 系列问答 经验案例学习研讨",
          date: "2023-07-11",
        },
        {
          content: "感悟思想伟力 交出优异答卷",
          date: "2023-07-02",
        },
        {
          content: "坚持正确用人导向 努力营造干事创业良好氛围",
          date: "2023-06-12",
        },
        {
          content: "四次调研四堂党课，总书记指导主题教育深入开展",
          date: "2023-06-01",
        },
        {
          content: "深入开展主题教育 这几种书是重要学习材料",
          date: "2023-05-18",
        },
        {
          content: "中卫健全培养选拔优秀年轻干部工作机制",
          date: "2023-05-16",
        },
        {
          content: "中卫市激励优秀年轻干部勇站“C位”",
          date: "2023-04-19",
        },
        {
          content: "第十三届中国旅游产业博览会在津开幕”",
          date: "2023-04-10",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党员学习.css");

.top {
  position: absolute;
  width: 100%;
  top: 1248px;
}

.breadCrumb {
  // width: 100%;
  position: relative;
  padding-left: 198px;
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

.list_left {
  width: 254px;
  margin: 25px 200px;
}

.list_left h3 {
  border-bottom: 2px solid #e34300;
  background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat;
  font-size: 22px;
  font-weight: normal;
  color: #000;
  padding-bottom: 5px;
}

.list_left ul li {
  height: 38px;
  line-height: 38px;
  color: #e2e2e2;
  font-size: 16px;
  margin-top: 15px;
}

.list_left ul a {
  color: #575656;
  display: block;
  height: 38px;
  line-height: 38px;
  border: 1px solid #e2e2e2;
  background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat 35px -59px;
}
.list_left ul a:hover {
  border: 1px solid #e81b00;
  color: #fff;
  background: #e81b00 url(~@/assets/images/党员学习/icon2.jpg) no-repeat 35px -100px;
}
.list_left ul li a.focus {
  background: #e81b00;
  border: 1px solid #e81b00;
  color: #fff;
}

.newsList {
  width: 50%;
  position: relative;
  left: 529px;
  top: -300px;
  .dyw981_act {
    background: #fff;
    padding: 10px 0 40px;
    margin: 20px 0;
  }
  .dyw981_text {
    .text {
      width: 766px;
      font: 18px "微软雅黑";
      color: #292929;
      line-height: 32px;
      padding: 19px 0px;
      margin: 0 40px;
      float: left;
      border-bottom: 1px dashed #cdcdcd;
    }
    li {
      margin-bottom: 30px;
    }
  }
  .dyw981_text .text a {
    float: left;
  }
  .dyw981_text .text span {
    font: 14px "微软雅黑";
    color: #b1b1b1;
    line-height: 32px;
    float: right;
  }
}
</style>