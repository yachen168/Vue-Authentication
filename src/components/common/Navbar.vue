<template>
  <div class="navbar">
    <div>
      <h1>LOGO</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
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
