<template>
<div class="yemeng3">
<!--  <ul class="list-group shadow">-->
<!--    <router-link to="/yemeng31" class="link"><li class="list-group-item nav-link">门票信息</li></router-link>-->
<!--    <router-link to="/yemeng31" class="link"><li class="list-group-item nav-link">开放时间</li></router-link>-->
<!--    <router-link to="/yemeng31" class="link"><li class="list-group-item nav-link">注意事项</li></router-link>-->
<!--  </ul>-->
  <div class="flex-container">
    <div class="left-fixed">
      <!-- 左侧固定内容 -->
      <el-row class="tac" style="width: 500px">
        <el-col :span="12">
          <!--          <h5 class="mb-2" style="text-align: center">公告</h5>-->
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span style="color: #3498db">最新景区布告</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="this.xiangshi=1">最新公告1</el-menu-item>
                <el-menu-item index="1-2" @click="this.xiangshi=2">最新公告2</el-menu-item>
                <el-menu-item index="1-3" @click="this.xiangshi=3">最新公告3</el-menu-item>
              </el-menu-item-group>

              <el-sub-menu index="1-4">
                <template #title>最新景区公告细则</template>
<!--                <el-menu-item index="1-4-1" @click="this.xiangshi=10">最新细则</el-menu-item>-->
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>


          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"

          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>部分往期公告</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="this.xiangshi=4">往期公告1</el-menu-item>
                <el-menu-item index="1-2" @click="this.xiangshi=5">往期公告2</el-menu-item>
                <el-menu-item index="1-3" @click="this.xiangshi=6">往期公告3</el-menu-item>
              </el-menu-item-group>

              <el-sub-menu index="1-4">
                <template #title>往期公告细则</template>
<!--                <el-menu-item index="1-4-1" @click="this.xiangshi=11">往期细则</el-menu-item>-->
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>

        </el-col>
      </el-row>
    </div>

<!--    右侧内容-->

    <div class="right-content" v-if="xiangshi===0" style="height: 600px;width: 1000px">
      <!-- 右侧内容 -->
<!--      <div class=" border" style="width: 1000px"  v-if="announce.length > 0">-->
<!--        <p style="font-size: 30px;text-align: center">公告布告</p>-->
<!--        <p style="">发起时间：{{announce.slice(-1)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人/发起单位：{{announce.slice(-1)[0].name}}</p>-->
<!--      </div>-->
<!--      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">-->

<!--        {{announce.slice(-1)[0].text}}-->

<!--      </div>-->
    </div>



    <div class="right-content" v-if="xiangshi===1">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px"  v-if="announce.length > 0">
        <p style="font-size: 30px;text-align: center">公告布告</p>
        <p style="">发起时间：{{announce.slice(-1)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人/发起单位：{{announce.slice(-1)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">

           {{announce.slice(-1)[0].text}}

      </div>
    </div>


    <div class="right-content" v-if="xiangshi===2">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" v-if="announce.length > 1">
        <p style="font-size: 30px;text-align: center">公告布告</p>
        <p style="">发起时间：{{announce.slice(-2,-1)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人/发起单位：{{announce.slice(-2,-1)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
        {{announce.slice(-2,-1)[0].text}}
      </div>
    </div>

    <div class="right-content" v-if="xiangshi===3">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" v-if="announce.length > 2">
        <p style="font-size: 30px;text-align: center">公告布告</p>
        <p style="">发起时间：{{announce.slice(-3,-2)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人：{{announce.slice(-3,-2)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
        {{announce.slice(-3,-2)[0].text}}
      </div>
    </div>

    <div class="right-content" v-if="xiangshi===4">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" v-if="announce.length > 3">
        <p style="font-size: 30px">公告布告</p>
        <p style="margin-left: 500px">发起时间：{{announce.slice(-4,-3)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人：{{announce.slice(-4,-3)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
        {{announce.slice(-4,-3)[0].text}}
      </div>
    </div>


    <div class="right-content" v-if="xiangshi===5">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" v-if="announce.length > 4">
        <p style="font-size: 30px">公告布告</p>
        <p style="margin-left: 500px">发起时间：{{announce.slice(-5,-4)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人：{{announce.slice(-5,-4)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
        {{announce.slice(-5,-4)[0].text}}
      </div>
    </div>

    <div class="right-content" v-if="xiangshi===6">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" v-if="announce.length > 5">
        <p style="font-size: 30px">公告布告</p>
        <p style="margin-left: 500px">发起时间：{{announce.slice(-6,-5)[0].time}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布人：{{announce.slice(-6,-5)[0].name}}</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
        {{announce.slice(-6,-5)[0].text}}
      </div>
    </div>


    <div class="right-content" v-if="xiangshi===10">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" >
        <p style="font-size: 30px">景区细则</p>
        <p style="margin-left: 500px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">
<!--        <pre>-->
<!--          景区公告细则-->

<!--                                 一、开放时间及门票-->

<!--                      景区开放时间为每周一至周日，上午9:00至下午6:00。-->
<!--            门票价格如下：-->
<!--                                    成人票：¥100-->
<!--                               儿童票（6岁至18岁）：¥50-->
<!--                      儿童（6岁以下）和老年人（65岁以上）免费入园。-->
<!--                           学生（18岁以下持有效学生证）：¥80-->
<!--                                    二、游览须知-->
<!--                     游客需遵守景区规定，文明游览，保持景区环境整洁。-->
<!--                     不得随地吐痰、乱扔垃圾，禁止破坏植被和野生动物。-->
<!--                  请遵守景区内的标识和指示牌，不得翻越围栏或进入禁止区域。-->
<!--                                    三、安全须知-->
<!--                      请遵守游览路线，不得在危险区域停留或嬉戏。-->
<!--                       儿童需有成年人陪同，注意照看好自身安全。-->
<!--                   遇紧急情况，请立即向工作人员寻求帮助，切勿擅自冒险。-->
<!--                                 四、文化遗产保护-->
<!--                  请爱护景区内的历史文物和文化遗产，不得随意触碰或损坏。-->
<!--                    不得进行商业性拍摄和摄影活动，如需拍照请遵循景区规定。-->
<!--                                 五、其他注意事项-->
<!--                     非经景区许可，禁止擅自开展商业活动或宣传活动。-->
<!--                    请自觉遵守景区的各项规定，共同营造良好的游览环境。-->
<!--                      感谢您的配合与支持，祝您在景区游览愉快！-->
<!--        </pre>-->
      </div>
    </div>



    <div class="right-content" v-if="xiangshi===11">
      <!-- 右侧内容 -->
      <div class=" border" style="width: 1000px" >
        <p style="font-size: 30px">景区细则</p>
        <p style="margin-left: 500px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class=" border" style=" margin-top: 50px;height: 400px;width: 1000px;color: white">

      </div>
    </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng3",
  data(){
    return {
      xiangshi:0,
      announce:[],
    }
  },
  created(){
    this.getAll();
  },
  methods: {
    getAll(){
      axios.get(`http://localhost/Announcement`)
          .then(res=>{
            this.announce=res.data;
            console.log(this.announce);
          })
      console.log(this.announce);
    }
  }
}
</script>

<style scoped>
.yemeng3{
  /*width: 200px;*/

}
.list-group-item{
  text-align: center;
}
/* 去除链接下划线 */
.link {
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
  background-image: url("./assets/6.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.border{
  border-width: 2px;      /* 边框宽度 */
  border-style: solid;    /* 边框样式（实线） */
  border-color: #333;     /* 边框颜色 */
}
</style>