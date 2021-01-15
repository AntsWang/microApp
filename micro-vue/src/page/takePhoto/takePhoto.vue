<template>
  <div class="hello">
    <img
      v-for="(item, index) in imageArr"
      :key="index"
      class="image"
      :src="item"
      width="100%"
      height="200px"
    />

    <van-uploader v-model="fileList" multiple />

    <!-- <div class="inputContainer">
      拍照
      <input
        class="input"
        type="file"
        name="photo"
        accept=".jpg,.png"
        multiple
        @change="takePhoto"
      />
    </div> -->
  </div>
</template>

<script>
import { Button, Uploader } from "vant";
import Image from "../image/image.vue";

export default {
  name: "TakePhoto",
  components: {
    [Button.name]: Button,
    [Uploader.name]: Uploader,
  },
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://cloud-image", isImage: true },
      ],
      imageArr: [],
    };
  },
  methods: {
    
    takePhoto(e) {
      let file = e.target.files[0],
        imgSrc = URL.createObjectURL(file);
      this.imageArr.push(imgSrc);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  object-fit: contain;
  margin: 20px 0;
}
.inputContainer {
  position: relative;
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 30px;
  background-color: #1082ff;
  color: #fff;
  margin: 40px auto;
}
.input {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  opacity: 0;
}
</style>
