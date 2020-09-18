<template>
  <div>
    <Navbar :isLogout="true" @logout="$store.dispatch('logout')"></Navbar>
    <form>
      <PageTitle pageName="重新設定新密碼"></PageTitle>
      <CommonInput
        label="新密碼"
        placeholder="請輸入新密碼(6 ~ 12 字元)"
        type="password"
        :content="resetedPassword"
        @update:value="resetedPassword = $event"
      ></CommonInput>
      <CommonInput
        label="確認新密碼"
        placeholder="請再次輸入新密碼"
        type="password"
        :content="checkedPassword"
        @update:value="checkedPassword = $event"
      ></CommonInput>
      <FormButton
        buttonText="確認更改密碼"
        :isDisabled="!isButtonDisabled"
        @clickHandler="$store.dispatch('resetPassword', resetedPassword)"
      ></FormButton>
      <FormButton
        buttonText="取消"
        :isDisabled="false"
        @clickHandler="$router.push({ name: 'UserInfoEdit' })"
      ></FormButton>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import PageTitle from "@/components/common/PageTitle";
import CommonInput from "@/components/common/CommonInput";
import FormButton from "@/components/common/FormButton";

export default {
  components: {
    Navbar,
    PageTitle,
    CommonInput,
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
      const isDoubleCheckEmailPass = this.resetedPassword===this.checkedPassword;
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
