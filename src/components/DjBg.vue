<template>
  <div class="djbg">
    <div class="am-yndwlm-bg">
      <div class="am-container">
        <div class="am-cf">
          <div class="am-fl">
            <img src="@/assets/images/首页/yndwlm.jpg" />
          </div>
          <div class="am-fr">
            <ul>
              <li>
                <a href="http://dwlm.12371.cn">联盟首页</a>
              </li>
              <li>|</li>
              <li>
                <a href="http://www.12371.cn">共产党员网</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/*全国党建联盟网站 start*/

.am-yndwlm-bg {
  overflow: hidden;
  background: #f6b84b;
  width: 100%;
}
.am-container {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1000px;
}
.am-container:after,
.am-container:before {
  content: " ";
  display: table;
}
.am-fl {
  float: left;
}
.am-fr {
  float: right;
  margin-top: 28px;
}
.am-yndwlm-bg .am-fr ul li {
  list-style: none;
  float: left;
  padding-left: 10px;
  font-size: 1.2rem;
}

.am-yndwlm-bg .am-fr ul li a {
  font-size: 1rem;
  color: #484848;
  vertical-align: middle;
}

.am-yndwlm-bg .am-fr ul li a:hover {
  color: #d32323;
}
</style>