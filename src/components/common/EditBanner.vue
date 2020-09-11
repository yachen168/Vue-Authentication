<template>
  <div class="edit-banner">
    <span>{{ title }}</span>
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}
</style>
