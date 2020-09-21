<template>
  <div class="search">
    <h2 class="head">{{ $t("problem.find") }}</h2>
    <el-input
      class="search-input"
      v-model="input"
      :placeholder="$t('problem.searchInfo')"
      disabled
    ></el-input>
    <el-button
      class="search-button"
      type="primary"
      icon="el-icon-search"
      @click="searchProblem"
      disabled
      >{{ $t("problem.search") }}</el-button
    >
    <p class="result-num">{{ $t("problem.total", { total: total }) }}</p>
  </div>
</template>

<script>
// import debounce from "lodash";
export default {
  name: "searcher",
  props: ["total"],
  data() {
    return {
      input: ""
    };
  },
  methods: {
    searchProblem: function() {
      this.$emit("search-problem", this.input);
    }
  }
};
</script>

<style scoped>
.search {
  display: inline-block;
  padding-left: 25px;
}
.search-input {
  margin-left: 30px;
  width: auto;
}
.head {
  display: inline-block;
  font-weight: 400;
}
.search-button {
  margin-left: 20px;
  margin-right: 30px;
}
.result-num {
  color: rgb(140, 140, 140);
  margin-top: 0;
}
</style>
