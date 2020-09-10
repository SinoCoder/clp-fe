<template>
  <div class="newslist-container">
    <div v-if="!isExpand" class="news-header">{{ $t("news.title") }}</div>
    <div v-if="warning" class="no-news">
      <h4>{{ $t("news.nonews") }}</h4>
    </div>
    <div v-if="!warning && !isExpand">
      <div v-for="n in news" :key="n.id">
        <el-link
          class="news-item"
          :underline="false"
          @click="expand(n)"
          icon="el-icon-s-opportunity"
          >{{ n.title }}</el-link
        >
      </div>
    </div>
    <div
      class="news-detail"
      v-if="article != null && article != '' && isExpand"
    >
      <el-page-header
        class="page-header"
        @back="goBack"
        :content="title"
      ></el-page-header>
      <div v-html="article"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import request from "../../util/request";
export default {
  name: "clp-news-list",
  data() {
    return {
      warning: false,
      article: "",
      title: "",
      news: [],
      page: 0,
      isExpand: false
    };
  },
  mounted() {
    this.getNews();
  },
  watch: {
    news: function() {
      if (this.news.length == undefined || this.news.length < 1) {
        this.warning = true;
      }
    }
  },
  methods: {
    expand: function(content) {
      this.article = marked(content.content);
      this.title = content.title;
      this.isExpand = true;
    },
    getNews: function() {
      request({
        method: "get",
        url: "/news",
        data: {
          size: 20,
          page: this.page
        }
      }).then(response => {
        this.news = response.data.content;
      });
    },
    goBack() {
      this.isExpand = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.newslist-container {
  padding-bottom: 20px;
}

.news-item {
  line-height: 42px;
  font-size: 18px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  justify-content: left !important;
}

.news-item:hover {
  background-color: #f7fafe;
}

.button-back {
  position: relative;
}

.news-detail {
  padding: 5px 40px 20px 40px;
}

.news-header {
  font-size: 30px;
  padding: 18px 0px 16px 38px;
  font-weight: 200;
  border-bottom: 5px rgba(0, 0, 0, 0.8) !important;
}

.page-header {
  padding-top: 20px;
}
</style>
