import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'//图标

import 'element-plus/dist/index.css'

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import routers from'./routers/router'

// // main.js
// import { eventBus } from './eventBus';  // 假设事件总线的文件路径是 ./eventBus，根据实际情况更新


//import axios from "axios";
const app = createApp(App);
//使用图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// // 将事件总线添加到 app.config.globalProperties 中
// app.config.globalProperties.$eventBus = eventBus;

app.use(routers);
app.use(ElementPlus);
app.mount('#app');
