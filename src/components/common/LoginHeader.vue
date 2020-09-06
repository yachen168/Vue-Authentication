<template>
  <div class="header">
    <div></div>
    <h1>{{ pageName }}</h1>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
