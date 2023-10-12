<template>
  <div class="block">
    <el-carousel trigger="click" height="316px">
      <el-carousel-item v-for="item in imgArr" :key="item.index">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <router-link
          :to="{
          }"
        >
          <span class="small">{{ item.picTitile }}</span>
          <img :src="item.remark" alt="" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgArr: [],
    };
  },
  beforeMount() {
    this.getImgList();
  },
  methods: {
    async getImgList() {
      const ins = axios.create();
      ins
        .get("http://www.tsllhf.cn:8078/news/webrequest/piclist")
        .then((res) => {
          console.log(res.data.rows);
          this.imgArr = res.data.rows;
        });
    },
  },
};
</script>

  
<style lang="less" scoped>
.block {
  width: 550px;
}
.el-carousel__item span {
  // color: #475669;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 10px;
  background: rgba(32, 82, 143, 0.8);
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  opacity: 0.75;
  z-index: 99;
  margin: 0;
}
.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  // background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  // background-color: #d3dce6;
}
</style>