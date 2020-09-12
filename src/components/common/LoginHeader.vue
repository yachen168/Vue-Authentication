<template>
  <div class="header">
    <div>
      <slot name="left" />
    </div>
    <h1>{{ pageName }}</h1>
    <div class="slot">
      <slot name="right" />
    </div>
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
  .slot {
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
