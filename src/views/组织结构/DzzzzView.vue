<template>
  <div id="base" class="">
    <HeaderTab text="党组织职责"></HeaderTab>

    <!-- Unnamed (线段) -->
    <div id="u81" class="ax_default line">
      <img id="u81_img" class="img" src="@/assets/images/党组织职责/u81.svg" />
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u84" class="ax_default _一级标题">
      <div id="u84_text" class="text">
        <p>
          <span>
            自主编辑党组织职责
            {{ publicData }}
          </span>
          <ul>
            <li v-for="items in dyInfo" :key="items.index">
              {{ items.dyName + items.dyZhiwu }}
            </li>
          </ul>
        </p>
      </div>
    </div>
    <!-- Unnamed (线段) -->
    <div id="u82" class="ax_default line">
      <img id="u82_img" class="img" src="@/assets/images/党组织职责/u81.svg" />
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u80" class="ax_default _一级标题">
      <div id="u80_text" class="text">
        <p>
          <span>时间：{{ publicDate }}</span>
        </p>

      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u83" class="ax_default _一级标题">
      <div id="u83_text" class="text">
        <p>
          <span>发布人：{{ publicName }}</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u78" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>
  </div>
</template>

<script>
import HeaderTab from "@/components/HeaderTab.vue";
import FooterTab from "../../components/FooterTab.vue";
import axios from "axios";

export default {
  components: {
    FooterTab,
    HeaderTab,
  },
  data() {
    return {
      publicName: "xxx",
      publicDate: "2023-5-31",
      publicData:
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      dyInfo: [],
    };
  },
  created() {
    this.getDyInfo();
  },
  methods: {
    async getDyInfo() {
      await axios
        .get("http://www.tsllhf.cn:8078/news/webrequest/dangyuanlist")
        .then((res) => {
          // console.log(res);
          this.dyInfo = res.data.rows;
        });

      console.log(this.dyInfo);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/党组织职责.css");
</style>