<template>
  <div class="listWapper">
    <div class="list_left">
      <h3>党员学习</h3>
      <div class="imgcenter">
        <ul>
          <li>
            <a
              class=""
              target="_self"
              href="http://www.hebdj.gov.cn:80/eportal/cms/jsp/site001/channel01.jsp?channelidenty=xuexixindei"
              title="先锋文汇"
              >三会一课</a
            >
          </li>

          <li>
            <a
              class=""
              target="_self"
              href="http://www.hebdj.gov.cn:80/eportal/cms/jsp/site001/channel01.jsp?channelidenty=zhongyangjingshenzt"
              title="学习平台"
              >素质学习</a
            >
          </li>

          <li>
            <a
              class=""
              target="_self"
              href="http://www.hebdj.gov.cn:80/eportal/cms/jsp/site001/channel01.jsp?channelidenty=zhongyangjingshenzt"
              title="学习平台"
              >党史学习</a
            >
          </li>

          <li>
            <a
              class=""
              target="_self"
              href="http://www.hebdj.gov.cn:80/eportal/cms/jsp/site001/channel01.jsp?channelidenty=zhongyangjingshenzt"
              title="学习平台"
              >专业技能</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.list_left {
    width: 254px;
    margin: 25px 19px;
}

.list_left h3 {
    border-bottom: 2px solid #e34300;
    // background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat;
    font-size: 22px;
    font-weight: normal;
    color: #000;
    padding-left: 32px;
    padding-bottom: 5px;
}

.list_left ul li {
    height: 38px;
    line-height: 38px;
    color: #e2e2e2;
    font-size: 16px;
    margin-top: 15px;
}

.list_left ul a {
    color: #575656;
    display: block;
    height: 38px;
    line-height: 38px;
    border: 1px solid #e2e2e2;
    // background: url(~@/assets/images/党员学习/icon2.jpg) no-repeat 35px -59px;
    padding-left: 60px;
}
.list_left ul a:hover {
	border: 1px solid #e81b00;
	color: #fff;
	background: #e81b00 url(~@/assets/images/党员学习/icon2.jpg) no-repeat 35px -100px

}
.list_left ul li a.focus {
	background: #e81b00;
	border: 1px solid #e81b00;
	color: #fff;
}
</style>