<template>
  <div class="main">
    <clp-container class="problem-container">
      <Search :total="total" @search-problem="handleSearchProblem" />
    </clp-container>
    <clp-container class="problem-container">
      <List :keyword="keyword" @total-change="handleTotalChange" />
    </clp-container>
  </div>
</template>

<script>
import Search from "../components/Problem/Search";
import List from "../components/Problem/List";

export default {
  components: {
    List,
    Search
  },
  data() {
    return {
      keyword: "",
      total: 0
    };
  },
  methods: {
    handleTotalChange(total) {
      this.total = total;
    },
    handleSearchProblem(keyword) {
      this.keyword = keyword;
    }
  }
};
</script>

<style lang="scss" scoped>
.problem-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}
</style>
