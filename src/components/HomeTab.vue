<template>
  <div class="home_tab">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#d9001b"
      text-color="#ffffff"
      active-text-color="#ffffff"
    >
      <el-menu-item index="1">首 页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">组织结构</template>
        <el-menu-item index="2-1">
          <router-link to="/dzzjg">党组织结构</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/dyfc">党员风采展示</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/dzzzz">党组织职责</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/xjtj">学籍统计</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/dwxc">党务宣传</router-link>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">党组织考核管理</template>
        <el-menu-item index="4-1">
          <router-link to="/khrwxf">考核任务下发</router-link>
        </el-menu-item>
        <el-menu-item index="4-2">党务学习</el-menu-item>
        <el-menu-item index="4-3">考核统计报表</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">
        <router-link to="/dyxx">党员学习</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style lang="less" scoped>
.home_tab {
  width: 1109px;
  display: flex;
  align-content: center;
  justify-content: center;
  .el-menu--horizontal > .el-menu-item {
    width: 278px;
  }
  // .el-menu--popup-bottom-start {
  //   margin-top: 1px;
  // }
}

.el-menu--popup-bottom-start {
  margin-top: 1px;
}

.el-menu--popup {
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>