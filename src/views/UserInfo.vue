<template>
  <div>
    <Navbar>
      <span
        class="logout"
        @click="$store.dispatch('logout', { remember_token: $store.getters.token })"
        >登出</span
      >
    </Navbar>
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
