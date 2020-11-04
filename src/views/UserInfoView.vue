<template>
  <div class="user-info-view">
    <div class="avatar-wrapper">
      <img
        :src="$store.getters.userInfo.image_path"
        alt="avatar"
        v-if="$store.getters.userInfo.image_path"
      />
      <img src="@/assets/images/default-avatar.png" alt="avatar" v-else />
    </div>
    <h2>{{ $store.getters.userInfo.name }} 你好 :)</h2>
    <BaseButton buttonText="編輯個人資料" @click="$router.push({ name: 'UserInfoEdit' })"></BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/common/BaseButton"

export default {
  components: {
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
.user-info-view{
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
}

.avatar-wrapper {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
    object-fit: cover;
  }
}

.user-edit-button {
  width: 100px;
  padding: 5px;
  text-align: center;
  color: #219665;
  border: 1px solid #219665;
  border-radius: 3px;
  cursor: pointer;
}
</style>
