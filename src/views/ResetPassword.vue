<template>
  <div>
    <Navbar :isLogout="true" @logout="$store.dispatch('logout')"></Navbar>
    <form>
      <h1>重新設定新密碼</h1>
      <LoginInput
        label="新密碼"
        placeholder="請輸入新密碼(6 ~ 12 字元)"
        type="password"
        :content="resetedPassword"
        @inputChange="resetedPassword = $event"
      ></LoginInput>
      <LoginInput
        label="確認新密碼"
        placeholder="請再次輸入新密碼"
        type="password"
        :content="checkedPassword"
        @inputChange="checkedPassword = $event"
      ></LoginInput>
      <FormButton
        buttonText="確認更改密碼"
        :isDisabled="!isButtonDisabled"
        @clickHandler="$store.dispatch('resetPassword', resetedPassword)"
      ></FormButton>
      <FormButton
        buttonText="取消"
        @clickHandler="$router.push({ name: 'UserInfoEdit' })"
      ></FormButton>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import LoginInput from "@/components/common/LoginInput";
import FormButton from "@/components/common/FormButton";

export default {
  components: {
    Navbar,
    LoginInput,
    FormButton
  },
  data() {
    return {
      resetedPassword: "",
      checkedPassword: ""
    };
  },
  computed: {
    isButtonDisabled() {
      const isPasswordPass = /^[A-z\d]{6,16}$/.test(this.resetedPassword);
      const isDoubleCheckEmailPass = /^[A-z\d]{6,16}$/.test(
        this.checkedPassword
      );
      return isPasswordPass && isDoubleCheckEmailPass;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
