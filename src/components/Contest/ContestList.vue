<template>
  <div>
    <el-table stripe :data="list" style="width: 100%">
      <el-table-column prop="title" :label="$t('contest.name')" width="300px">
        <template slot-scope="scope">
          <el-link href="" type="primary" class="contest-title">
            <i class="el-icon-trophy"></i>&nbsp;
            {{ scope.row.title }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="type.translation" :label="$t('contest.type')">
        <template slot-scope="scope">
          <div v-if="scope.row.type == 'PUBLIC'" style="color:#67C23A">
            <i class="el-icon-check"></i>
            {{ $t("contest.public") }}
          </div>
          <div
            v-if="scope.row.type == 'CERTAIN_SCHOOL_ONLY'"
            style="color:#606266"
          >
            <i class="el-icon-school"></i>
            {{ $t("contest.certainSchool") }}
          </div>
          <div
            v-if="scope.row.type == 'CERTAIN_TEAM_ONLY'"
            style="color:#606266"
          >
            <i class="el-icon-ship"></i>
            {{ $t("contest.certainTeam") }}
          </div>
          <div
            v-if="scope.row.type == 'CERTAIN_USER_ONLY'"
            style="color:#606266"
          >
            <i class="el-icon-user"></i>
            {{ $t("contest.certainUser") }}
          </div>
          <div v-if="scope.row.type == 'PRIVATE'" style="color:#F56C6C">
            <i class="el-icon-lock"></i>
            {{ $t("contest.private") }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="start" :label="$t('contest.start')">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{ scope.row.start }}
        </template>
      </el-table-column>
      <el-table-column prop="end" :label="$t('contest.end')">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          {{ scope.row.end }}
        </template>
      </el-table-column>
      <el-table-column prop="status" :label="$t('contest.status')">
        <template slot-scope="scope">
          <div v-if="scope.row.status == 'over'">
            <el-tag type="info"
              ><i class="el-icon-error"></i>&nbsp;
              {{ $t("contest.over") }}</el-tag
            >
          </div>
          <div v-if="scope.row.status == 'on'">
            <el-tag type="success"
              ><i class="el-icon-success"></i>&nbsp;
              {{ $t("contest.on") }}</el-tag
            >
          </div>
          <div v-if="scope.row.status == 'wait'">
            <el-tag type="warning"
              ><i class="el-icon-circle-plus"></i>&nbsp;
              {{ $t("contest.wait") }}</el-tag
            >
          </div>
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
Date.prototype.format = function(fmt) {
  // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
import request from "../../util/request";
export default {
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
        this.list = this.processContent(response.data.content);
        this.total = response.data.totalElements;
      });
    },
    processContent(content) {
      let result = [];
      for (let i = 0; i < content.length; i++) {
        let temp = content[i];
        temp = {
          type: temp.type,
          start: this.getDateFormat(temp.start),
          title: temp.title,
          end: this.getDateFormat(temp.end),
          status: this.getContestStatus(temp.start, temp.end)
        };
        result[i] = temp;
      }
      return result;
    },
    getDateFormat(date) {
      return new Date(date).format("yyyy-M-d h:m:s");
    },
    getContestStatus(start, end) {
      let today = new Date();
      start = new Date(start);
      end = new Date(end);
      if (end < today) {
        return "over";
      }
      if (start < today) {
        return "on";
      }
      if (start > today) {
        return "wait";
      }
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

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
