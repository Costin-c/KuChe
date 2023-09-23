<template>
  <div id="base" class="">
    <div class="header">
      <HeaderTab text="党员风采展示"></HeaderTab>

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
              ><router-link to="/dyfc"
                >党员风采展示</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
    </div>

    <div class="fcCon">
      <div class="list_left">
        <h3>党员</h3>
        <div class="imgcenter">
          <ul>
            <li
              v-for="items in nameArr"
              :key="items.index"
              @click="getNameIndex"
            >
              <router-link to="">{{ items.dyName }}</router-link>
            </li>
            <!-- <li>
            <router-link to="">刘军</router-link>
          </li>
          <li>
            <router-link to="">阿司古丽·阿布拉</router-link>
          </li>
          <li>
            <router-link to="">阿不力孜·艾则孜</router-link>
          </li>
          <li>
            <router-link to="">亚库甫·沙吾提</router-link>
          </li>
          <li>
            <router-link to="">阿斯叶木·艾则孜</router-link>
          </li>
          <li>
            <router-link to="">吐松·艾海提</router-link>
          </li>
          <li>
            <router-link to="">莫依东·莫明</router-link>
          </li>
          <li>
            <router-link to="">依不拉音·托合提</router-link>
          </li>
          <li>
            <router-link to="">阿斯古丽·阿西木</router-link>
          </li>
          <li>
            <router-link to="">勾文英</router-link>
          </li> -->
          </ul>
        </div>
      </div>

      <div id="u300" class="ax_default line">
        <img
          id="u300_img"
          class="img"
          src="@/assets/images/党员学习/u247.svg"
        />
        <div
          id="u300_text"
          class="text"
          style="display: none; visibility: hidden"
        >
          <p></p>
        </div>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u67" class="ax_default _图片_">
        <img
          id="u67_img"
          class="img"
          src="@/assets/images/党员风采展示/u68.jpg"
        />
        <div
          id="u67_text"
          class="text"
          style="display: none; visibility: hidden"
        >
          <p></p>
        </div>
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u68" class="ax_default text_field">
        党员姓名：{{ this.dyxm }}
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u69" class="ax_default text_field">
        人生格言：{{ this.rsgy }}
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u73" class="ax_default text_field">
        负责职务：{{ this.fzzw }}
      </div>

      <!-- Unnamed (文本框) -->
      <div id="u74" class="ax_default text_field">领导简介</div>

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
        <div id="u76_div" class="">
          <p>
            <span> 1.主持公司全盘工作； </span>
          </p>
          <p>
            <span>2.认真贯彻党和国家方针、政策，执行集团公司的各项决议；</span>
          </p>
          <p>
            <span
              >3.把握公司发展方向，制定公司整体发展战略规划，组织实施年度生产经营计划；</span
            >
          </p>
          <p>
            <span
              >4.不定期主持召开支部会议和经理办公会议；根据权限和议事规则对“三重一大”进行民主决策；</span
            >
          </p>
          <p>
            <span
              >5.紧紧围绕企业中心任务，认真做好职工思想政治工作，抓好党的建设和党员队伍建设，充分发挥党组织在企业发展中的政治核心作用、战斗堡垒作用和党员队伍的先锋模范作用；
            </span>
          </p>
          <p>
            <span
              >6.进一步完善工作体系，定期开展安全生产检查等工作，针对存在的问题，及时采取措施整改，确保年度目标任务的完成；
            </span>
          </p>
          <p><span>7.实现国有资产保值和增值，提高企业经济效益。 </span></p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u58" class="ax_default _图片_">
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
      nameArr: [],
      imgSrc: "",
      dyxm: "刘军",
      fzzw: "党支部书记",
      rsgy: "不忘初心，牢记使命",
      dyid: "1696164108193976321",
    };
  },
  created() {
    this.getNameList();
    // this.getNameById(this.dyid);
  },
  methods: {
    async getNameList() {
      const ins = axios.create();
      ins
        .get("http://www.tsllhf.cn:8078/news/webrequest/dangyuanlist")
        .then((res) => {
          console.log(res.data.rows);
          this.nameArr = res.data.rows;
        });
    },
    async getNameById(dyid) {
      const ins = axios.create();
      ins
        .get(`http://www.tsllhf.cn:8078/news/webrequest/dangyuaninfo/${dyid}`)
        .then((res) => {
          console.log(res.data.data);
          // this.nameArr = res.data.rows;
        });
    },
    getNameIndex() {
      // for (let i = 0; i < this.nameArr.length; i++) {
      //   if (this.dyid === this.nameArr[i].dyid) {
      //     return i;
      //   }
      // }
      console.log(this.nameArr);
    },
  },
};
</script>
<style lang="less" scoped>
@import url("~@/styles/党员风采展示.css");

.top {
  position: absolute;
  width: 100%;
  top: 1148px;
}
.breadCrumb {
  position: relative;
  padding-left: 250px;
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
  margin: 25px 250px;
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
</style>