<template>
  <div>
    <Navbar @logout="$store.dispatch('logout')"></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
export default {
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch("fetchUserInfo");
  }
};
</script>

<style lang="scss" scoped></style>
