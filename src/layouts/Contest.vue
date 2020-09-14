<template>
  <div class="main">
    <clp-container class="contest-container">
      <ContestList />
    </clp-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ContestList from "../components/Contest/ContestList";
export default {
  components: {
    ContestList
  }
};
</script>

<style lang="scss" scoped>
.contest-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 40px;
  box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.075) !important;
  background-color: rgb(255, 255, 255);
}
</style>
