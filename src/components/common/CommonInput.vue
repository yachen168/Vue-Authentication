<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :value="content"
      @input="$emit('update:value', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    placeholder: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .van-field input {
  padding: 10px 5px;
  border: 1px solid #219665;
  border-radius: 5px;
}

::v-deep .van-field {
  flex-direction: column;
  .van-field__label {
    width: auto;
  }
  .van-cell__title {
    font-weight: 500;
    color: #219665;
  }
}
</style>
