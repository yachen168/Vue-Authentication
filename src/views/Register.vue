<template>
  <div>
    <Navbar></Navbar>
    <form class="register">
      <PageTitle pageName="註冊帳號">
        <div @click="$router.push({ name: 'Login' })">
          切換登入
        </div>
      </PageTitle>
      <CommonInput
        label="用戶暱稱"
        placeholder="例如: 小明"
        :content="registerInfo.name"
        @update:value="registerInfo.name = $event"
      ></CommonInput>
      <CommonInput
        label="帳號 (電子信箱)"
        placeholder="請輸入帳號"
        :content="registerInfo.email"
        @update:value="registerInfo.email = $event"
      ></CommonInput>
      <CommonInput
        label="密碼 (須 6~12 字)"
        placeholder="請輸入密碼"
        type="password"
        :content="registerInfo.password"
        @update:value="registerInfo.password = $event"
      ></CommonInput>
      <BaseButton
        buttonText="註冊"
        :isDisabled="!isButtonDisabled"
        @click="dispatch('register', registerInfo)"
      ></BaseButton>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import PageTitle from "@/components/common/PageTitle";
import CommonInput from "@/components/common/CommonInput";
import BaseButton from "@/components/common/BaseButton";

export default {
  components: {
    Navbar,
    PageTitle,
    CommonInput,
    BaseButton
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
