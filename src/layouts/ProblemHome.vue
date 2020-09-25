<template>
  <clp-container class="container">
    <Search :total="total" @search-problem="handleSearchProblem" />
    <List :keyword="keyword" @total-change="handleTotalChange" />
  </clp-container>
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

<style lang="scss" scoped></style>
