<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="dyName" label="姓名" width="160"> </el-table-column>
    <el-table-column
      prop="dySex"
      label="性别"
      width="80"
      align="center"
      :formatter="formatSex"
    >
    </el-table-column>
    <el-table-column prop="dyMz" align="center" label="民族"> </el-table-column>
    <el-table-column prop="dyHjdz" align="center" label="籍贯" width="260"> </el-table-column>
    <el-table-column prop="dyXl" align="center" label="学历学位"> </el-table-column>
    <el-table-column prop="dyJkzk" align="center" label="健康状况" width="100">
    </el-table-column>
    <el-table-column
      prop="dyYbdysj"
      label="入党时间"
      width="100"
      align="center"
    ></el-table-column>
    <el-table-column prop="dyLxdh" align="center" label="联系方式" width="170">
    </el-table-column>
  </el-table>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        // {
        //   name: "刘军",
        //   sex: '男',
        //   nation: '汉族',
        //   address: "库车县公务员小区19号楼3单504室",
        //   degrees: '大专',
        //   health: '健康',
        //   join: '2015.11',
        //   phone: '13319975885'
        // },
        // {
        //   name: "阿司古丽·阿布拉",
        //   sex: '女',
        //   nation: '维吾尔族',
        //   address: "库车市幸福城小区9号楼",
        //   degrees: '大专',
        //   health: '健康',
        //   join: '2020.05',
        //   phone: '18997674627'
        // },
        // {
        //   name: "阿不力孜·艾则孜",
        //   sex: '男',
        //   nation: '维吾尔族',
        //   address: "库车市公务员小古杨小区6号楼一单元910室",
        //   degrees: '大学',
        //   health: '健康',
        //   join: '2020.07',
        //   phone: '13899232325'
        // },
        // {
        //   name: "亚库甫·沙吾提",
        //   sex: '男',
        //   nation: '维吾尔族',
        //   address: "库车县新城街道健康路29号33号楼2单1402室",
        //   degrees: '大专',
        //   health: '健康',
        //   join: '2008.07',
        //   phone: '18909978525'
        // },
        // {
        //   name: "阿斯叶木·艾则孜",
        //   sex: '女',
        //   nation: '维吾尔族',
        //   address: "库车县牙哈镇阿克艾日克村三组22号",
        //   degrees: '大专',
        //   health: '健康',
        //   join: '2004.07',
        //   phone: '18034890586'
        // },
        // {
        //   name: "吐松·艾海提",
        //   sex: '男',
        //   nation: '维吾尔族',
        //   address: "库车县阿克吾斯塘乡供拜艾日克村三组42号",
        //   degrees: '大专',
        //   health: '健康',
        //   join: '2016.06',
        //   phone: '13150484385'
        // },
        // {
        //   name: "莫依东·莫明",
        //   sex: '男',
        //   nation: '维吾尔族',
        //   address: "库车县乌恰镇天山东路298.1号高层1.1.201室",
        //   degrees: '中专',
        //   health: '健康',
        //   join: '2005.07',
        //   phone: '13309978157'
        // },
      ],
      // createTime: ''
    };
  },
  beforeMount() {
    this.getNameList();
  },
  methods: {
    async getNameList() {
      const ins = axios.create();
      ins
        .get("http://www.tsllhf.cn:8078/news/webrequest/dangyuanlist")
        .then((res) => {
          // console.log(res.data.rows);
          this.tableData = res.data.rows;
          console.log(this.tableData);
          // this.dyYbdysj = this.tableData.dyYbdysj;
        });
    },
    formatSex(row) {
      return row.dySex === '0' ? "男" : row.dySex === '1' ? "女" : "未填写";
    },
  },
  computed: {
    formattedDate() {
      return this.createTime.slice(0, 10);
    },
  },
};
</script>