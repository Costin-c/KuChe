<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column prop="sex" label="性别"> </el-table-column>
    <el-table-column prop="date" label="出生日期" width="110"> </el-table-column>
    <el-table-column prop="nation" label="民族"> </el-table-column>
    <el-table-column prop="address" label="籍贯" width="220"> </el-table-column>
    <el-table-column prop="degrees" label="学历学位"> </el-table-column>
    <el-table-column prop="school" label="毕业学校" width="100"> </el-table-column>
    <el-table-column prop="join" label="入党时间"> </el-table-column>
    <el-table-column prop="phone" label="联系方式" width="170"> </el-table-column>
  </el-table>
</template>
  
  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>