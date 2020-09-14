/* eslint-disable vue/valid-template-root */ /* eslint-disable
vue/valid-template-root */
<template>
  <div>
    <el-table
      stripe
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="title" label="比赛名称" width="300px">
        <!-- 这儿要添加个标签状态 -->
        <template slot-scope="scope">
          <el-link href="" type="primary">{{ scope.row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.type == 'IOI'"
            type="warning"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
          <el-button
            v-else-if="scope.row.type == 'ACM'"
            type="success"
            size="mini"
            >{{ scope.row.type }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="start" label="开始时间" width="154px">
      </el-table-column>
      <el-table-column prop="end" label="结束时间" width="154px">
      </el-table-column>
      <el-table-column prop="description" label="描述" width="400px">
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      tableData: [
        {
          title: "集训队互测 2018 同步赛 （Day 2）",
          type: "ACM",
          start: "2020-08-11T08:28:16.000+00:00",
          end: "2020-07-20T02:30:00.000+00:00",
          description:
            "系统测试：Hello 2018 Round 前系统测试，主要测试每道题分值不"
        },
        {
          title: "集训队互测 2018 同步赛 （Day 2）",
          type: "ACM",
          start: "2020-08-11T08:28:16.000+00:00",
          end: "2020-07-20T02:30:00.000+00:00",
          description:
            "系统测试：Hello 2018 Round 前系统测试，主要测试每道题分值不"
        },
        {
          title: "集训队互测 2018 同步赛 （Day 2）",
          type: "ACM",
          start: "2020-08-11T08:28:16.000+00:00",
          end: "2020-07-20T02:30:00.000+00:00",
          description:
            "系统测试：Hello 2018 Round 前系统测试，主要测试每道题分值不"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
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
  font-size: 15px;
  font-weight: 600;
  text-align: center;
}
tbody .el-table_1_column_4 .cell {
  font-weight: 600;
}
tbody .el-table_1_column_3 .cell {
  font-weight: 600;
}
.el-pagination {
  float: right;
}
</style>
