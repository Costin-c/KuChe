<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    // 定义名为 list 的 prop，类型为 Array
    khCount: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      khNameData: [],
      // khCount: [],
    };
  },
  methods: {
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
      // this.khData.forEach((item) => {
      //   this.khCount.push(item.khrwJhjsFinished);
      // });
      this.getCount();
      
      this.drawChart();
      console.log(this.khCount);
    },
    getCount() {
      if (this.finish === "khrwJhjsFinished") {
        // this.finish = "khrwJhjsFinished";
        // this.khCountArr.length = 0;
        this.khData.forEach((item) => {
          this.khCountArr.push(item.khrwJhjsFinished);
        });
      } else if (this.finish === "khrwDsxxFinished") {
        // this.finish = "khrwDsxxFinished";
        // this.khCountArr.length = 0;
        this.khData.forEach((item) => {
          this.khCountArr.push(item.khrwDsxxFinished);
        });
      } else if (this.finish === "khrwDjxxFinished") {
        // this.finish = "khrwDjxxFinished";
        // this.khCountArr.length = 0;
        this.khData.forEach((item) => {
          this.khCountArr.push(item.khrwDjxxFinished);
        });
      } else if (this.finish === "khrwZyjnFinished") {
        // this.finish = "khrwZyjnFinished";
        // this.khCountArr.length = 0;
        this.khData.forEach((item) => {
          this.khCountArr.push(item.khrwZyjnFinished);
        });
      }
    },
  },
  mounted() {
    this.getKhList();
  },
};
</script>

<style>
</style>