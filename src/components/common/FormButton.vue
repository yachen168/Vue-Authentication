<template>
  <div class="wrapper">
    <button
      class="login-button"
      :class="{ disabled: isDisabled }"
      :disabled="isDisabled"
      @click.prevent="$emit('clickHandler')"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
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
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #ff9db5;
  color: #fff;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.login-button.disabled {
  background-color: rgb(214, 214, 214);
  cursor: not-allowed;
}
</style>
