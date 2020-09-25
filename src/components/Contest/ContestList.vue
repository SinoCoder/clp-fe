<template>
  <div>
    <el-table stripe :data="list" style="width: 100%">
      <el-table-column prop="title" :label="$t('contest.name')" width="300px">
        <template slot-scope="scope">
          <el-link
            @click="goContestDetail(scope.row.id)"
            type="primary"
            class="contest-title"
          >
            <i class="el-icon-trophy"></i>&nbsp;
            {{ scope.row.title }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="type.translation" :label="$t('contest.type')">
        <template slot-scope="scope">
          <ContestType :type="scope.row.type" />
        </template>
      </el-table-column>
      <el-table-column prop="start" :label="$t('contest.start')">
        <template slot-scope="scope">
          <Time :date="scope.row.start" />
        </template>
      </el-table-column>
      <el-table-column prop="end" :label="$t('contest.end')">
        <template slot-scope="scope">
          <Time :date="scope.row.end" />
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('contest.status')">
        <template slot-scope="scope">
          <ContestStatus :start="scope.row.start" :end="scope.row.end" />
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import request from "../../util/request";
import Time from "../Time";
import ContestType from "./ContestType";
import ContestStatus from "./ContestStatus";
export default {
  components: {
    Time,
    ContestType,
    ContestStatus
  },
  data() {
    return {
      page: 1,
      pageSize: 5,
      total: 0,
      list: []
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.page = val;
    },
    getContests() {
      let temp = this.page;
      request({
        method: "get",
        url: "/contest",
        params: {
          size: this.pageSize,
          page: --temp
        }
      }).then(response => {
        // console.log(response.data.content);
        this.list = this.processContent(response.data.content);
        this.total = response.data.totalElements;
      });
    },
    processContent(content) {
      let result = [];
      for (let i = 0; i < content.length; i++) {
        let temp = content[i];
        temp = {
          id: temp.id,
          type: temp.type,
          start: temp.start,
          title: temp.title,
          end: temp.end
        };
        result[i] = temp;
      }
      return result;
    },
    goContestDetail(id) {
      this.$router.push("/contest/detail/" + id);
    }
  },
  watch: {
    "$store.state.app.language": function() {
      this.list = this.processContent(this.list);
    },
    page: function() {
      this.getContests();
    },
    pageSize: function() {
      this.getContests();
    }
  },
  mounted: function() {
    this.getContests();
  }
};
</script>

<style scope>
.el-table .cell {
  text-align: center;
}
.el-pagination {
  float: right;
  margin: 5px 20px 5px 20px;
}
.contest-title {
  font-size: 0.9rem !important;
}
</style>
