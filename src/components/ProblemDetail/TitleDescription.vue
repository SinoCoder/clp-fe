<template>
  <div>
    <template>
      <el-card class="asd">
        <h1>markdown</h1>
      </el-card>

      <!-- 卡片1 -->
      <el-card class="box-card">
        <div class="ruword">
          <span>题目提供者</span>
        </div>
        <div class="ru">
          <el-link type="warning">我是谁？？？</el-link>
        </div>
        <br />
        <br />
        <div class="ruword">
          <span>难度</span>
        </div>
        <div class="ru">
          <el-link type="info">暂无评定</el-link>
        </div>
        <br />
        <br />
        <div>
          <el-link type="primary">提交记录</el-link>
        </div>
      </el-card>
      <!-- 卡片2 -->
      <el-card class="box-card2">
        <span class="tags">标签</span>
        <div class="tag-group">
          <el-tag
            v-for="item in items"
            :key="item.label"
            :type="item.type"
            effect="dark"
          >
            {{ item.label }}
          </el-tag>
        </div>
        <br />
      </el-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "clp-TitleDes",
  data() {
    return {
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.box-card {
  margin-top: 0.6px;
}
.box-card2 {
  width: 400px;
  margin-left: 739px;
  margin-top: 22px;
}
.asd {
  position: relative;
  width: 63%;
  left: 0px;
  float: left;
  margin-right: 21px;
}
.ru {
  display: inline-block;
  width: 250px;
  text-align: right;
}
.ruword {
  display: inline-block;
  width: 100px;
}
.el-link {
  font-weight: 800;
  font-size: 17px;
}
.tags {
  font-size: 20px;
}
.el-tag{
  margin-right: 10px;
}
</style>
