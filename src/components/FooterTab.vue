<template>
  <div class="footer_wapper">
    <div class="footer_bg"></div>
    <div class="f_con">
      <div class="f_left">
        <ul class="left_ui">
          <li><router-link to="/about">关于我们</router-link></li>
          <li>|</li>
          <li><a href="">©Copyright 2007 All Reserved</a></li>
          <li>|</li>
          <!-- <li><a href="">网站地图</a></li>
          <li>|</li> -->
          <li><a href="">邮编：842000</a></li>
        </ul>
      </div>
      <div class="f_right">
        <ul class="right_ui">
          <li><a href="">主管单位：中共库车市委员会组织部</a></li>
          <!-- <li><a href="">版权所有</a></li> -->
          <!-- <li><a href="">涉未成年人专用举报热线：0997-7770658</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer_wapper{
  position: relative;
  overflow: hidden;
  width: 100%;
}
.footer_bg {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ebc1a3;
  z-index: 1;
}
.f_con {
  border-width: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 57px;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: space-around;
  a {
    color: #000000;
    font-size: 13px;
    text-decoration: none;
  }
  ul {
    margin-top: 25px;
  }
  li {
    float: left;
    margin-right: 15px;
  }
}
</style>