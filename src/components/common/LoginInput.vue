<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content"
      @input="checkRules"
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
  methods: {
    checkRules(){
      const rule = new RegExp(this.rule);
      if (rule.test(this.content)){
        this.$emit('inputChange', this.content);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
