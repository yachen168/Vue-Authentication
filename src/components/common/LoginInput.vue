<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      :class="{ fail: checkRules }"
      v-model="content"
      @input="$emit('inputChange', content)"
    />
  </div>
</template>

<script>
export default {
  props: {
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
    },
    rule: {
      type: String
    }
  },
  data() {
    return {
      content: ""
    };
  },
  computed: {
    checkRules() {
      const rule = new RegExp(this.rule);
      return !rule.test(this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .van-field.fail input {
  border: 1px solid rgb(241, 92, 92);
}
</style>
