<template>
  <div>
    <form class="register">
      <LoginHeader pageName="註冊帳號">
        <div slot="right" @click="$router.push('/login')">切換登入</div>
      </LoginHeader>
      <LoginInput
        label="帳號"
        placeholder="請輸入 6~12 字元"
        rule="^[A-z|\u4e00-\u9fa5]+"
        @inputChange="registerInfo.name = $event"
      ></LoginInput>
      <LoginInput
        label="信箱"
        placeholder="請輸入信箱"
        rule="^[A-z0-9]+@[A-z]+\.com{1}$"
        @inputChange="registerInfo.email = $event"
      ></LoginInput>
      <LoginInput
        label="密碼"
        placeholder="請輸入 6~12 字元"
        type="password"
        rule="^[A-z\d]{6,16}$"
        @inputChange="registerInfo.password = $event"
      ></LoginInput>
      <LoginButton
        buttonText="註冊"
        @register="$store.dispatch('postRegister', registerInfo)"
        :isDisabled="
          !(registerInfo.name && registerInfo.email && registerInfo.password)
        "
      ></LoginButton>
    </form>
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
  data() {
    return {
      registerInfo: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
