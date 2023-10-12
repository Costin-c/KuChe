<template>
  <div class="tabNew">
    <div class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/dyfc">党员风采展示</router-link></li>
        <li><router-link to="/dzzjg">党组织结构</router-link></li>
        <li><router-link to="/dwxc">党务宣传</router-link></li>
        <li><router-link to="/xjtj">学籍统计</router-link></li>
        <!-- <li><a href="#">党务学习</a></li> -->
        <li><router-link to="/khtjbb">考核统计</router-link></li>
        <li><router-link to="/dzzzz">党组织职责</router-link></li>
        <li><router-link to="/dyxx">党员学习</router-link></li>
        <li><router-link to="/job">工作情况</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  height: 40px;
  line-height: 40px;
  background-color: #333;
}
.nav ul {
  width: 1000px;
  margin: 0 auto;
}
.nav ul li {
  display: block;
  list-style: none;
  float: left;
  margin-top: -2px;
  text-align: center;
  margin-right: 22px;
  font-size: 14px;
}
.nav ul li a {
  display: inline-block;
  letter-spacing: 1px;
  padding: 0 10px;
  color: #ffed2a;
  text-decoration: none;
  font-weight: bold;
}
.nav ul li a:hover {
  background-color: red;
  height: 42px;
}


</style>