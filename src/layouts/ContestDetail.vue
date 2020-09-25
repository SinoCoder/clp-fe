<template>
  <clp-container>
    <div class="detail-title">
      <el-page-header
        class="page-header"
        @back="goBack"
        :title="$t('navbar.back')"
        :content="content.title"
      ></el-page-header>
    </div>
    <el-card v-if="content.description != ''" class="detail-description">
      <div v-html="compiledMarkdown"></div>
    </el-card>
    <div class="detail-info">
      <el-card class="detail-card timer">
        {{ $t("contest.timer") }} :
        <Time :now="now" />
      </el-card>
      <el-card class="detail-card start">
        {{ $t("contest.startTime") }} :
        <Time :date="content.start" />
      </el-card>
      <el-card class="detail-card end">
        {{ $t("contest.endTime") }} :
        <Time :date="content.end" />
      </el-card>
    </div>
    <div class="detail-progress">
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="percent"
      ></el-progress>
    </div>
    <div class="detail-problem">
      <el-table stripe :data="content.problems">
        <el-table-column :label="$t('problem.number')" prop="id">
          <template slot-scope="scope">
            {{ nick[scope.row.id] }}
          </template>
        </el-table-column>

        <el-table-column :label="$t('problem.title')" prop="title">
          <template slot-scope="scope">
            <el-link
              @click="handleProblemDetail(scope.row.id)"
              type="primary"
              >{{ scope.row.title }}</el-link
            >
          </template>
        </el-table-column>

        <el-table-column :label="$t('problem.tag')" prop="tags">
          <template slot-scope="scope">
            <div
              class="tag-container"
              v-for="tag in scope.row.tags"
              :key="tag.id"
            >
              <el-tag size="small" @closable="false" :type="tag.color">
                {{ tag.content }}
              </el-tag>
            </div>
          </template>
        </el-table-column>

        <el-table-column :label="$t('problem.difficulty')" prop="difficulty">
        </el-table-column>
      </el-table>
    </div>
  </clp-container>
</template>

<script>
import request from "../util/request";
import marked from "marked";
import DOMPurify from "dompurify";
import Time from "../components/Time";
export default {
  components: {
    Time
  },
  data() {
    return {
      id: 0,
      content: {
        id: 0,
        type: "",
        description: "",
        title: "",
        end: "",
        start: "",
        finish: "",
        latch: "",
        problems: []
      },
      now: new Date(),
      timer: "",
      timerPercent: "",
      percent: 0,
      nick: [
        "Z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P"
      ]
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(DOMPurify.sanitize(this.content.description));
    }
  },
  methods: {
    getProblemList() {
      request({
        method: "get",
        url: "/contest/detail",
        params: {
          id: this.id
        }
      }).then(response => {
        this.content = response.data;
        this.percent = this.getPercent();
      });
    },
    goBack: function() {
      this.$router.go(-1);
    },
    handleProblemDetail(id) {
      this.$router.push("/problem/detail/" + id);
    },
    getPercent: function() {
      let result = 0;
      let now = new Date();
      let start = new Date(this.content.start);
      let end = new Date(this.content.end);
      if (end < now) {
        result = 100;
      } else if (start >= now) {
        result = 0;
      } else {
        result =
          (
            (now.getTime() - start.getTime()) /
            (end.getTime() - start.getTime())
          ).toFixed(2) * 100;
      }
      if (result == "NaN") {
        result = 0;
      }
      return result;
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProblemList();
    let _this = this;
    this.timer = setInterval(() => {
      _this.now = new Date();
    }, 1000);
    this.timerPercent = setInterval(() => {
      _this.percent = _this.getPercent();
    }, 10000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.timerPercent) {
      clearInterval(this.timerPercent);
    }
  }
};
</script>

<style scoped>
.page-header {
  padding: 20px;
}

.detail-title {
  border-radius: 5px;
  margin-top: 14px;
  margin-bottom: 10px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}

.detail-info {
  display: inline-flex;
  line-height: 1.5rem;
  width: 100%;
}

.detail-card {
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  margin: 0 5px 0 5px;
}

.detail-card:hover {
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1) !important;
}

.timer {
  color: #fff;
  background-color: #606266;
}

.start {
  background-color: #67c23a;
  color: #fff;
}

.end {
  background-color: #e6a23c;
  color: #fff;
}

.detail-description {
  margin: 10px 0 10px 0;
}

.detail-progress {
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
}

.detail-problem {
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}

.tag-container {
  display: inline;
}

.tag-container .el-tag {
  margin: 0 5px 0 5px;
}

.el-table .cell {
  text-align: center;
}
</style>
