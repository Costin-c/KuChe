<template>
  <div id="home">
    <!-- Unnamed (图片 ) -->
    <div id="u0" class="ax_default _图片_">
      <div class="carousel">
        轮播图
        <CarouselLamp></CarouselLamp>
      </div>
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u1" class="ax_default _图片_">
      <img id="u1_img" class="img" src="@/assets/images/首页/u1.png" />
      <div id="u1_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u2" class="ax_default _图片_">
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u3" class="ax_default _图片_">
      <div class="u3_con">
        <div class="con_left"></div>
        <div class="con_right"></div>
      </div>
    </div>

    <div class="tab">
      <HomeTab></HomeTab>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u5" class="ax_default _文本段落">
      <div id="u5_div" class=""></div>
      <div id="u5_text" class="text">
        <p><span>库车党建</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u11" class="ax_default _图片_">
      <FooterTab></FooterTab>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u23" class="ax_default _文本段落">
      <div id="u23_div" class=""></div>
      <div id="u23_text" class="text">
        <!-- <p><span>2023年6月1日 星期四</span></p> -->
        <p>
          <span>{{ todayDate }}</span>
        </p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u24" class="ax_default _图片_">
      <img id="u24_img" class="img" src="@/assets/images/首页/u24.png" />
      <div id="u24_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u25" class="ax_default _图片_">
      <img id="u25_img" class="img" src="@/assets/images/首页/u25.png" />
      <div id="u25_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u26" class="ax_default _图片_">
      <img id="u26_img" class="img" src="@/assets/images/首页/u26.png" />
      <div id="u26_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u27" class="ax_default _文本段落">
      <div id="u27_div" class=""></div>
      <div id="u27_text" class="text">
        <p><span>党员学习</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u28" class="ax_default _文本段落">
      <div id="u28_div" class=""></div>
      <div id="u28_text" class="text">
        <p><span>三会一课</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u29" class="ax_default _文本段落">
      <div id="u29_div" class=""></div>
      <div id="u29_text" class="text">
        <p><span>素质学习</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u30" class="ax_default _文本段落">
      <div id="u30_div" class=""></div>
      <div id="u30_text" class="text">
        <p><span>党史学习</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u31" class="ax_default _文本段落">
      <div id="u31_div" class=""></div>
      <div id="u31_text" class="text">
        <p><span>技能学习</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u32" class="ax_default _图片_">
      <img id="u32_img" class="img" src="@/assets/images/首页/u32.png" />
      <div id="u32_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u33" class="ax_default _图片_">
      <img id="u33_img" class="img" src="@/assets/images/首页/u33.png" />
      <div id="u33_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u34" class="ax_default _文本段落">
      <div id="u34_div" class=""></div>
      <div id="u34_text" class="text">
        <p><span>“最美党员”风采</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u35" class="ax_default _图片_">
      <img id="u35_img" class="img" src="@/assets/images/首页/u35.png" />
      <div id="u35_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u36" class="ax_default _文本段落">
      <div id="u36_div" class=""></div>
      <div id="u36_text" class="text">
        <p><span>纪律警示宣传</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u37" class="ax_default _图片_">
      <!-- <img id="u37_img" class="img" src="@/assets/images/首页/u37.png" /> -->
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u38" class="ax_default _图片_">
      <img id="u38_img" class="img" src="@/assets/images/首页/u1.png" />
      <div id="u38_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u39" class="ax_default _图片_">
      <img id="u39_img" class="img" src="@/assets/images/首页/u35.png" />
      <div id="u39_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u40" class="ax_default _文本段落">
      <div id="u40_div" class=""></div>
      <div id="u40_text" class="text">
        <p><span>党务政策宣传</span></p>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u41" class="ax_default _图片_">
      <!-- <img id="u41_img" class="img" src="@/assets/images/首页/u37.png" /> -->
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
      <div class="jobList">
        <div class="jobHerader">这是横条</div>
        <ul>
          <li v-for="items in arrList" :key="items.index">
            <span class="left">{{ items.title }}</span>
            <span class="right">{{ items.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Unnamed (图片 ) -->
    <div id="u42" class="ax_default _图片_">
      <img id="u42_img" class="img" src="@/assets/images/首页/u42.png" />
      <div id="u42_text" class="text" style="display: none; visibility: hidden">
        <p></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u43" class="ax_default _文本段落">
      <div id="u43_div" class=""></div>
      <div id="u43_text" class="text">
        <p><span>“党组织”基本结构</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import FooterTab from "@/components/FooterTab.vue";
import HomeTab from "@/components/HomeTab.vue";
import CarouselLamp from "@/components/CarouselLamp.vue";
export default {
  name: "HomeView",
  components: {
    FooterTab,
    HomeTab,
    CarouselLamp,
  },
  data() {
    return {
      todayDate: "",
      arrList: [
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
        {
          title: "abc",
          date: "2023-05-08",
        },
      ],
    };
  },
  methods: {
    getTime() {
      var date = new Date(); //创建日期对象
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dates = date.getDate();
      var arr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      var day = date.getDay();
      this.todayDate = year + "年" + month + "月" + dates + "号 " + arr[day];
    },
  },
  beforeMount() {
    this.getTime();
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/首页.less");
.tab {
}
#u0 .carousel {
  width: 50%;
  margin-top: 50px;
}
.jobList {
  margin-top: 50px;
  font-size: 15px;
  width: 50%;
  position: relative;
  overflow: hidden;
  ul {
    list-style-position: outside;
    list-style: circle;
    li {
      display: flex;
      justify-content: space-between;
      list-style: circle;
    }
  }
  .left {
    // float: left;
  }
  .right {
    // float: right;
  }
}
</style>