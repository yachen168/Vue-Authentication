<template>
  <div>
    <Navbar :isLogout="true" @logout="$store.dispatch('logout',$store.getters.token)"></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped></style>
