<template>
  <div style="position:fixed;width:100%;top:0;z-index:999">
    <van-nav-bar
      title="标题"
      :left-text="leftText"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import { NavBar, Toast } from "vant";
export default {
  name: "Header",
  props:{
      leftText:{
          type:String,
          default:'返回吧'
      },
      rightText:{
          type:String,
          default:'按钮'
      }
  },
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {
    
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style>
</style>