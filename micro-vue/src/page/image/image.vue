<template>
  <div>
    <van-image
      width="100%"
      height="100%"
      :src="require('../../assets/huoying.jpg')"
    />
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  name: "Iamge",
  components: {
    [Image.name]: Image,
  },
};
</script>

<style>
</style>