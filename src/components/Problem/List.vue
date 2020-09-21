<template>
  <div>
    <el-table stripe :data="list">
      <el-table-column
        :label="$t('problem.number')"
        prop="id"
      ></el-table-column>

      <el-table-column :label="$t('problem.title')" prop="title">
        <template slot-scope="scope">
          <el-link @click="handleProblemDetail(scope.row.id)" type="primary">{{
            scope.row.title
          }}</el-link>
        </template>
      </el-table-column>

      <el-table-column :label="$t('problem.tag')" prop="tags">
        <template slot-scope="scope">
          <div
            class="tag-container"
            v-for="tag in scope.row.tags"
            :key="tag.id"
          >
            <el-tag
              @click="handleTagClick"
              size="small"
              @closable="false"
              :type="tag.color"
            >
              {{ tag.content }}
            </el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column :label="$t('problem.difficulty')" prop="difficulty">
      </el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import marked from "marked";
import request from "../../util/request";
export default {
  name: "clp-problem",
  props: {
    keyword: String
  },
  data() {
    return {
      list: [],
      page: 1,
      size: 5,
      total: 0
    };
  },
  methods: {
    getProblems() {
      let pageNum = this.page;
      request({
        method: "get",
        url: "/problem",
        params: {
          size: this.size,
          page: --pageNum
        }
      }).then(response => {
        this.list = response.data.content;
        this.total = response.data.totalElements;
      });
    },

    searchProblems() {
      let pageNum = this.page;
      request({
        method: "post",
        url: "/problem/search",
        data: {
          keyword: this.keyword,
          size: this.size,
          page: --pageNum
        }
      }).then(response => {
        this.list = response.data.content;
        this.total = response.data.totalElements;
      });
    },

    handleProblemDetail(id) {
      this.$router.push("/problem/detail/" + id);
    },

    handleTagClick() {
      console.log("点击了标签");
    },

    //监听 pagesize的改变
    handleSizeChange(newSize) {
      this.size = newSize;
      this.getProblems();
    },

    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.page = newPage;
      this.getProblems();
    }
  },
  mounted: function() {
    this.getProblems();
  },
  watch: {
    total: function() {
      this.$emit("total-change", this.total);
    },
    keyword: function() {
      this.searchProblems();
    }
  }
};
</script>

<style scope>
.el-table .cell {
  text-align: center;
}
.el-table_1_column_2 .cell {
  text-align: left !important;
}
.el-pagination {
  float: right;
  margin: 5px 20px 5px 20px;
}

.tag-container {
  display: inline;
}
.tag-container .el-tag {
  margin: 0 5px 0 5px;
}
</style>
