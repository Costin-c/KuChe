<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>

<script>
export default {
  data() {
    return {};
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
            data: ["张云", "李军", "王敏", "徐涛", "王亮", "李萌", "马可"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          // {
          //   name: "未完成",
          //   type: "bar",
          //   stack: "Ad",
          //   emphasis: {
          //     focus: "series",
          //   },
          //   data: [2, 1, 4, 3, 6, 4, 8],
          // },

          {
            name: "已完成",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            data: [6, 7, 4, 5, 2, 4, 3],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style>
</style>