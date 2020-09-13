<template>
  <div class="edit-page">
    <Navbar></Navbar>
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

    <van-dialog
      v-model="isNameDialogShow"
      title="暱稱"
      show-cancel-button
      confirm-button-text="儲存修改"
      cancel-button-text="取消"
      @confirm="
        $store.dispatch('updateUserInfo', {
          ...$store.getters.userInfo,
          name: content
        })
      "
    >
      <van-field
        :value="$store.getters.userInfo.name"
        @input="content = $event"
        autofocus
      />
    </van-dialog>
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import EditBanner from "@/components/common/EditBanner";
export default {
  components: {
    Navbar,
    EditBanner
  },
  data() {
    return {
      isNameDialogShow: false,
      isDescriptionDialogShow: false,
      content: ""
    };
  },
  created() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      this.$store.dispatch("fetchUserInfo");
    },
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
