<template>
  <div class="navbar">
    <div>
      <h1>LOGO</h1>
    </div>
    <div class="search">
      <van-icon name="search" />
    </div>
    <div class="avatar">
      <img src="@/assets/images/avatar.jpg" alt="" />
    </div>
    <span class="logout" @click="$emit('logout')">登出</span>
    <div class="download">下載 App</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 5px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 20px;
  }
  .search {
    display: flex;
    align-items: center;
    width: 35%;
    padding: 0 5px;
    height: 30px;
    border-radius: 5px;
    background-color: #f4f4f4;
  }

  .avatar {
    width: 40px;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  .download {
    padding: 5px;
    font-size: 14px;
    background-color: #ff9db5;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .logout {
    cursor: pointer;
  }
}
</style>
