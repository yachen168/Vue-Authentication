<template>
  <div>
    <UserDetail :userInfo="$store.getters.userInfo"></UserDetail>
  </div>
</template>

<script>
import UserDetail from "@/components/userInfo/UserDetail";

export default {
  components: {
    UserDetail
  },
  created() {
    const token = localStorage.getItem("remember_token");
    this.$store.dispatch("fetchUserInfo", {
      remember_token: token
    });
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
