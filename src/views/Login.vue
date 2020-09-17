<template>
  <div>
    <form class="register">
      <LoginHeader pageName="登入">
        <div slot="right" @click="$router.push({name: 'Register'})">立即註冊</div>
      </LoginHeader>
      <LoginInput
        label="信箱"
        placeholder="請輸入信箱"
        rule="^[A-z0-9]+@[A-z]+\.com{1}$"
        @inputChange="loginInfo.email = $event"
      ></LoginInput>
      <LoginInput
        label="密碼"
        placeholder="請輸入密碼"
        type="password"
        rule="^[A-z\d]{6,16}$"
        @inputChange="loginInfo.password = $event"
      ></LoginInput>
      <FormButton
        buttonText="登入"
        :isDisabled="!(loginInfo.email && loginInfo.password)"
        @clickHandler="$store.dispatch('postLogin', loginInfo)"
      ></FormButton>
    </form>
    <!-- <p @click="$router.push({ name: 'ResetPassword' })">忘記密碼</p> -->
  </div>
</template>

<script>
import LoginHeader from "@/components/common/LoginHeader";
import LoginInput from "@/components/common/LoginInput";
import FormButton from "@/components/common/FormButton";

export default {
  components: {
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
  }
};
</script>

<style lang="scss" scoped></style>
