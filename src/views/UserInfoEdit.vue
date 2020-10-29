<template>
  <div class="edit-page">
    <PageTitle pageName="個人檔案"></PageTitle>
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
        <img src="@/assets/images/avatar.jpg" alt="avatar" v-else />
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
      <p
        class="reset-password"
        @click="$router.push({ name: 'ResetPassword' })"
      >
        重設密碼
      </p>
    </EditBanner>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle";
import EditBanner from "@/components/common/EditBanner";
export default {
  components: {
    PageTitle,
    EditBanner
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
  width: 50px;
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
