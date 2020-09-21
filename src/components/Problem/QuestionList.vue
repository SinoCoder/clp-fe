<template>
  <div>
    <!-- 题目列表 -->
    <el-table stripe :data="content">
      <!-- id -->
      <el-table-column width="80px" label="编号" prop="id"></el-table-column>
      <!-- title -->
      <el-table-column width="600px" label="题目名称" prop="title">
        <template slot-scope="scope">
          <el-link href="/problemdetail" type="primary">{{
            scope.row.title
          }}</el-link>
        </template>
      </el-table-column>

      <!-- tags -->
      <el-table-column width="200px" label="标签" prop="tags">
        <template slot-scope="scope">
          <!-- 这个地方想写个读取数组 但是还没想出来怎么弄 -->
          <el-tag
            v-if="scope.row.tags[0] != ''"
            class="tags"
            @click="handle1"
            size="small"
            closable="true"
            >{{ scope.row.tags[0] }}</el-tag
          >
          <el-tag
            v-if="scope.row.tags[1] != ''"
            class="tags"
            @click="handle1"
            size="small"
            closable="true"
            >{{ scope.row.tags[1] }}</el-tag
          >
        </template>
      </el-table-column>

      <!-- type -->
      <el-table-column label="题目类型" prop="type">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.type == '分支结构' || scope.row.type == '顺序结构'"
            type="primary"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == '数组'"
            type="success"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == '模拟与高精度'"
            type="warning"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == '暴力枚举'"
            type="info"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == '图的基本应用'"
            type="danger"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
        </template>
      </el-table-column>
      <!-- difficulty -->
      <el-table-column label="难度" prop="difficulty"> </el-table-column>
    </el-table>
    <!-- 分页 -->

    <!-- handleSizeChange每页多少条 -->
    <!-- current-page当前第几页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="total, sizes, prev, pager, next,
      jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import marked from "marked";
// eslint-disable-next-line no-unused-vars
import request from "../../util/request";
export default {
  name: "clp-problem",
  data() {
    return {
      // 简单看下效果
      content: [
        {
          id: 1,
          title: "titeltiteltiteltiteltitel",
          tags: ["NOIp普及组", ""],
          type: "分支结构",
          difficulty: "123"
        },
        {
          id: 1,
          title: "titeltiteltiteltiteltitel",
          tags: ["NOIp普及组", "NOIp普及组"],
          type: "数组",
          difficulty: "123"
        },
        {
          id: 1,
          title: "titeltiteltiteltiteltitel",
          tags: ["NOIp普及组", "山东"],
          type: "模拟与高精度",
          difficulty: "123"
        },
        {
          id: 1,
          title: "titeltiteltiteltiteltitel",
          tags: ["NOIp普及组", "山东"],
          type: "暴力枚举",
          difficulty: "123"
        },
        {
          id: 1,
          title: "titeltiteltiteltiteltitel",
          tags: ["NOIp普及组", "山东"],
          type: "图的基本应用",
          difficulty: "123"
        }
      ]
    };
  },
  methods: {
    //使用公共的request工具获取题目
    getProblem: function() {
      request({
        method: "get",
        url: "/problem",
        data: {
          size: 20,
          page: this.page,
          problem: [],
          id: 0,
          title: "",
          tags: "",
          type: "",
          difficulty: ""
        }
      }).then(response => {
        this.problem = response.data.content;
      });
    },

    // 点击标tags事件
    handle1() {
      console.log("点击了标签");
    },

    //监听 pagesize的改变
    handleSizeChange(newSize) {
      console.log(newSize);
    },

    //监听页码值改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage);
    }
  }
};
</script>

<style scope>
.el-table_1_column_1 .cell {
  text-align: center;
}
.el-table_1_column_3 .cell {
  text-align: center;
}
.el-table_1_column_4 .cell {
  text-align: center;
}
.el-table_1_column_5 .cell {
  text-align: center;
}
.el-table_1_column_2 .cell {
  text-align: left !important;
}
.el-pagination {
  float: right;
}
.tags {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>
