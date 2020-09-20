<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <!-- 比赛说明 -->
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
            <span>比赛详情</span>
          </div>
          <span>比赛编号</span>
          <span v-text="id" class="word-right">{{ id }}</span>
          <br />
          <span>举办团队</span>
          <el-link v-text="team" class="word-right" type="primary">{{
            team
          }}</el-link>
          <br />
          <span>比赛类型</span>
          <template>
            <div class="word-right">
              <!-- 这个地方想写个读取数组 但是还没想出来怎么弄 -->
              <el-tag v-text="type" effect="dark" @click="handle1" size="small">
                {{ type }}
              </el-tag>
            </div>
          </template>
          <br />
          <span>开始时间</span>
          <div class="word-right">
            <span v-text="start">{{ start }}</span>
          </div>
          <br />
          <span>结束时间</span>
          <div v-text="start" class="word-right">
            <span>{{ end }}</span>
          </div>
          <br />
          <span>比赛时长</span>
          <div class="word-right">
            <span v-text="time">{{ time }}</span>
          </div>
        </el-card>
        <!-- 卡片2 -->
        <el-card class="box-card2">
          <div slot="header" class="clearfix">
            <span v-text="status">{{ status }}</span>
          </div>
          <div>
            <p v-text="tips">
              {{ tips }}
            </p>
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

        <!-- 卡片1 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>比赛详情</span>
          </div>
          <span>比赛编号</span>
          <span v-text="id" class="word-right">{{ id }}</span>
          <br />
          <span>举办团队</span>
          <el-link v-text="team" class="word-right" type="primary">{{
            team
          }}</el-link>
          <br />
          <span>比赛类型</span>
          <template>
            <div class="word-right">
              <!-- 这个地方想写个读取数组 但是还没想出来怎么弄 -->
              <el-tag v-text="type" effect="dark" @click="handle1" size="small">
                {{ type }}
              </el-tag>
            </div>
          </template>
          <br />
          <span>开始时间</span>
          <div class="word-right">
            <span v-text="start">{{ start }}</span>
          </div>
          <br />
          <span>结束时间</span>
          <div v-text="start" class="word-right">
            <span>{{ end }}</span>
          </div>
          <br />
          <span>比赛时长</span>
          <div class="word-right">
            <span v-text="time">{{ time }}</span>
          </div>
        </el-card>
        <!-- 卡片2 -->
        <el-card class="box-card2">
          <div slot="header" class="clearfix">
            <span v-text="status">{{ status }}</span>
          </div>
          <div>
            <p v-text="tips">
              {{ tips }}
            </p>
          </div>
        </el-card>
      </template>
    </el-tab-pane>

    <!-- 排行榜 -->
    <el-tab-pane label="排行榜" name="third">
      <el-card class="box-card qwe">
        <el-table :data="tableData3" stripe style="width: 100%">
          <!-- 名次 -->
          <el-table-column prop="rank" label="名次" width="60">
          </el-table-column>
          <!-- 参赛者 -->
          <el-table-column prop="member" label="满分" width="185">
            <template slot-scope="scope">
              <el-link href="" type="primary">{{ scope.row.member }}</el-link>
            </template>
          </el-table-column>
          <!-- 总分 -->
          <el-table-column prop="score" label="总分" width="160">
            <template slot-scope="scope">
              <span>{{ scope.row.score }}</span>
              <br />
              <span>{{ scope.row.timesum }}</span>
            </template>
          </el-table-column>
          <!-- 题号 -->
          <el-table-column
            width="77.9"
            v-for="(item, index) in tableData31"
            :key="item"
            :prop="item"
            :label="item"
          >
            <template slot-scope="scope">
              <span
                style="font-weight: 600; color: rgb(82,196,26);"
                v-if="scope.row.proscores[index] == 100"
              >
                {{ scope.row.proscores[index] }}
                <br />
                {{ scope.row.timelimt[index] }}
              </span>

              <span
                style="font-weight: 600; color: rgb(250,219,20);"
                v-else-if="scope.row.proscores[index] >= 70"
              >
                {{ scope.row.proscores[index] }}
              </span>

              <span
                style="font-weight: 600; color: rgb(243,156,17);"
                v-else-if="scope.row.proscores[index] >= 40"
              >
                {{ scope.row.proscores[index] }}
              </span>

              <span style="font-weight: 600; color: rgb(231,76,60);" v-else>
                {{ scope.row.proscores[index] }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "clp-contabs",
  data() {
    return {
      activeName: "first",
      // 题目列表
      tableData1: [
        {
          id: 1,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        },
        {
          id: 2,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        },
        {
          id: 3,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        },
        {
          id: 4,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        },
        {
          id: 5,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        },
        {
          id: 6,
          score: 100,
          title: "zrmpaul Loves Array",
          tags: "好难",
          status: "未提交",
          cardwords: [123, 1321, 5456, 65454, 65465]
        }
      ],
      // 排行榜前段
      tableData3: [
        {
          rank: 1,
          member: "_ingennavn",
          score: 600,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [100, 100, 100, 100, 100, 100, 100, 100, 100],
          timelimt: [
            "443ms",
            "888ms",
            "1ms",
            "43ms",
            "103ms",
            "1000ms",
            "1300ms",
            "543ms",
            "3ms"
          ]
        },
        {
          rank: 2,
          member: "zhouyuyang",
          score: 600,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [1, 30, 50, 70, 80, 2, 90, 100, 0],
          timelimt: ["", "", "", "", "", "", "", "443ms", ""]
        },
        {
          rank: 3,
          member: "Dawn",
          score: 1000,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [1, 2, 100, 4, 50, 6, 7, 1, 0],
          timelimt: ["", "", "443ms", "", "", "", "", "", ""]
        },
        {
          rank: 4,
          member: "不会真的有人起这么长的名字吧",
          score: 600,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [100, 30, 3, 4, 5, 70, 7, 70, 20],
          timelimt: ["443ms", "", "", "", "", "", "", "", ""]
        },
        {
          rank: 5,
          member: "	水上由岐",
          score: 100,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [100, 2, 3, 80, 5, 6, 7, 45, 98],
          timelimt: ["443ms", "", "", "", "", "", "", "", ""]
        },
        {
          rank: 6,
          member: "	水上由岐",
          score: 100,
          timesum: "3.37s",
          prolist: [132, 465, "asdsd"],
          proscores: [100, 2, 3, 4, 40, 6, 7, 8, 9],
          timelimt: ["443ms", "", "", "", "", "", "", "", ""]
        }
      ],
      // 排行榜后段
      tableData31: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
      // 卡片上
      id: 66666,
      team: "齐鲁工业大学",
      type: "ACM",
      start: "2020-08-11T08:28:16.000+00:00",
      end: "2020-07-20T02:30:00.000+00:00",
      time: "4.00h",
      status: "比赛已经结束",
      tips:
        "温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示"
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
.word-right {
  display: inline-block;
  text-align: right;
  width: 288px;
  line-height: 30px;
}
</style>
