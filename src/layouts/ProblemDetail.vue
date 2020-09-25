<template>
  <clp-container class="container">
    <el-page-header
      class="page-header"
      @back="goBack"
      :title="$t('navbar.back')"
      :content="detail.title"
    ></el-page-header>
    <div class="content" v-html="compiledMarkdown"></div>
    <div class="ide-container">
      <Ide
        class="ide"
        :mode="mode"
        :value="code"
        :theme="theme"
        v-on:input="input"
        type="submit"
        v-model="code"
      ></Ide>
    </div>
    <div>
      <el-button class="submit-button" type="primary" round>{{
        $t("problem.submit")
      }}</el-button>
    </div>
  </clp-container>
</template>

<script>
import Ide from "../components/Problem/Ide";
import request from "../util/request";
import marked from "marked";
import DOMPurify from "dompurify";
export default {
  components: {
    Ide
  },
  data() {
    return {
      id: 0,
      detail: {
        id: 0,
        title: "",
        text: "",
        html: "",
        type: 0,
        tags: {},
        memoryLimit: 0,
        outputLimit: 0,
        timeLimit: 0,
        difficulty: 0
      },
      code: "",
      mode: "ace/mode/c_cpp",
      theme: "light"
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(DOMPurify.sanitize(this.detail.text));
    }
  },
  methods: {
    getProblemDetail: function() {
      request({
        method: "get",
        url: "/problem/detail",
        params: {
          id: this.id
        }
      }).then(res => {
        this.detail = res.data;
      });
    },
    goBack: function() {
      this.$router.go(-1);
    },
    input: function(value) {
      console.log(value);
      this.code = value;
    }
  },
  mounted: function() {
    this.id = this.$route.params.id;
    if (this.id != 0) {
      this.getProblemDetail();
    }
  },
  watch: {
    detail: function() {
      this.detail.html = marked(this.detail.text);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.submit-button {
  width: auto;
  margin: 40px 0 10px 0;
}
</style>
