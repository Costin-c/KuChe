<template>
  <div id="base" class="">
    <!-- <div class="header">
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
              ><router-link to="/dyxx"
                >党员学习</router-link
              ></el-breadcrumb-item
            >
            <el-breadcrumb-item>素质学习</el-breadcrumb-item>
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

    <div class="leaCon">
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
              ><router-link to="/dyxx"
                >党员学习</router-link
              ></el-breadcrumb-item
            >
            <el-breadcrumb-item>素质学习</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="wrapper">
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
                <router-link to="/dyxx/dwzs">党务知识</router-link>
              </li>

              <li>
                <router-link to="/dyxx/zyjn">专业技能</router-link>
              </li>

              <li>
                <router-link to="/dyxx/zsk">知识库</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- Unnamed (线段) -->
        <div id="u247" class="ax_default line">
          <img
            id="u247_img"
            class="img"
            src="@/assets/images/党员学习/u247.svg"
          />
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
              <li class="text" v-for="items in szArr" :key="items.index">
                <router-link
                  :to="{
                    name: 'detail',
                    params: {
                      dyxxId: items.dyxxId,
                    },
                  }"
                >
                  <span class="leftCon">{{ items.dyxxTitle }}</span>
                  <span class="rightCon">{{
                    items.createTime.slice(0, 10)
                  }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          :current-page.sync="currentPage"
          :pager-count="11"
          layout="prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u242" class="ax_default _图片_">
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
    // HeaderTab,
    FooterTab,
    HomeTabNew,
    DjBg,
  },
  data() {
    return {
      szArr: [],
      total: 100,
      pageSize: 5,
      pageNum: 1,
      currentPage: 1,
      isAsc: "desc",
      orderByColumn: "createTime",
      dyxxType: "素质学习",
    };
  },
  beforeMount() {
    this.getNewArr(
      this.dyxxType,
      this.pageNum,
      this.pageSize,
      this.orderByColumn,
      this.isAsc
    );
  },
  methods: {
    async getNewArr(dyxxType, pageNum, pageSize, orderByColumn, isAsc) {
      await axios
        .get(
          `http://www.tsllhf.cn:8078/news/webrequest/dyxxlist?dyxxType=${dyxxType}&pageNum=${pageNum}&pageSize=${pageSize}&orderByColumn=${orderByColumn}&isAsc=${isAsc}`
        )
        .then((res) => {
          this.total = res.data.total;
          this.szArr = res.data.rows;
          // this.total = this.shArr.length;
          console.log(this.total);
        });
    },

    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getNewArr(
        this.dyxxType,
        val,
        this.pageSize,
        this.orderByColumn,
        this.isAsc
      );
      console.log(this.szArr);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党员学习.css");

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

.leaCon {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 800px;
  .wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .newsList {
    width: 50%;
    float: left;
    /* position: relative; */
    margin-left: 75px;
    height: 700px;
    .dyw981_act {
      background: #fff;
      // padding: 10px 0 40px;
      margin: 10px 0;
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
        a {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .dyw981_text .text .leftCon {
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 630px;
    }
    .dyw981_text .text .rightCon {
      font: 14px "微软雅黑";
      color: #b1b1b1;
      line-height: 32px;
      float: right;
    }
  }

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
    ul {
      li {
        height: 38px;
        line-height: 38px;
        color: #e2e2e2;
        font-size: 16px;
        margin-top: 15px;
      }
      a {
        color: #575656;
        display: block;
        height: 38px;
        line-height: 38px;
        border: 1px solid #e2e2e2;
        background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat 35px -59px;
      }
    }
  }
  .page {
    position: relative;
    left: 250px;
  }
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

.footer {
  position: relative;
  width: 100%;
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