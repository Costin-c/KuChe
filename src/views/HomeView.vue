<template>
  <div id="home">
    <!-- Unnamed (图片 ) -->

    <div class="header">
      <div id="u3" class="ax_default _图片_">
        <div class="u3_con">
          <div class="con_right">
            <p>
              <span>{{ todayDate }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="tab">
        <HomeTabNew></HomeTabNew>
      </div>
    </div>

    <div class="midContent">
      <div class="breadCrumb">
        <div class="title">
          <span>您当前所在的位置：</span>
        </div>
        <div class="tool">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item style="cu"
              ><router-link to="/">首页</router-link></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
      <!-- Unnamed (图片 ) -->
      <div id="u0" class="ax_default _图片_">
        <div class="carousel">
          <!-- 轮播图 -->
          <CarouselLamp></CarouselLamp>
        </div>
        <div class="jobList">
          <div class="jobHerader">
            <img width="115%" src="@/assets/images/首页/job.png" alt="" />
            <div class="jobMore">
              <router-link to="/job">更多&gt;</router-link>
            </div>
          </div>
          <ul>
            <li v-for="(items, index) in jobList" :key="index">
              <router-link
                :to="{
                  name: 'homeDetail',
                  params: {
                    gzdtId: items.gzdtId,
                  },
                }"
                ><span class="left">{{ items.gzdtTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u24" class="ax_default _图片_">
        <img id="u24_img" class="img" src="@/assets/images/首页/u24.png" />
        <div
          id="u24_text"
          class="text"
          style="display: none; visibility: hidden"
        >
          <p></p>
        </div>
      </div>

      <div class="titleList">
        <!-- Unnamed (图片 ) -->
        <div id="u25" class="ax_default _图片_">
          <img id="u25_img" class="img" src="@/assets/images/首页/u1.png" />
          <div class="more">
            <router-link to="/dyxx">更多&gt;</router-link>
          </div>
          <div
            id="u25_text"
            class="text"
            style="display: none; visibility: hidden"
          ></div>
        </div>

        <!-- Unnamed (图片 ) -->
        <div id="u26" class="ax_default _图片_">
          <img id="u26_img" class="img" src="@/assets/images/首页/u26.png" />
          <div
            id="u26_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u27" class="ax_default _文本段落">
          <div id="u27_text" class="text">
            <p><span>党员学习</span></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <!-- <div id="u28" class="ax_default _文本段落">
          <div id="u28_div" class=""></div>
          <div id="u28_text" class="text">
            <p><span>三会一课</span></p>
          </div>
        </div> -->

        <!-- Unnamed (矩形) -->
        <!-- <div id="u29" class="ax_default _文本段落">
          <div id="u29_div" class=""></div>
          <div id="u29_text" class="text">
            <p><span>素质学习</span></p>
          </div>
        </div> -->

        <!-- Unnamed (矩形) -->
        <!-- <div id="u30" class="ax_default _文本段落">
          <div id="u30_div" class=""></div>
          <div id="u30_text" class="text">
            <p><span>党史学习</span></p>
          </div>
        </div> -->

        <!-- Unnamed (矩形) -->
        <!-- <div id="u31" class="ax_default _文本段落">
          <div id="u31_div" class=""></div>
          <div id="u31_text" class="text">
            <p><span>技能学习</span></p>
          </div>
        </div> -->
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u2" class="ax_default _图片_">
        <div class="jobList">
          <ul>
            <li v-for="(items, index) in shArr" :key="index">
              <router-link
                :to="{
                  name: 'detail',
                  params: {
                    dyxxId: items.dyxxId,
                  },
                }"
              >
                <span class="left">{{ items.dyxxTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="jobList">
          <ul>
            <li v-for="(items, index) in szArr" :key="index">
              <router-link
                :to="{
                  name: 'detail',
                  params: {
                    dyxxId: items.dyxxId,
                  },
                }"
              >
                <span class="left">{{ items.dyxxTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="best">
        <!-- Unnamed (图片 ) -->
        <div id="u33" class="ax_default _图片_">
          <img id="u33_img" class="img" src="@/assets/images/首页/u33.png" />
          <div
            id="u33_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u34" class="ax_default _文本段落">
          <div id="u34_div" class=""></div>
          <div id="u34_text" class="text">
            <p>
              <router-link style="color: #ffe820" to="/dyfc"
                ><span>“最美党员”风采</span></router-link
              >
            </p>
          </div>
        </div>

        <!-- Unnamed (图片 ) -->
        <div id="u1" class="ax_default _图片_">
          <img id="u1_img" class="img" src="@/assets/images/首页/u1.png" />
          <div class="more">
            <router-link to="/dyfc">更多&gt;</router-link>
          </div>
          <div
            id="u1_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>
        <!-- Unnamed (图片 ) -->
        <div id="u35" class="ax_default _图片_">
          <img id="u35_img" class="img" src="@/assets/images/首页/u35.png" />
          <div
            id="u35_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u36" class="ax_default _文本段落">
          <div id="u36_div" class=""></div>
          <div id="u36_text" class="text">
            <p><span>党员风采</span></p>
          </div>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u37" class="ax_default _图片_">
        <div class="jobList">
          <ul>
            <li v-for="items in fcArr1" :key="items.index">
              <router-link
                :to="{
                  name: 'dyfcDetail',
                  params: {
                    dyId: items.dyId,
                  },
                }"
              >
                <span class="left">{{ items.dyfcTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="jobList">
          <ul>
            <li v-for="items in fcArr2" :key="items.index">
              <router-link
                :to="{
                  name: 'dyfcDetail',
                  params: {
                    dyId: items.dyId,
                  },
                }"
              >
                <span class="left">{{ items.dyfcTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="dzzjg">
        <!-- Unnamed (图片 ) -->
        <div id="u42" class="ax_default _图片_">
          <img id="u42_img" class="img" src="@/assets/images/首页/u42.png" />
          <div
            id="u42_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u43" class="ax_default _文本段落">
          <div id="u43_div" class=""></div>
          <div id="u43_text" class="text">
            <p>
              <router-link style="color: #ffe820" to="/dzzjg"
                ><span>“党组织”基本结构</span></router-link
              >
            </p>
          </div>
        </div>
        <!-- Unnamed (图片 ) -->
        <div id="u38" class="ax_default _图片_">
          <img id="u38_img" class="img" src="@/assets/images/首页/u1.png" />
          <div class="more">
            <router-link to="/dwxc">更多&gt;</router-link>
          </div>
          <div
            id="u38_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (图片 ) -->
        <div id="u39" class="ax_default _图片_">
          <img id="u39_img" class="img" src="@/assets/images/首页/u35.png" />
          <div
            id="u39_text"
            class="text"
            style="display: none; visibility: hidden"
          >
            <p></p>
          </div>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u40" class="ax_default _文本段落">
          <div id="u40_div" class=""></div>
          <div id="u40_text" class="text">
            <p><span>党务宣传</span></p>
          </div>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u41" class="ax_default _图片_">
        <div class="jobList">
          <ul>
            <li v-for="items in dwArr" :key="items.index">
              <router-link
                :to="{
                  name: 'dwDetail',
                  params: {
                    dwxcId: items.dwxcId,
                  },
                }"
              >
                <span class="left">{{ items.dwxcTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="jobList">
          <ul>
            <li v-for="items in jlArr" :key="items.index">
              <router-link
                :to="{
                  name: 'dwDetail',
                  params: {
                    dwxcId: items.dwxcId,
                  },
                }"
              >
                <span class="left">{{ items.dwxcTitle }}</span>
                <span class="right">{{ items.createTime.slice(0, 10) }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u11" class="ax_default _图片_">
        <FooterTab></FooterTab>
      </div>
    </div>
  </div>
</template>

<script>
import FooterTab from "@/components/FooterTab.vue";
import HomeTabNew from "@/components/HomeTabNew.vue";
import CarouselLamp from "@/components/CarouselLamp.vue";
import DjBg from "@/components/DjBg.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    FooterTab,
    HomeTabNew,
    DjBg,
    CarouselLamp,
  },
  data() {
    return {
      todayDate: "",
      arrList: [
        {
          title: "学思践悟推动主题教育深化内化转化",
          date: "2023-05-08",
        },
        {
          title: "学思践悟推动主题教育深化内化转化",
          date: "2023-05-08",
        },
        {
          title: "库车快递行业党委揭牌成立",
          date: "2023-04-20",
        },
        {
          title: "全区学习贯彻习近平新时代中国特色社会主义...",
          date: "2023-03-15",
        },
        {
          title: "开展基层动员大会全面发展",
          date: "2023-03-06",
        },
        {
          title: "《榜样》专题节目",
          date: "2023-05-08",
        },
        {
          title: "《榜样》专题节目",
          date: "2023-05-08",
        },
      ],
      jobList: [],
      learnArr: [],
      shArr: [],
      szArr: [],
      dwxcArr: [],
      dwArr: [],
      jlArr: [],
      fcArrSum: [],
      fcArr1: [],
      fcArr2: [],
    };
  },
  beforeMount() {
    this.getTime();
    this.getJobList();
    this.getLearnList();
    this.getDwxcList();
    this.getFcList();
  },
  methods: {
    getTime() {
      var date = new Date(); //创建日期对象
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      var arr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      var day = date.getDay();
      this.todayDate = year + "年" + month + "月" + dates + "号 " + arr[day];
    },
    getJobList() {
      const ins = axios.create();
      ins
        .get(
          "http://www.tsllhf.cn:8078/news/webrequest/gzdtlist?orderByColumn=createTime&isAsc=desc"
        )
        .then((res) => {
          // console.log(res.data.rows);
          this.jobList = res.data.rows;
        });
    },
    async getLearnList() {
      const ins = axios.create();
      await ins
        .get(
          "http://www.tsllhf.cn:8078/news/webrequest/dyxxlist?orderByColumn=createTime&isAsc=desc"
        )
        .then((res) => {
          this.learnArr = res.data.rows;
          console.log(this.learnArr);
        });
      this.addshArr();
      this.addszArr();
    },
    addshArr() {
      for (let i = 0; i < this.learnArr.length; i++) {
        if (this.learnArr[i].dyxxType === "三会一课") {
          this.shArr.push(this.learnArr[i]);
          // console.log(this.learnArr[i]);
        }
      }
      // console.log(this.shArr);
    },
    addszArr() {
      for (let i = 0; i < this.learnArr.length; i++) {
        if (this.learnArr[i].dyxxType === "素质学习") {
          this.szArr.push(this.learnArr[i]);
          // console.log(this.learnArr[i]);
        }
      }
      // console.log(this.szArr);
    },
    async getDwxcList() {
      const ins = axios.create();
      await ins
        .get(
          "http://www.tsllhf.cn:8078/news/webrequest/dwxclist?orderByColumn=createTime&isAsc=desc"
        )
        .then((res) => {
          this.dwxcArr = res.data.rows;
          console.log(this.dwxcArr);
        });
      this.adddwArr();
      this.addjlArr();
    },
    adddwArr() {
      for (let i = 0; i < this.dwxcArr.length; i++) {
        if (this.dwxcArr[i].dwxcType === "党务政策宣传") {
          this.dwArr.push(this.dwxcArr[i]);
          // console.log(this.learnArr[i]);
        }
      }
      console.log(this.dwArr);
    },
    addjlArr() {
      for (let i = 0; i < this.dwxcArr.length; i++) {
        if (this.dwxcArr[i].dwxcType === "党组织活动展示") {
          this.jlArr.push(this.dwxcArr[i]);
          // console.log(this.learnArr[i]);
        }
      }
      console.log(this.jlArr);
    },
    async getFcList() {
      const ins = axios.create();
      await ins
        .get(
          "http://www.tsllhf.cn:8078/news/webrequest/dyfclist?orderByColumn=createTime&isAsc=desc"
        )
        .then((res) => {
          this.fcArrSum = res.data.rows;
          console.log(this.fcArrSum);
        });
      // 分别放入列表中
      this.fcArrSum.forEach((item, index) => {
        // 前一半
        if (index < this.fcArrSum.length / 2) this.fcArr1.push(item);
        // 后一半
        else this.fcArr2.push(item);
      });
      console.log(this.fcArr1);
      console.log(this.fcArr2);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/首页.less");

#u0 .carousel {
  width: 30%;
  margin-top: 20px;
}
.jobList {
  margin-top: 20px;
  font-size: 15px;
  width: 30%;
  position: relative;
  overflow: hidden;
  ul {
    list-style-position: outside;
    list-style: circle;
    li {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      list-style: circle;
      a {
        display: flex;
      }
      .left {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 370px;
        text-align: left;
      }
    }
  }
  .jobHerader {
    // margin-bottom: 16px;
    overflow: hidden;
  }
}
.top {
  position: absolute;
  width: 100%;
  top: 2192px;
}
.breadCrumb {
  position: relative;
  padding-left: 205px;
  padding-top: 15px;
  overflow: hidden;
  z-index: 99;
  width: 1109px;
  .title {
    float: left;
  }
  .tool {
    margin-top: 4px;
  }
}

.midContent {
  position: relative;
  width: 1500px;
  margin: 0 auto;
  .titleList {
    position: relative;
    top: -700px;
  }

  .public {
    position: relative;
    top: -644px;
  }
}
.jobMore {
  // display: inline-block ;
  float: right;
  position: relative;
  top: -36px;
  right: 15px;
  overflow: hidden;
}
.more {
  margin-top: 7px;
  margin-right: 15px;
  z-index: 66;
}
</style>