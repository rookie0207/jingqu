<template>
<div class="yemeng1">

  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="require(`./assets/${item}.jpg`)" class="d-block w-100"  alt="...">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

</div>

<!--  <div class="div1">-->
<!--    <p style="font-family: STXingkai ;font-size: 50px;color: white">-->
<!--      历史概述-->
<!--    </p>-->
<!--    <p style="font-family: STXingkai;font-size: 30px;color: white">-->
<!--      &nbsp;&nbsp;&nbsp;&nbsp;三清山的第一次大海浸发生于14亿年前的中元古界。那时三清山地区的地壳运动正处于“地槽”沉降阶段，海水浸没达4亿年之久，沉积数千米厚的双桥山群的复理式海相碎屑岩，并夹杂有海底火山喷发物。在“晋宁运动”后，才结束了地槽式沉降历史，地壳开始逐渐回返上升，出水为陆，三清山地区进入相对稳定的“地台”阶段。<br>&nbsp;&nbsp;&nbsp;&nbsp;10亿年前，三清山地区成为华南洋中的一个岛弧，9-8.5亿年前后，洋盆消失、扬子古板块与华夏古板块碰撞，三清山地区恰处于古板块结合带。中生代以来，陆内A型俯冲与陆内伸展奠定了地质构造和地理格架，为三清山花岗岩地质地貌的形成、生物的繁衍以及人类的发展提供了优越的地质环境。-->
<!--      <br>-->
<!--      &nbsp;&nbsp;&nbsp;&nbsp;-->
<!--      三叠世印支运动之后，三清山及其相邻地区为陆内地势相对较低的复式向斜。此后，才逐渐形成今日所见的盆岭地貌格局。-->
<!--      在中—晚侏罗世—早白垩世盆岭雏-->
<!--    </p>-->
<!--  </div>-->
<!--  <div class="div2" >-->
<!--    <p style="font-family: STXingkai ;font-size: 50px;color: black" >-->
<!--      水文气候-->
<!--    </p>-->
<!--    <p style="font-family: STXingkai;font-size: 40px;color: black">-->
<!--      气候-->
<!--    </p>-->
<!--    <p style="font-family: STXingkai;font-size: 30px;color: black">-->
<!--      &nbsp;&nbsp;&nbsp;&nbsp;三清山地处中亚热带，东距东海约340km，故受海洋性气候影响，属中亚热带季风气候类型，兼具山地气候特征。具有四季分明，夏季凉爽，春秋漫长，冬季雪漫群峰的特点。年平均气温为10.9℃，7~8月极端最高气温为33℃，7月平均气温为21.1℃，1月极端最低气温为-16℃，平均为-0.6℃。年平均降水量为1857.7mm，年平均蒸发量为1331.6mm，相对湿度为82%-->
<!--    </p>-->
<!--    <p style="font-family: STXingkai;font-size: 40px;color: black">-->
<!--      水文-->
<!--    </p>-->
<!--    <p style="font-family: STXingkai;font-size: 30px;color: black">-->
<!--      &nbsp;&nbsp;&nbsp;&nbsp;三清山位处长江流域中游、鄱阳湖水系之一的信江源头，地表水为沟谷溪流水系，东南面分数股顺沟而下，汇入信江；西北侧经乐安河流入鄱阳湖。山体上水源均来自雨水，降水顺着发达的构造裂隙就近排泄于沟谷，雨季水源充足，旱季水源较贫乏，季节性变化明显。地下水主要含于基岩裂隙中-->
<!--    </p>-->
<!--  </div>-->

<!--  <div class="flex-container">-->
<!--    <div class="div3">-->
<!--      <p style="font-family: STXingkai ;font-size: 40px;color: green">-->
<!--        人文历史一-->
<!--      </p>-->
<!--      <p style="font-family: STXingkai;font-size: 30px;color: green">-->
<!--        &nbsp;&nbsp;&nbsp;&nbsp;晋代医药学家、道教理论家、著名道士葛洪，约在东晋升平年间来到三清山炼丹。唐乾符年间，紫金光禄大夫、信州太守王鉴，暮年携家隐退在山下的大源坞（今德兴反大乡引浆村）。宋乾道六年（1170），王鉴的第十代孙王霖创建三清道观，后因世乱荒年，道观毁。-->
<!--      </p>-->
<!--    </div>-->

<!--    <div class="div4">-->
<!--      <p style="font-family: STXingkai ;font-size: 40px;color: green">-->
<!--        人文历史二-->
<!--      </p>-->
<!--      <p style="font-family: STXingkai;font-size: 30px;color: green">-->
<!--        &nbsp;&nbsp;&nbsp;&nbsp;明景泰年间（1450-1456），王鉴的第二十八代孙王祜，在旧基再建三清宫，并沿途设景，增设殿宇，并施田以膳羽士。当时资政大夫、南京兵部尚书孙原贞为其手书“三清宫”坊额，三清山乃因此日渐闻名遐迩。-->
<!--      </p>-->
<!--    </div>-->

<!--    <div class="div5">-->
<!--      <p style="font-family: STXingkai ;font-size: 40px;color: green">-->
<!--        人文历史三-->
<!--      </p>-->
<!--      <p style="font-family: STXingkai;font-size: 30px;color: green">-->
<!--        &nbsp;&nbsp;&nbsp;&nbsp;清代，三清山的天姿国色吸引着八方游客，时有名人程云吉、程一先、毛九瑞、肖立选、陈壎、程光壁、余朝楷等先后上山观光，浙江、安徽等省香客亦到三清山进香。三清山旅游业得到发展。而在清末和民国期间，由于连年战乱，三清山一度衰落：-->
<!--      </p>-->
<!--    </div>-->

<!--    <div class="div6">-->
<!--      <p style="font-family: STXingkai ;font-size: 40px;color: green">-->
<!--        人文历史四-->
<!--      </p>-->
<!--      <p style="font-family: STXingkai;font-size: 30px;color: green">-->
<!--        &nbsp;&nbsp;&nbsp;&nbsp;2005年9月被列为国家地质公园 [5]。2008年7月8日，第32届世界遗产大会将三清山列入《世界遗产名录》，三清山成为中国第七个、江西第一个世界自然遗产 [6]。2012年9月21日，在葡萄牙阿洛卡举行的第11届世界地质公园大会上，江西省三清山被联合国教科文组织正式列入世界地质公园名录 [7]。2011年被正式授予“国家5A级旅游景区”称号-->
<!--      </p>-->
<!--    </div>-->
<!--  </div>-->
  <div style="background-color: #ecf5ff;">




<h1 style="text-align: center;font-family: STXingkai;">景区概述</h1>
<!--第一个-->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="max-width: 480px; ">
          <template #header><p style="font-family: STXingkai;font-size: 30px;">历史概述</p></template>
          <img
              src="./assets/11.jpg"
              style="width: 100%"
          />
        </el-card>
        <!--      <img src="./assets/11.jpg" style="width: 200px;height: 300px">-->

      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="width: 480px" shadow="always">
              <p style="font-family: STXingkai;font-size: 20px;color: green">
                &nbsp;&nbsp;&nbsp;&nbsp;三清山的第一次大海浸发生于14亿年前的中元古界。那时三清山地区的地壳运动正处于“地槽”沉降阶段，海水浸没达4亿年之久，沉积数千米厚的双桥山群的复理式海相碎屑岩，并夹杂有海底火山喷发物。在“晋宁运动”后，才结束了地槽式沉降历史，地壳开始逐渐回返上升，出水为陆。<br>&nbsp;&nbsp;&nbsp;&nbsp;10亿年前，三清山地区成为华南洋中的一个岛弧，9-8.5亿年前后，洋盆消失、扬子古板块与华夏古板块碰撞，三清山地区恰处于古板块结合带。中生代以来，陆内A型俯冲与陆内伸展奠定了地质构造和地理格架，为三清山花岗岩地质地貌的形成、生物的繁衍以及人类的发展提供了优越的地质环境。
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;
                三叠世印支运动之后，三清山及其相邻地区为陆内地势相对较低的复式向斜。此后，才逐渐形成今日所见的盆岭地貌格局。
                在中—晚侏罗世—早白垩世盆岭雏
              </p>
        </el-card>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>

<!--第二个-->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="max-width: 480px; ">
          <template #header><p style="font-family: STXingkai;font-size: 30px;">水文气候</p></template>
          <img
              src="./assets/12.jpg"
              style="width: 100%"
          />
        </el-card>
        <!--      <img src="./assets/11.jpg" style="width: 200px;height: 300px">-->

      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="width: 480px" shadow="always">
              <p style="font-family: STXingkai;font-size: 30px;color: green">
                气候
              </p>
              <p style="font-family: STXingkai;font-size: 20px;color: green">
                &nbsp;&nbsp;&nbsp;&nbsp;三清山地处中亚热带，东距东海约340km，兼具山地气候特征。具有四季分明，夏季凉爽，春秋漫长。年平均气温为10.9℃，7~8月极端最高气温为33℃，7月平均气温为21.1℃。年平均降水量为1857.7mm，年平均蒸发量为1331.6mm，相对湿度为82%
              </p>
              <p style="font-family: STXingkai;font-size: 30px;color: green">
                水文
              </p>
              <p style="font-family: STXingkai;font-size: 20px;color: green">
                &nbsp;&nbsp;&nbsp;&nbsp;三清山位处长江流域中游，地表水为沟谷溪流水系，东南面分数股顺沟而下，汇入信江；西北侧经乐安河流入鄱阳湖。山体上水源均来自雨水，降水顺着发达的构造裂隙就近排泄于沟谷，雨季水源充足，旱季水源较贫乏，季节性变化明显。地下水主要含于基岩裂隙中
              </p>
        </el-card>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>

<!--    第三个-->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="max-width: 480px; ">
          <template #header><p style="font-family: STXingkai;font-size: 30px;">人文历史</p></template>
          <img
              src="./assets/13.jpg"
              style="width: 100%"
          />
        </el-card>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="width: 480px" shadow="always">
                <p style="font-family: STXingkai;font-size: 20px;color: green">
                  &nbsp;&nbsp;&nbsp;&nbsp;晋代医药学家、道教理论家、著名道士葛洪，约在东晋升平年间来到三清山炼丹。唐乾符年间，紫金光禄大夫、信州太守王鉴，暮年携家隐退在山下的大源坞（今德兴反大乡引浆村）。宋乾道六年（1170），王鉴的第十代孙王霖创建三清道观，后因世乱荒年，道观毁。
                </p>
                <p style="font-family: STXingkai;font-size: 20px;color: green">
                  &nbsp;&nbsp;&nbsp;&nbsp;明景泰年间（1450-1456），王鉴的第二十八代孙王祜，在旧基再建三清宫，并沿途设景，增设殿宇，并施田以膳羽士。当时资政大夫、南京兵部尚书孙原贞为其手书“三清宫”坊额，三清山乃因此日渐闻名遐迩。
                </p>
                <p style="font-family: STXingkai;font-size: 20px;color: green">
                  &nbsp;&nbsp;&nbsp;&nbsp;清代，三清山的天姿国色吸引着八方游客，时有名人程云吉、程一先、毛九瑞、肖立选、陈壎、程光壁、余朝楷等先后上山观光，浙江、安徽等省香客亦到三清山进香。三清山旅游业得到发展。而在清末和民国期间，由于连年战乱，三清山一度衰落：
                </p>
        </el-card>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>

<!--    第四个-->
    <h1 style="text-align: center;font-family: STXingkai;">景点介绍</h1>
    <el-row :gutter="20">
      <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="10"><div class="grid-content ep-bg-purple" />
        <el-card style="width: 600px" shadow="always">
          <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="require(`./assets/${url}.jpg`)" lazy />
          </div>
        </el-card>

      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" />

        <el-card style="width: 480px" shadow="always">
          <p style="font-family: STXingkai;font-size: 20px;color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;三清山位于中国江西省上饶市婺源县境内，是中国道教名山之一，被誉为"江南第一名山"。三清山以奇峰异石、云雾缭绕、古树参天、清泉淙淙等自然景观闻名于世，被列入世界自然遗产名录。山上有道教名胜和文物古迹众多，其中最为著名的是道教名胜景点鼎湖峰、寿星岩和老君石。三清山四季景色各异，春季山花烂漫、夏季绿树成荫、秋季红叶满山、冬季银装素裹，各具特色，是游览观光、登山朝圣的理想之地。
          </p>
          <p style="font-family: STXingkai;font-size: 20px;color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;
            三清山还是中国古代文人墨客和道家高人的隐居之地，留下了许多传世之作和历史典故。游览三清山不仅可以领略自然风光，还可以感受中国传统文化的博大精深，是一处集自然景观、文化遗产和历史意义于一体的旅游胜地。
          </p>

          <el-button type="success" round @click="this.$router.push({name:'YeMeng2puls'}); ">点击查看更多<el-icon><DArrowRight /></el-icon></el-button>
        </el-card>
      </el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>

<!--    第五个-->
    <h1 style="text-align: center;font-family: STXingkai;">公告简介</h1>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-card style="width: 300px" shadow="always">
          <p style="font-family: STXingkai;font-size: 20px;color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;
            我们诚挚地邀请各位游客前来体验三清山的壮丽景色和丰富文化。
          </p>
        </el-card>

        <el-card style="width: 300px" shadow="always">
          <p style="font-family: STXingkai;font-size: 20px;color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;
           欢迎您来感受大自然的奇迹，探寻历史的印记，共同开启一段难忘的旅程。
          </p>
        </el-card>
        <el-card style="width: 300px" shadow="always">
          <p style="font-family: STXingkai;font-size: 20px;color: green">
            &nbsp;&nbsp;&nbsp;&nbsp;
            需要了解景区的公告详情请点击下方按钮跳转:
          </p>
          <el-button type="success" round @click="this.$router.push({name:'YeMeng3'}); ">点击查看更多<el-icon><DArrowRight /></el-icon></el-button>
        </el-card>
      </el-col>

      <el-col :span="6"><div class="grid-content ep-bg-purple" />

        <el-card style="max-width: 480px; ">
          <img
              src="./assets/6.jpg"
              style="width: 100%"
          />
        </el-card>
        <el-card style="max-width: 480px; ">
          <img
              src="./assets/6.jpg"
              style="width: 100%"
          />
        </el-card>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>


<!--    第6个-->
    <h1 style="text-align: center;font-family: STXingkai;">留言板跳转</h1>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="16"><div class="grid-content ep-bg-purple" />

        <el-card style="width: 1000px" shadow="always">

          <el-row>
            <el-col :span="12"><div class="grid-content ep-bg-purple" />
              <el-card style="max-width: 480px; ">
<!--                <template #header><p style="font-family: STXingkai;font-size: 30px;"></p></template>-->
                <img
                    src="./assets/6.jpg"
                    style="width: 100%"
                />
              </el-card>
            </el-col>
            <el-col :span="12"><div class="grid-content ep-bg-purple-light" />
              <p style="font-family: STXingkai;font-size: 20px;color: green">
                &nbsp;&nbsp;&nbsp;&nbsp;
                欢迎来到我们的网站，我们非常欢迎您留下宝贵的留言和反馈！您的意见对我们非常重要，将帮助我们不断改进服务，提供更优质的体验。无论是对景区设施、服务态度，还是对我们网站的建议，我们都将认真倾听并及时回复您的留言。感谢您选择我们，让我们一起创造美好的旅行回忆！
              </p>
              <el-button type="success" round @click="this.$router.push({name:'YeMeng4'}); ">点击查看更多<el-icon><DArrowRight /></el-icon></el-button>
            </el-col>
          </el-row>
        </el-card>

      </el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
  </div>


  <el-backtop :bottom="100">
    <div
        style="
        height: 100%;
        width: 100%;
        /*background-color: var(--el-bg-color-overlay);*/
        /*box-shadow: var(--el-box-shadow-lighter);*/
        background-color: #fff; /* 白色 */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 修改为您想要的阴影效果 */

        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      顶部
    </div>
  </el-backtop>
</template>

<script>
export default {
  name: "YeMeng1",
  data() {
    return {
      images: [1, 2, 3], // 根据实际图片文件名修改
      urls:[
          1,2,3,4,6,7,8,10,11,12,13
      ]
    };
  },
  methods:{

  }
}
</script>

<style scoped>
.yemeng1{
}
.carousel-item img {
  /* 设置图片宽度和高度 */
  width: 100%;
  height: 650px; /* 或者你想要的高度 */
}

.carousel-inner {
  /* 设置轮播图容器的宽度和高度 */
  width: 100%;
  height: 650px; /* 或者你想要的高度 */
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.flex-container {
  display: flex;
  justify-content: space-between; /* 水平间距均分 */
}
.div1{
     background-image: url("./assets/4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.div2{
  background-image: url("./assets/5.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}

.div3{
  background-image: url("./assets/6.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.div4{
  background-image: url("./assets/7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.div5{
  background-image: url("./assets/8.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.div6{
  background-image: url("./assets/10.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}

.flex-container {
  display: flex;
}

.flex-container > div {
  /* 可以添加其他样式，比如 margin、padding、width、height 等 */
  height: 800px;
  width: 350px;
}



/*新样式*/
/*.zero1{*/
/*  margin-left: 250px;*/
/*  !*height: 300px;*!*/
/*  !*width: 500px;*!*/
/*  background-color: white;*/
/*}*/
/*.zero2{*/
/*  background-color: black;*/
/*  width: 100px;*/
/*}*/

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.demo-image__lazy {
  height: 500px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>