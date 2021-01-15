<template>
  <div class="login">
    <div class="logo">
      <van-image
        round
        width="40vh"
        height="40vh"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import { Button, Form, Field, Image } from "vant";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
    [Image.name]: Image,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {},

  methods: {
     onSubmit(values) {
         let {username,password} = values;
         if(username=='admin'&&password=='admin'){
             this.$router.replace('/');
         }
      console.log('submit', values);
    },
  },
};
</script>
<style lang="less" scoped>
.logo {
  margin-top: 20vh;
  margin-bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>