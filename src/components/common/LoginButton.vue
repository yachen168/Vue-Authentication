<template>
  <div class="wrapper">
    <div class="login-button">{{ buttonText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px;
}
.login-button {
  height: 45px;
  line-height: 45px;
  background-color: #ff9db5;
  color: #fff;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
}
</style>
