<template>
  <div id="base" class="">
    <!-- <div class="header">
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
            <el-breadcrumb-item
              ><router-link to="/dyfc">{{
                this.$route.params.dyId
              }}</router-link></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
    </div> -->

    <div class="header">
      <div id="u3" class="ax_default _图片_"></div>

      <div class="tab">
        <HomeTabNew></HomeTabNew>
      </div>
    </div>

    <div class="fcCon">
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
            <el-breadcrumb-item
              ><router-link to="/dyfc">{{
                this.$route.params.dyId
              }}</router-link></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>
      <div class="list_left">
        <h3>党员</h3>
        <div class="imgcenter">
          <ul>
            <li
              v-for="items in nameArr"
              :key="items.index"
              @click="changeContent"
            >
              <router-link
                :to="{
                  name: 'dyfcDetail',
                  params: {
                    dyId: items.dyId,
                  },
                }"
                >{{ items.dyId }}</router-link
              >
            </li>
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

      <div class="list_right" v-html="dyfcContent"></div>

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
      nameArr: [],
      dyfcInfo: [],
      dyId: "",
      dyfcContent: "",
    };
  },
  beforeMount() {
    this.getNameList();

    this.dyId = this.$route.params.dyId;
    
    console.log(this.$route.params);
    this.getNameById(this.dyId);
    // this.getNameById(this.dyid);
  },
  methods: {
    async getNameList() {
      const ins = axios.create();
      ins
        .get("http://www.tsllhf.cn:8078/news/webrequest/dyfclist")
        .then((res) => {
          // console.log(res.data.rows);
          this.nameArr = res.data.rows;
        });
    },
    async getNameById(dyId) {
      const ins = axios.create();
      ins
        .get(`http://www.tsllhf.cn:8078/news/webrequest/dyfclist?dyId=${dyId}`)
        .then((res) => {
          this.dyfcInfo = res.data.rows;
          this.dyfcContent = this.dyfcInfo[0].dyfcContent;
          // console.log(this.dyfcContent);
        });
    },
    changeContent() {
      this.getNameById(this.$route.params.dyId);
      this.dyfcContent =  this.dyfcInfo[0].dyfc_content
      // console.log("执行了");
    },
  },
};
</script>
<style lang="less" scoped>
@import url("~@/styles/党员风采展示.css");

.top {
  // position: absolute;
  width: 100%;
  // top: 1148px;
}
.breadCrumb {
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

.fcCon {
  position: relative;
  width: 100%;
  overflow: hidden;
  // height: 800px;
  .list_left {
    width: 254px;
    margin: 25px 0px 25px 200px;
    float: left;
    h3 {
      border-bottom: 2px solid #e34300;
      background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat;
      font-size: 22px;
      font-weight: normal;
      color: #000;
      padding-bottom: 5px;
    }
  }
  .list_right{
    width: 50%;
    float: left;
    margin-left: 120px;
    margin-top: 30px;
    height: 1000px;
    text-align: left;
  }
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