<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/dwxc">党务宣传</router-link> |
      <router-link to="/dyxx">党员学习</router-link> |
      <router-link to="/dzzjg">党组织结构</router-link> |
      <router-link to="/dyfc">党员风采展示</router-link> |
      <router-link to="/dzzzz">党组织职责</router-link> |
      <router-link to="/xjtj">学籍统计</router-link> |
      <router-link to="/khrwxf">考核任务下发</router-link> |
      <router-link to="/text">测试组件</router-link> |
    </nav> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
