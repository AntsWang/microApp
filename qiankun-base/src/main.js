   // 导入qiankun内置函数
   import {
    registerMicroApps, // 注册子应用
    start // 启动
} from "qiankun";

import Vue from 'vue'
import App from './App.vue'
import {microApps} from './microApps';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#container');

// 注册子应用
registerMicroApps(
    microApps,
    {
        beforeLoad: [ 
            app => {
                console.log("before load", app);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ], // 挂载后回调
        afterUnmount: [
            app => {
                console.log("after unload", app);
            }
        ] // 卸载后回调
    }
 )


// 启动微服务
start();
