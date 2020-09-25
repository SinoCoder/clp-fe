<template>
  <div>
    <div v-if="type == 'PUBLIC'" style="color:#67C23A">
      <i class="el-icon-check"></i>
      {{ $t("contest.public") }}
    </div>
    <div v-if="type == 'CERTAIN_SCHOOL_ONLY'" style="color:#606266">
      <i class="el-icon-school"></i>
      {{ $t("contest.certainSchool") }}
    </div>
    <div v-if="type == 'CERTAIN_TEAM_ONLY'" style="color:#606266">
      <i class="el-icon-ship"></i>
      {{ $t("contest.certainTeam") }}
    </div>
    <div v-if="type == 'CERTAIN_USER_ONLY'" style="color:#606266">
      <i class="el-icon-user"></i>
      {{ $t("contest.certainUser") }}
    </div>
    <div v-if="type == 'PRIVATE'" style="color:#F56C6C">
      <i class="el-icon-lock"></i>
      {{ $t("contest.private") }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>

<style></style>
