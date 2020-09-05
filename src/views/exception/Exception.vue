<template>
  <div class="exception">
    <div class="exception-image-block">
      <div
        class="exception-image"
        :style="{ 'background-image': `url(${model.src})` }"
      ></div>
    </div>

    <div class="exception-content">
      <h1 class="title">{{ model.title }}</h1>
      <p class="description">{{ model.description }}</p>
      <div class="action">
        <el-button type="primary" @click="goIndex">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goIndex() {
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
