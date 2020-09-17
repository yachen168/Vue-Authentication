<template>
  <div>
    <Navbar :isLogout="false" @logout="$store.dispatch('logout')"></Navbar>
    <form class="register">
      <LoginHeader pageName="註冊帳號">
        <div slot="right" @click="$router.push({ name: 'Login' })">
          切換登入
        </div>
      </LoginHeader>
      <LoginInput
        label="用戶暱稱"
        placeholder="例如: 小明"
        type="password"
        :content="registerInfo.name"
        @inputChange="registerInfo.name = $event"
      ></LoginInput>
      <LoginInput
        label="帳號 (電子信箱)"
        placeholder="請輸入帳號"
        :content="registerInfo.email"
        @inputChange="registerInfo.email = $event"
      ></LoginInput>
      <LoginInput
        label="密碼 (須 6~12 字)"
        placeholder="請輸入密碼"
        type="password"
        :content="registerInfo.password"
        @inputChange="registerInfo.password = $event"
      ></LoginInput>
      <FormButton
        buttonText="註冊"
        @clickHandler="$store.dispatch('postRegister', registerInfo)"
        :isDisabled="!isButtonDisabled"
      ></FormButton>
    </form>
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
      registerInfo: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    isButtonDisabled() {
      const isNamePass = /^[A-z|\u4e00-\u9fa5]+/.test(this.registerInfo.name);
      const isEmailPass = /^[A-z0-9]+@[A-z]+\.com{1}$/.test(
        this.registerInfo.email
      );
      const isPasswordPass = /^[A-z\d]{6,16}$/.test(this.registerInfo.password);
      return isNamePass && isEmailPass && isPasswordPass;
    }
  }
};
</script>

<style lang="scss" scoped></style>
