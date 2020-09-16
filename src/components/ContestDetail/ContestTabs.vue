<template>
  <!-- 比赛说明 -->
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="比赛说明" name="first">
      <template>
        <!-- 左边说明 -->
        <el-card class="asd">
          <div>
            <h1>Markdown</h1>
          </div>
        </el-card>
        <!-- 卡片1 -->
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
        <!-- 卡片2 -->
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

    <!-- 题目列表 -->
    <el-tab-pane label="题目列表" name="second">
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

    <!-- 排行榜 -->
    <el-tab-pane label="排行榜" name="third">
      <el-card class="box-card qwe">
        <el-table :data="tableData1" stripe style="width: 100%">
          <el-table-column prop="id" label="题号" width="60"> </el-table-column>
          <el-table-column prop="score" label="满分" width="80">
          </el-table-column>
          <el-table-column prop="title" label="题目名称" width="440">
            <template slot-scope="scope">
              <el-link href="" type="primary">{{ scope.row.title }}</el-link>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
              <el-tag type="danger" size="mini">{{ scope.row.status }}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
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
        }
      ],
      tableData3: [
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
        },
        {
          data: "asd",
          name: "sadsad",
          address: "sdd"
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

<style scope>
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
  margin-left: 155px;
  margin-top: 15px;
  margin-bottom: 19px;
}
.box-card2 {
  width: 400px;
  margin-left: 739px;
}
.asd {
  position: relative;
  width: 63%;
  left: 0px;
  float: left;
  margin-right: 21px;
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
.el-table__header-wrapper {
  background: rgb(247, 250, 254);
}
.el-table__header {
  padding-top: 17px;
}
.qwe {
  width: 100% !important;
  position: relative;
  left: -155px !important;
}
</style>
