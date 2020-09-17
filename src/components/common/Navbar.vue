<template>
  <div class="navbar">
    <div>
      <h1>LOGO</h1>
    </div>
    <span v-if="isLogout" class="logout" @click="$emit('logout')">登出</span>
  </div>
</template>

<script>
export default {
  props: {
    isLogout: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #219665;
  h1 {
    font-size: 20px;
    letter-spacing: 1px;
    color: #fff;
  }

  .logout {
    color: #fff;
    letter-spacing: 1px;
    cursor: pointer;
  }
}
</style>
