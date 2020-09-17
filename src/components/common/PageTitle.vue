<template>
  <div class="header">
    <div class="slot">
      <slot />
    </div>
    <h1>{{ pageName }}</h1>
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
  padding: 10px 15px;
  h1 {
    width: 70%;
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    color: #219665;
  }
  .slot {
    float: right;
    margin-top: 5px;
    font-size: 14px;
    cursor: pointer;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>
