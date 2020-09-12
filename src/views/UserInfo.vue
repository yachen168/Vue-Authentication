<template>
  <div>
    <Navbar></Navbar>
    <UserDetail :userInfo="$store.getters.userInfo"></UserDetail>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import UserDetail from "@/components/userInfo/UserDetail";
export default {
  components: {
    Navbar,
    UserDetail
  },
  created() {
    this.$store.dispatch("fetchUserInfo");
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
