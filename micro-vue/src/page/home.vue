<template>
  <div class="hello">
    <Header leftText="测试" />
    <div class="content">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" name="list">列表</van-tabbar-item>
      <van-tabbar-item icon="search" name="position">定位</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="takePhoto">拍照</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="image">图片</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Notify } from "vant";
import Header from "../components/header";
export default {
  name: "home",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Header,
  },
  data() {
    return {
      active: "list",
    };
  },
  methods: {
    onChange(name) {
      this.$router.replace("/" + name);
      //Notify({ type: 'primary', message: index });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin-bottom: 50px;
  margin-top: 46px;
}
</style>
