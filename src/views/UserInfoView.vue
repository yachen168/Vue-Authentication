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
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
