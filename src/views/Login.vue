<template>
  <div>
    <Navbar :isLogout="false" @logout="$store.dispatch('logout')"></Navbar>
    <form class="register">
      <PageTitle pageName="登入">
        <div @click="$router.push({ name: 'Register' })">
          立即註冊
        </div>
      </PageTitle>
      <CommonInput
        label="帳號 (電子信箱)"
        placeholder="請輸入信箱"
        :content="email"
        @update:value="email = $event"
      ></CommonInput>
      <CommonInput
        label="密碼"
        placeholder="請輸入密碼"
        type="password"
        :content="password"
        @update:value="password = $event"
      ></CommonInput>
      <FormButton
        buttonText="登入"
        :isDisabled="!isButtonDisabled"
        @clickHandler="login"
      ></FormButton>
    </form>
    <p class="forget" @click="$router.push({ name: 'ForgetPassword' })">
      忘記密碼
    </p>
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
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    isButtonDisabled() {
      const isEmailPass = /^[A-z0-9]+@[A-z]+\.com{1}$/.test(this.email);
      const isPasswordPass = /^[A-z\d]{6,16}$/.test(this.password);
      return isEmailPass && isPasswordPass;
    }
  }
};
</script>

<style lang="scss" scoped>
.forget {
  width: fit-content;
  margin-left: auto;
  padding: 0 10px;
  cursor: pointer;
}
</style>
