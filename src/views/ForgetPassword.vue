<template>
  <div>
    <Navbar :isLogout="false" @logout="$store.dispatch('logout')"></Navbar>
    <form>
      <PageTitle pageName="忘記密碼"></PageTitle>
      <CommonInput
        label="帳號 (電子信箱)"
        placeholder="請輸入帳號"
        :content="forgetPassword.email"
        @inputChange="forgetPassword.email = $event"
      ></CommonInput>
      <CommonInput
        label="新密碼"
        placeholder="請輸入新密碼(6 ~ 12 字元)"
        type="password"
        :content="forgetPassword.password"
        @inputChange="forgetPassword.password = $event"
      ></CommonInput>
      <FormButton
        buttonText="確認更改密碼"
        :isDisabled="!isButtonDisabled"
        @clickHandler="$store.dispatch('forgetPassword', forgetPassword)"
      ></FormButton>
      <FormButton
        buttonText="取消"
        @clickHandler="$router.back()"
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
      forgetPassword: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    isButtonDisabled() {
      const isEmailPass = /^[A-z0-9]+@[A-z]+\.com{1}$/.test(
        this.forgetPassword.email
      );
      const isPasswordPass = /^[A-z\d]{6,16}$/.test(
        this.forgetPassword.password
      );
      return isPasswordPass && isEmailPass;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
</style>
