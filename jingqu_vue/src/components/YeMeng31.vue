<template>
<!--  <div  class="container">-->
<!--        <div class="cbl box1">-->
<!--          <ul class="list-group shadow">-->
<!--            <router-link to="/yemeng31" class="link"><li class="list-group-item nav-link">门票信息</li></router-link>-->
<!--            <router-link to="/yemeng32" class="link"><li class="list-group-item nav-link">开放时间</li></router-link>-->
<!--            <router-link to="/yemeng33" class="link"><li class="list-group-item nav-link">注意事项</li></router-link>-->
<!--          </ul>-->
<!--        </div>-->

<!--        <div class="yemeng31 box2">-->
<!--          111-->
<!--        </div>-->
<!--  </div>-->

  <div class="flex-container">
    <div class="left-fixed">
      <!-- 左侧固定内容 -->
      <el-row class="tac" style="width: 500px">
        <el-col :span="12">
<!--          <h5 class="mb-2" style="text-align: center">公告</h5>-->
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span style="color: #3498db">景区布告</span>
              </template>
              <el-menu-item-group>
                <router-link to="/yemeng32"><el-menu-item index="1-1">内容1</el-menu-item></router-link>
                <el-menu-item index="1-2">内容2</el-menu-item>
              </el-menu-item-group>

              <el-sub-menu index="1-4">
                <template #title>景区公告细则</template>
                <el-menu-item index="1-4-1">内容1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>


          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>业务公告</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">内容1</el-menu-item>
                <el-menu-item index="1-2">内容2</el-menu-item>
              </el-menu-item-group>

              <el-sub-menu index="1-4">
                <template #title>业务公告细则</template>
                <el-menu-item index="1-4-1">内容1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>

        </el-col>
      </el-row>
    </div>

    <div class="right-content">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px">
       <p style="font-size: 30px">公告布告</p>
        <p style="margin-left: 500px">发起时间：2024.2.6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人：啊飒飒</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px">
        <pre>

            亲爱的游客们，
            欢迎来到我们美丽的景区，您的到来是我们最大的荣幸！在这里，我们努力提供给您一个难忘的旅行体验。
                                                   🌲 **新景点开放！** 🌲
            探索我们最新开放的景点——梦幻花海。在这里，您将被五彩斑斓的花朵所包围，感受大自然的奇妙之美。
                                                   🎉 **特别活动通知** 🎉
            本周末我们将举办夜间星空观赏活动。一起来欣赏清澈的星空，感受大自然的神秘魅力。敬请提前预订名额！
                                                    🍽 **美食推荐** 🍽
            尝试我们景区内的各类美食，从地道的当地小吃到精致的餐厅，满足您挑剔的味蕾。
                                                     📅 **开放时间** 📅
                                           - 周一至周五：9:00 AM - 6:00 PM
                                           - 周末和节假日：9:00 AM - 8:00 PM
                                                     🎫 **门票信息** 🎫
                                                        成人：¥100
                                                     儿童（3-12岁）：¥50
                                                     婴儿（3岁以下）：免费
                                       感谢您选择我们的景区，我们期待与您共度美好时光！
                                       如有任何问题或需要帮助，请随时向我们的工作人员咨询。
                                                      祝您有一个愉快的旅行！
        </pre>
      </div>
    </div>

  </div>






</template>
<script>
import { ref } from 'vue';

export default {
  name: 'YeMeng31',
  setup() {
    // 使用 ref 创建响应式数据
    const data = ref({
      // 初始数据或其他需要的数据
    });

    // 处理菜单打开事件
    const handleOpen = (key, keyPath) => {

      console.log(key, keyPath);
      // 添加其他逻辑
    };

    // 处理菜单关闭事件
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
      // 添加其他逻辑
    };

    // 返回需要在模板中使用的数据和方法
    return {
      data,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style scoped>

/* 去除链接下划线 */
a.link {
  text-decoration: none;
}


.flex-container {
  display: flex;
}

.left-fixed {
  width: 250px;
}

.right-content {
  /*flex: 1; !* 右侧内容占满剩余空间 *!*/
  margin-left: 100px;
  padding: 20px; /* 可根据实际情况设置 */

}
.border{
  border-width: 2px;      /* 边框宽度 */
  border-style: solid;    /* 边框样式（实线） */
  border-color: #333;     /* 边框颜色 */
}
</style>