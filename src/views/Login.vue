<template>
  <div>
    <Navbar :isLogout="false" @logout="$store.dispatch('logout')"></Navbar>
    <form class="register">
      <LoginHeader pageName="登入">
        <div slot="right" @click="$router.push({ name: 'Register' })">
          立即註冊
        </div>
      </LoginHeader>
      <LoginInput
        label="帳號 (電子信箱)"
        placeholder="請輸入信箱"
        :content="loginInfo.email"
        @inputChange="loginInfo.email = $event"
      ></LoginInput>
      <LoginInput
        label="密碼"
        placeholder="請輸入密碼"
        type="password"
        :content="loginInfo.password"
        @inputChange="loginInfo.password = $event"
      ></LoginInput>
      <FormButton
        buttonText="登入"
        :isDisabled="!isButtonDisabled"
        @clickHandler="$store.dispatch('postLogin', loginInfo)"
      ></FormButton>
    </form>
    <!-- <p @click="$router.push({ name: 'ResetPassword' })">忘記密碼</p> -->
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import LoginHeader from "@/components/common/LoginHeader";
import LoginInput from "@/components/common/LoginInput";
import FormButton from "@/components/common/FormButton";

export default {
  components: {
    Navbar,
    LoginHeader,
    LoginInput,
    FormButton
  },
  data() {
    return {
      loginInfo: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    isButtonDisabled() {
      const isEmailPass = /^[A-z0-9]+@[A-z]+\.com{1}$/.test(
        this.loginInfo.email
      );
      const isPasswordPass = /^[A-z\d]{6,16}$/.test(this.loginInfo.password);
      return isEmailPass && isPasswordPass;
    }
  }
};
</script>

<style lang="scss" scoped></style>
