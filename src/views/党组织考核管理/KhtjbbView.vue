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
                    @change="getCount"
                  >
                    <el-option label="讲话精神" value="jhjs"></el-option>
                    <el-option label="党史学习" value="dsxx"></el-option>
                    <el-option label="党纪学习" value="djxx"></el-option>
                    <el-option label="专业技能" value="zyjn"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>

            <div class="echarts" v-show="onSubmit()">
              <!-- <ChartsBlock :kh-count="khCount"></ChartsBlock> -->
              <div id="main" style="width: 600px; height: 400px"></div>
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
                    @change="getCount"
                  >
                    <el-option label="讲话精神" value="jhjs"></el-option>
                    <el-option label="党史学习" value="dsxx"></el-option>
                    <el-option label="党纪学习" value="djxx"></el-option>
                    <el-option label="专业技能" value="zyjn"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
            <div
              class="tjList"
              style="display: flex; padding: 20px"
              v-show="onSubmit()"
            >
              <el-table align="center" :data="tableData1" style="width: 100%">
                <el-table-column
                  align="center"
                  prop="dyName"
                  label="姓名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  :prop="finish"
                  label="完成数"
                  width="200"
                >
                </el-table-column>
              </el-table>
              <el-table align="center" :data="tableData2" style="width: 100%">
                <el-table-column
                  align="center"
                  prop="dyName"
                  label="姓名"
                  width="200"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  :prop="finish"
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
import axios from "axios";

export default {
  components: {
    HeaderTab,
    FooterTab,
    HomeTabNew,
    DjBg,
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
        xxlb: "讲话精神",
      },
      tableData: [],
      tableData1: [],
      tableData2: [],
      finish: "khrwJhjsFinished",
      khCount: [],
      khNameData: [],
    };
  },
  beforeMount() {
    this.getDyData();
    this.getKhList();
  },
  methods: {
    async getDyData() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dykhlist")
        .then((res) => {
          this.tableData = res.data.rows;
          console.log(this.tableData);
        });
      this.getList();
    },
    onSubmit() {
      if (this.formInline.date && this.formInline.xxlb != "") {
        console.log("submit!");
        return 1;
      }
      return 0;
    },
    getList() {
      // 分别放入列表中
      this.tableData.forEach((item, index) => {
        // 前一半
        if (index < this.tableData.length / 2) this.tableData1.push(item);
        // 后一半
        else this.tableData2.push(item);
      });
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.khNameData,
            axisLabel: {
              interval: 0, //坐标刻度之间的显示间隔
              rotate: -45, //调整数值改变倾斜的幅度（范围-90到90）
              color: "#000", //X坐标轴文字的颜色
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "已完成",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: this.khCount,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      // console.log(this.finish);
    },
    async getKhList() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dykhlist")
        .then((res) => {
          this.khData = res.data.rows;
          console.log(this.khData);
        });

      this.khData.forEach((item) => {
        this.khNameData.push(item.dyName);
      });
      this.tableData.forEach((item) => {
        this.khCount.push(item.khrwJhjsFinished);
      });
      this.drawChart();
    },
    getCount(val) {
      if (val === "jhjs") {
        this.finish = "khrwJhjsFinished";
        this.khCount = [];
        this.tableData.forEach((item) => {
          this.khCount.push(item.khrwJhjsFinished);
        });
        this.drawChart();
      } else if (val === "dsxx") {
        this.finish = "khrwDsxxFinished";
        this.khCount = [];
        this.tableData.forEach((item) => {
          this.khCount.push(item.khrwDsxxFinished);
        });
        this.drawChart();
      } else if (val === "djxx") {
        this.finish = "khrwDjxxFinished";
        this.khCount = [];
        this.tableData.forEach((item) => {
          this.khCount.push(item.khrwDjxxFinished);
        });
        this.drawChart();
      } else if (val === "zyjn") {
        this.finish = "khrwZyjnFinished";
        this.khCount = [];
        this.tableData.forEach((item) => {
          this.khCount.push(item.khrwZyjnFinished);
        });
        this.drawChart();
      }
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