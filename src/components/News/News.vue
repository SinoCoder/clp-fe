<template>
  <div class="news-container">
    <NewsList />
  </div>
</template>

<script>
import NewsList from "./NewsList";
export default {
  components: {
    NewsList
  }
};
</script>

<style>
.news-container {
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
