<template>
  <div class="newswapper">
    <div class="dyw981_act">
      <ul class="dyw981_text">
        <li class="text" v-for="items in newsArr" :key="items.index">
          <a href="">{{ items.content }}</a>
          <span>{{ items.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsArr: [
        {
          content: "全国人民代表大会常务委员会任免名单",
          date: "2023-09-02",
        },
        {
          content: "全国人民代表大会常务委员会任免名单",
          date: "2023-09-02",
        },
        {
          content: "全国人民代表大会常务委员会任免名单",
          date: "2023-09-02",
        },
        {
          content: "全国人民代表大会常务委员会任免名单",
          date: "2023-09-02",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.dyw981_act {
  background: #fff;
  padding: 10px 0 40px;
  margin: 20px 0;
}
.dyw981_text {
  .text {
    width: 766px;
    font: 18px "微软雅黑";
    color: #292929;
    line-height: 32px;
    padding: 16px 0px;
    margin: 0 40px;
    float: left;
    border-bottom: 1px dashed #cdcdcd;
  }
  li {
    margin-bottom: 30px;
  }
}
.dyw981_text .text a {
  float: left;
}
.dyw981_text .text span {
  font: 14px "微软雅黑";
  color: #b1b1b1;
  line-height: 32px;
  float: right;
}
</style>