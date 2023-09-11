<template>
  <div id="base" class="">
    <div class="header">
      <HeaderTab text="考核统计"></HeaderTab>

      <HomeTabNew></HomeTabNew>
    </div>

    <div class="midCon">
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
              ><router-link to="/khtjbb"
                >考核统计</router-link
              ></el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </div>

      <div class="tjtb">
        <!-- Unnamed (矩形) -->
        <div id="u237" class="ax_default box_1">
          <div id="u237_div" class="">
            <div class="block">
              <p><b>统计图表</b></p>
              <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
              >
                <el-form-item label="选择日期">
                  <el-date-picker
                    v-model="formInline.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    default-value
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="学习类别">
                  <el-select
                    :default-first-option="true"
                    v-model="formInline.xxlb"
                    placeholder="请选择(必选)"
                  >
                    <el-option label="党史学习" value="dsxx"></el-option>
                    <el-option label="素质教育" value="szjy"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>

            <div class="echarts" v-show="onSubmit()">
              <ChartsBlock></ChartsBlock>
            </div>
          </div>
        </div>
      </div>

      <div class="tjlb">
        <!-- Unnamed (矩形) -->
        <div id="u237" class="ax_default box_1">
          <div id="u237_div" class="">
            <div class="block">
              <p><b>统计列表</b></p>
              <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
              >
                <el-form-item label="选择日期">
                  <el-date-picker
                    v-model="formInline.date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    default-value
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="学习类别">
                  <el-select
                    :default-first-option="true"
                    v-model="formInline.xxlb"
                    placeholder="请选择(必选)"
                  >
                    <el-option label="党史学习" value="dsxx"></el-option>
                    <el-option label="素质教育" value="szjy"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div class="tjList">
              <el-table align="center" :data="tableData" style="width: 100%">
                <el-table-column
                  align="center"
                  prop="name"
                  label="姓名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="finish"
                  label="完成数"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="name"
                  label="姓名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="finish"
                  label="完成数"
                  width="200"
                >
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>

      <div class="test"></div>
    </div>

    <div class="footer">
      <div class="top">
        <DjBg></DjBg>
      </div>

      <!-- Unnamed (图片 ) -->
      <div id="u236" class="ax_default _图片_">
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
import ChartsBlock from "@/components/ChartsBlock.vue";

export default {
  components: {
    HeaderTab,
    FooterTab,
    HomeTabNew,
    DjBg,
    ChartsBlock,
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      formInline: {
        date: [
          new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          new Date(),
        ],
        xxlb: "党史学习",
      },
      tableData: [
        {
          name: "张云",
          finish: 6,
        },
        {
          name: "李军",
          finish: 7,
        },
        {
          name: "王敏",
          finish: 4,
        },
        {
          name: "徐涛",
          finish: 5,
        },
        {
          name: "王亮",
          finish: 2,
        },
        {
          name: "李萌",
          finish: 4,
        },
        {
          name: "马可",
          finish: 3,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      // console.log(this.formInline);
      const _echarts = document.getElementsByClassName("echarts");
      console.log(_echarts);
      if (this.formInline.date && this.formInline.xxlb != "") {
        console.log("submit!");
        return 1;
      }
      return 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/考核统计报表.css");

.top {
  position: absolute;
  width: 100%;
  top: 48px;
}
.breadCrumb {
  // width: 100%;
  position: relative;
  padding-left: 204px;
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
.block {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}
.echarts {
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -300px;
}

.midCon {
  position: relative;
  width: 1500px;
  margin: 0 auto;
  .tjtb {
    height: 500px;
    margin: 30px 0;
  }
  p {
    padding-bottom: 26px;
    padding-right: 72px;
  }
  .tjlb {
    height: 500px;
    margin: 50px 0;
    .el-table .cell {
      text-align: center !important;
    }
  }
}
.footer {
  position: relative;
}

.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.el-form--inline .el-form-item {
  flex: 1 0 40%;
  align-items: center;
}
</style>