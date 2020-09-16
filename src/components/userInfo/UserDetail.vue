<template>
  <div>
    <h2>{{ userInfo.name }} 你好 :)</h2>
    <!-- <div>{{ userInfo }}</div> -->
    <div
      class="user-edit-button"
      @click="$router.push({ name: 'UserInfoEdit' })"
    >
      編輯個人資料
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.user-edit-button {
  width: 100px;
  text-align: center;
  color: rgb(252, 124, 124);
  border: 1px solid rgb(252, 124, 124);
  border-radius: 3px;
  cursor: pointer;
}
</style>
