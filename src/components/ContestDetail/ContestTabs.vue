<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="比赛说明" name="first">
      <template>
        <el-card class="asd">
          <el-table :data="tableData1" stripe style="width: 100%">
            <el-table-column prop="id" label="题号" width="60">
            </el-table-column>
            <el-table-column prop="score" label="满分" width="80">
            </el-table-column>
            <el-table-column prop="title" label="题目名称" width="440">
              <template slot-scope="scope">
                <el-link href="" type="primary">{{ scope.row.title }}</el-link>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
              <template slot-scope="scope">
                <el-tag type="danger" size="mini">{{
                  scope.row.status
                }}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div v-for="o in 5" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
        <!--  -->
        <el-card class="box-card2">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div v-for="o in 5" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </template>
    </el-tab-pane>
    <el-tab-pane label="题目列表" name="second">题目列表</el-tab-pane>
    <el-tab-pane label="排行榜" name="third">排行榜</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData1: [
        {
          id: 1,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 2,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 3,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 1,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 2,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 3,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        },
        {
          id: 1,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.el-tabs__nav .is-top {
  width: 150px;
  text-align: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
  position: absolute;
  left: 739px;
  top: 11px;
}
.box-card2 {
  width: 400px;
  position: absolute;
  left: 739px;
  top: 325px;
}
.asd {
  position: relative;
  top: 10px;
  width: 63%;
  left: 0px;
}
.el-tabs__content {
  background: rgb(247, 250, 254);
}
.el-tabs__header {
  margin-bottom: 2px;
}
.cell {
  text-align: center;
}
.el-table_1_column_3 .cell {
  text-align: left !important;
}
</style>
