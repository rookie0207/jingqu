<template>
  <div class="yemeng55">
    <!--    左侧导航栏-->
    <div class="div1">
      <ul class="list-group shadow">
        <router-link to="/yemeng51"> <li class="list-group-item">游客信息管理</li></router-link>
        <router-link to="/yemeng52"> <li class="list-group-item">员工信息管理</li></router-link>
        <router-link to="/yemeng53"> <li class="list-group-item">景区评论管理</li></router-link>
        <router-link to="/yemeng54"><li class="list-group-item">景点信息管理</li></router-link>
        <router-link to="/yemeng55"> <li class="list-group-item">公告管理</li></router-link>
        <router-link to="/yemeng56"> <li class="list-group-item">数据可视化</li></router-link>
        <router-link to="/yemeng57"> <li class="list-group-item">留言板管理</li></router-link>
      </ul>
    </div>


    <div class="div2 shadow">

      <el-input
          v-model="textarea"
          style="width: 1100px;height: 310px;"
          :rows="15"
          type="textarea"
          placeholder="输入公告内容"
      />

      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">选择发布时间</span>
          <el-date-picker
              v-model="value1"
              type="date"
              placeholder="Pick a date"
              :default-value="new Date(2024, 5, 1)"
          />
        </div>
<!--        <div class="block">-->
<!--          <span class="demonstration">选择公告发布日期</span>-->
<!--          <el-date-picker-->
<!--              v-model="value2"-->
<!--              type="date"-->
<!--              placeholder="Pick a day"-->
<!--              :disabled-date="disabledDate"-->
<!--              :shortcuts="shortcuts"-->
<!--              :size="size"-->
<!--          />-->
<!--        </div >-->
        <div class="block">
          <span class="demonstration">输入发布人或发布单位</span>
          <el-input v-model="input" style="width: 240px;" placeholder="发布人" />
        </div>

      </div>
      <el-button type="primary" style="margin-left: 480px" @click="announcement">发布</el-button>
      <el-button type="primary" plain @click="drawer = true">查看历史公告</el-button>

      <el-dialog v-model="dialogTableVisible" title="历史公告详情" width="800">
<!--        <pre>-->
<!--                                                     发起时间：2024.2.6        发布人：啊飒飒-->
<!--           亲爱的游客们，-->
<!--            欢迎来到我们美丽的景区，您的到来是我们最大的荣幸！在这里，我们努力提供给您一个难忘的旅行体验。-->
<!--                                                   🌲 **新景点开放！** 🌲-->
<!--            探索我们最新开放的景点——梦幻花海。在这里，您将被五彩斑斓的花朵所包围，感受大自然的奇妙之美。-->
<!--                                                   🎉 **特别活动通知** 🎉-->
<!--            本周末我们将举办夜间星空观赏活动。一起来欣赏清澈的星空，感受大自然的神秘魅力。敬请提前预订名额！-->
<!--                                                    🍽 **美食推荐** 🍽-->
<!--            尝试我们景区内的各类美食，从地道的当地小吃到精致的餐厅，满足您挑剔的味蕾。-->
<!--                                                     📅 **开放时间** 📅-->
<!--                                           - 周一至周五：9:00 AM - 6:00 PM-->
<!--                                           - 周末和节假日：9:00 AM - 8:00 PM-->
<!--                                                     🎫 **门票信息** 🎫-->
<!--                                                        成人：¥100-->
<!--                                                     儿童（3-12岁）：¥50-->
<!--                                                     婴儿（3岁以下）：免费-->
<!--                                       感谢您选择我们的景区，我们期待与您共度美好时光！-->
<!--                                       如有任何问题或需要帮助，请随时向我们的工作人员咨询。-->
<!--                                                      祝您有一个愉快的旅行！-->
<!--        </pre>-->
        <div>
          <p style="font-size: 30px">
            发布人或单位：{{this.onlyAll.name}}
          </p>
          <p style="font-size: 25px">
            发布时间：{{this.onlyAll.time}}
          </p>

            {{this.onlyAll.text}}

        </div>
        <el-button type="danger" style="margin-left: 350px" @click="delete1">删除</el-button>
      </el-dialog>

      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
<!--        <el-button style="width: 160px;margin-left: 12px" @click="dialogTableVisible = true">2024-4-12期公告</el-button>-->

        <div class="container">
          <div class="left-div">
        <div v-for="announce in All" :key="announce.id">
          <div v-if="announce.id % 2 !== 0">
          <el-button style="width: 160px;" @click="dialogTableVisible = true;this.onlyAll.name=announce.name;this.onlyAll.time=announce.time;this.onlyAll.text=announce.text;this.onlyAll.id=announce.id;">{{announce.time}}期公告</el-button>
          </div>
        </div>

          </div>

          <div class="right-div">
            <div v-for="announce in All" :key="announce.id">
              <div v-if="announce.id % 2 === 0">
                <el-button style="width: 160px;" @click="dialogTableVisible = true;this.onlyAll.name=announce.name;this.onlyAll.time=announce.time;this.onlyAll.text=announce.text;this.onlyAll.id=announce.id;">{{announce.time}}期公告</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>

  </div>
</template>

<script>
 import axios from "axios";
export default {
  name: "YeMeng55",
  data(){
    return{
      textarea:'',//公告内容
      input:'',//发布人
      value1:'',
      dialogTableVisible:false,
      drawer:false,
      All:[],
      onlyAll:{
        name:'',
        time:'',
        text:'',
        id:0,
      }
      // size: 'large', // 默认选中的size
      // value2: '', // 选中的日期
      // shortcuts : [
      //   {
      //     text: '今天',
      //     value: new Date(),
      //   },
      //   {
      //     text: '昨天',
      //     value() {
      //       const date = new Date();
      //       date.setTime(date.getTime() - 3600 * 1000 * 24);
      //       return date;
      //     },
      //   },
      //   {
      //     text: '一星期前',
      //     value() {
      //       const date = new Date();
      //       date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      //       return date;
      //     },
      //   },
      // ],

    }
  },
  created(){
    this.getAll();
  },
  //传入其它组件
  components:{

  },
  methods: {
//     disabledDate(time) {
//       // 获取value2的值，假设它是一个日期对象
//       const date = new Date(this.value2);
// // 将日期对象转换为TIMESTAMP格式的字符串，并指定时区为UTC
//       const timestampString = date.toLocaleString('en-US', { timeZone: 'UTC' }).replace(/,/, '');
//       console.log(timestampString);
//
//
//       return time.getTime() > Date.now();
//
//     },

    announcement(){
      // 获取value1的值，假设它是一个日期对象
      const date = new Date(this.value1);
      // 获取年、月、日
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      // 拼接成'YYYY-MM-DD'格式的字符串
      const formattedDate = `${year}-${month}-${day}`;
      console.log(formattedDate);

      axios.get(`http://localhost/Announcement/${formattedDate}/${this.input}/${this.textarea}`)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '发布公告成功',
                type: 'success',
              })
            }
            else {
              this.$message({
                message: '发布公告失败',
                type: 'error',
              })
            }
          })
    },
    getAll(){
      axios.get(`http://localhost/Announcement`)
          .then(res=>{
            this.All=res.data;
            console.log(this.All);
          })
    },
    delete1(){
      axios.get(`http://localhost/Announcement/delete/${this.onlyAll.id}`)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '删除公告成功',
                type: 'success',
              })
            }
            else {
              this.$message({
                message: '删除公告失败',
                type: 'error',
              })
            }
          })
    }
  }
}
</script>

<style scoped>
.yemeng55{

  display: flex;
}
.list-group-item{
  text-align: center;
}
.div1{
  margin-top: 50px;
  width: 200px;
  margin-left: 50px;
}
.div2{
  flex: 1;
  margin-top: 50px;
  margin-left: 100px;
  border: 1px solid #000; /*! 边框样式，可根据需要修改 !*/
  height: auto;
}



.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  /*border-right: solid 1px var(--el-border-color);*/
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  /*color: var(--el-text-color-secondary);*/
  font-size: 14px;
  margin-bottom: 20px;
}
.container {
  display: flex;
}

.left-div, .right-div {
  flex: 1;
}

</style>