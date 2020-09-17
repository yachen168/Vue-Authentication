<template>
  <form>
    <h1>重新設定新密碼</h1>
    <LoginInput
      label="新密碼"
      placeholder="請輸入新密碼(6 ~ 12 字元)"
      type="password"
      rule="^[A-z\d]{6,16}$"
      @inputChange="resetedPassword = $event"
    ></LoginInput>
    <LoginInput
      label="確認新密碼"
      placeholder="請再次輸入新密碼"
      type="password"
      rule="^[A-z\d]{6,16}$"
      @inputChange="checkedPassword = $event"
    ></LoginInput>
    <FormButton
      buttonText="確認更改密碼"
      :isDisabled="resetedPassword&&checkedPassword&&resetedPassword !== checkedPassword"
      @clickHandler="$store.dispatch('resetPassword', resetedPassword)"
    ></FormButton>
    <FormButton
      buttonText="取消"
      @clickHandler="$router.push({name: 'UserInfoEdit'})"
    ></FormButton>
  </form>
</template>

<script>
import LoginInput from "@/components/common/LoginInput";
import FormButton from "@/components/common/FormButton";

export default {
  components: {
    LoginInput,
    FormButton
  },
  data() {
    return {
      resetedPassword: "",
      checkedPassword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
