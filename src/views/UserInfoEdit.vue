<template>
  <div class="edit-page">
    <PageTitle pageName="編輯個人檔案"></PageTitle>
    <EditBanner title="個人照片">
      <div class="avatar-wrapper">
        <van-uploader
          class="upload-avatar"
          :after-read="afterRead"
          ref="files"
        />
        <img
          :src="$store.getters.userInfo.image_path"
          alt="avatar"
          v-if="$store.getters.userInfo.image_path"
        />
        <img src="@/assets/images/default-avatar.png" alt="avatar" v-else />
        <div class="icon-camera"><img src="@/assets/images/camera.png" alt="icon"></div>
      </div>
    </EditBanner>
    <EditBanner title="暱稱" @openDialog="isNameDialogShow = true">
      <span>{{
        $store.getters.userInfo["name"] ? $store.getters.userInfo["name"] : "-"
      }}</span>
    </EditBanner>
    <EditBanner title="信箱">
      <span>{{ $store.getters.userInfo.email }}</span>
    </EditBanner>
    <EditBanner title="密碼">
      <span
        class="reset-password"
        @click="$router.push({ name: 'ResetPassword' })"
      >
        重設密碼
      </span>
    </EditBanner>
    <BaseButton 
      buttonText="返回" 
      :isDisabled="false" 
      @click="$router.push({name:'UserInfoView'})"></BaseButton>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
import EditBanner from "@/components/common/EditBanner";
import BaseButton from "@/components/common/BaseButton"
export default {
  components: {
    PageTitle,
    EditBanner,
    BaseButton
  },
  data() {
    return {
      isNameDialogShow: false,
      isDescriptionDialogShow: false,
      content: ""
    };
  },
  methods: {
    afterRead(file) {
      const token = localStorage.getItem("remember_token");
      const formdata = new FormData();
      formdata.append("photo", file.file);
      formdata.append("remember_token", token);
      this.$store.dispatch("uploadFile", formdata);
    }
  }
};
</script>

<style lang="scss" scoped>
.edit-page img {
  width: 80px;
  border-radius: 50%;
}

.avatar-wrapper {
  position: relative;
  cursor: pointer;
  .upload-avatar {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .icon-camera{
    width: 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    img {
      width: 100%;
    }
  }
}

.reset-password {
  width: 80px;
  margin-left: auto;
  color: rgb(0, 119, 255);
  cursor: pointer;
}

::v-deep .van-uploader__wrapper {
  display: block;
  height: 100%;
  .van-uploader__upload {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>
