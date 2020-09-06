<template>
  <div class="register">
    <LoginHeader pageName="註冊帳號"></LoginHeader>
    <LoginInput
      label="帳號"
      placeholder="請輸入帳號"
      rule="^[A-z\d]{6,16}$"
      @inputChange="response => userName = response"
    ></LoginInput>
    <LoginInput
      label="密碼"
      placeholder="請輸入密碼"
      type="password"
      rule="^[\d|A-z]{8,}$"
      @inputChange="response => password = response"
    ></LoginInput>
    <LoginButton buttonText="註冊"></LoginButton>
  </div>
</template>

<script>
import LoginHeader from "@/components/common/LoginHeader";
import LoginInput from "@/components/common/LoginInput";
import LoginButton from "@/components/common/LoginButton";

export default {
  components: {
    LoginHeader,
    LoginInput,
    LoginButton
  },
  data(){
    return {
      userName: '',
      password: ''
    } 
  }
};
</script>

<style lang="scss" scoped>
</style>
