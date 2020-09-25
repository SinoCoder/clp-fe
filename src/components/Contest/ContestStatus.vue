<template>
  <div>
    <div v-if="status == 'over'">
      <el-tag type="info"
        ><i class="el-icon-error"></i>&nbsp; {{ $t("contest.over") }}</el-tag
      >
    </div>
    <div v-if="status == 'on'">
      <el-tag type="success"
        ><i class="el-icon-success"></i>&nbsp; {{ $t("contest.on") }}</el-tag
      >
    </div>
    <div v-if="status == 'wait'">
      <el-tag type="warning"
        ><i class="el-icon-circle-plus"></i>&nbsp;
        {{ $t("contest.wait") }}</el-tag
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    start: String,
    end: String
  },
  data() {
    return {
      status: "end"
    };
  },
  methods: {
    getContestStatus(start, end) {
      let today = new Date();
      start = new Date(start);
      end = new Date(end);
      if (end < today) {
        return "over";
      }
      if (start <= today) {
        return "on";
      }
      if (start > today) {
        return "wait";
      }
    }
  },
  mounted() {
    this.status = this.getContestStatus(this.start, this.end);
  }
};
</script>

<style></style>
