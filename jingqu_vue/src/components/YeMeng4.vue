<template>
<!--  <el-carousel :interval="4000" type="card" height="200px">-->
<!--    <el-carousel-item v-for="item in 6" :key="item">-->
<!--      <img src="./assets/2.jpg" class="d-block w-100" alt="...">-->
<!--      <h3 text="2xl" justify="center">{{ item }}</h3>-->
<!--    </el-carousel-item>-->
<!--  </el-carousel>-->
<!--  <div style="background-color: darkgray">-->

  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="require(`./assets/${item}.jpg`)" class="d-block w-100" alt="...">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>

<div class="one" >
  <el-input
      v-model="textarea"
      style="width: 800px"
      :autosize="{ minRows: 8, maxRows: 8 }"
      :rows="2"
      type="textarea"
      placeholder="留下你的评论，让更多人了解"
      maxlength="500"
      show-word-limit
  />
</div>

  <div class="two" >
    <el-button type="primary" round @click="insert">发表评论</el-button>
    <el-button type="info" round @click="chong">重置</el-button>
  </div>



  <div class="comment" >
    <div v-for="mess in message " :key="mess.id">
      <div>
        {{mess.user_name}}
        <p style="font-size: 13px">{{mess.time}}</p>
      </div>
      <div>

                                             <!--        父亲评论-->
        <p @click="this.drawer=true;this.soncomments.parent_comment_id=mess.id">
          {{mess.comment}}
        </p>

<!--        <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">-->
<!--          <h4>请友善发言，发布违规言论将受到禁言处理！</h4>-->
<!--        </el-dialog>-->


        <p style="margin-left: 600px">
          <span><el-button @click="this.fatherlikes=mess.likes;this.fatherid=mess.id;father()">点赞</el-button> </span>
          {{mess.likes}}

          <span style="margin-left: 50px"><el-button @click="toggleReply(mess);">展开</el-button></span>
<!--          回复数-->
        </p><hr style="width: 800px">






                                    <!--        折叠回复评论-->
        <el-collapse-transition>
<!--          <div v-show="mess.show" v-for="mess_sub in message_sub" :key="mess_sub.id">   &lt;!&ndash; 选择性显示折叠评论&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="transition-box">el-collapse-transition</div>&ndash;&gt;-->
<!--            <div v-if="mess_sub.parent_comment_id===mess.id">-->
<!--              {{mess_sub.comment}}-->
<!--            </div>-->
<!--          </div>-->
          <div v-show="mess.show">
            <div v-for="mess_sub in message_sub" :key="mess_sub.id">
              <div v-if="mess_sub.parent_comment_id === mess.id">
                <div style="margin-left: 30px">
                  {{mess_sub.user_name}}
                  <p style="font-size: 13px">{{mess_sub.time}}</p>
                </div>
                <div style="margin-left:50px">
                  {{mess_sub.comment}}
                  <p style="margin-left: 600px">
                    <span><el-button @click="this.sonlikes=mess_sub.likes;this.sonid=mess_sub.id;son()">点赞</el-button> </span>
                    {{mess_sub.likes}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-collapse-transition>

      </div>

    </div>


  </div>
<!--  </div>-->
  <el-drawer v-model="drawer" title="I am the title" :direction="'btt'" :with-header="false" :height="800" append-to-body>
    <h3 style="text-align: center">请友善发言，发布违规言论将受到禁言处理！</h3>
    <el-input
        v-model="textarea1"
        maxlength="300"
        style="width: 800px;margin-left: 320px;"
        placeholder="请友善发言！"
        show-word-limit
        type="textarea"
    />
    <div class="mb-4" style="margin-left: 680px">

      <el-button type="success" @click="drawer=false">取消</el-button>
      <el-button type="primary" @click="soncomment()">确认</el-button>

    </div>
  </el-drawer>
</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng4",
  data() {
    return {
      images: [1, 2,3], // 根据实际图片文件名修改
      textarea:'',
      show:true,
      message:[],//父亲评论
      message_sub:[],//子评论

      fatherid:'',//父亲评论id
      fatherlikes:'',//父亲评论点赞数
      sonid:'',
      sonlikes:'',

      // fatherbutton:'',//父亲评论点赞按钮显示文字
      message_insert:{
        user_name:'',
        time:'',
        comment:'',
      },
      drawer: false,
      dialogTableVisible:false,
      textarea1:'',
      soncomments:{
        parent_comment_id:'',
        user_name:'',
        comment:'',
        time:''
      }
    };
  },
  created(){
   this.getAll();
    // //获取本地存储的用户id
    // const savedId = localStorage.getItem('ID');
    // //将字符转为整型
    // const numericId = parseInt(savedId, 10);
    // axios.get(`http://localhost/message/father_redis_start/${numericId}/${this.fatherid}`)
    //     .then(res=> {
    //       if(res.data===true){
    //         this.fatherbutton='已赞'
    //       }
    //       else {
    //         this.fatherbutton='未赞'
    //       }
    //
    //     })
  },
  methods:{

    getAll(){
      axios.get("http://localhost/message")
          .then(res=>{
            this.message=res.data;
            console.log("父评论",this.message);
            axios.get("http://localhost/message/sub_comments")
                .then(res1=>{
                  this.message_sub=res1.data;
                  console.log("子评论",this.message_sub);
                })
          })
    },
    toggleReply(mess) {
      // 切换当前评论的折叠状态
      mess.show = !mess.show;
    },
    insert(){

      // 获取当前时间
      let currentDate = new Date();
// 获取年、月、日
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1; // 月份从0开始，所以要加1
      let day = currentDate.getDate();
// 格式化月份和日期，确保是两位数
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
// 拼接成指定格式的日期字符串
      let formattedDate = `${year}-${month}-${day}`;
// 输出格式化后的日期字符串
      console.log(formattedDate);

      this.message_insert.time=formattedDate;
      this.message_insert.user_name=localStorage.getItem("Name");
      this.message_insert.comment=this.textarea;
      axios.post("http://localhost/message/insert",this.message_insert)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '期待你的下一次留言',
                type: 'success',
              })
            }
            else {
              this.$message({
                message: '留言失败',
                type: 'error',
              })
            }
          })
    },
    chong(){
      this.textarea='';
    },
    father(){
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);
      //用户点赞或者取消点赞----景区1
      axios.get(`http://localhost/message/father_redis/${numericId}/${this.fatherid}`)
          .then(res=>{
            if(res.data===true){
              this.fatherlikes++;
            }
            else if(res.data===false){
              this.fatherlikes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/message/father/${this.fatherlikes}/${this.fatherid}`)
                .then(res=>{
                  console.log(res);
                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
            location.reload();//刷新页面
          });
    },
    son(){
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);
      //用户点赞或者取消点赞----景区1
      axios.get(`http://localhost/message/son_redis/${numericId}/${this.sonid}`)
          .then(res=>{
            if(res.data===true){
              this.sonlikes++;
            }
            else if(res.data===false){
              this.sonlikes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/message/son/${this.sonlikes}/${this.sonid}`)
                .then(res=>{
                  console.log(res);
                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
            location.reload();//刷新页面
          });
    },
    soncomment(){
      //用户昵称
      const Name = localStorage.getItem('Name');
      this.soncomments.user_name=Name;
      //时间
      // 获取当前时间
      let currentDate = new Date();
// 获取年、月、日
      let year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1; // 月份从0开始，所以要加1
      let day = currentDate.getDate();
// 格式化月份和日期，确保是两位数
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
// 拼接成指定格式的日期字符串
      let formattedDate = `${year}-${month}-${day}`;
// 输出格式化后的日期字符串
      console.log(formattedDate);
      this.soncomments.time=formattedDate;
      this.soncomments.comment=this.textarea1;

      axios.post(`http://localhost/message/soninsert`,this.soncomments)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '评论成功',
                type: 'success',
              })
            }
            else {
              this.$message({
                message: '评论失败',
                type: 'error',
              })
            }
          })
    }

  }
}
</script>

<style scoped>
.one{
 margin-left: 300px;
  width: 900px;
  margin-top: 50px;
}
.two{
  margin-left: 900px;
}
.comment{
  margin-left: 300px;
  margin-top: 50px;
  width: 800px;
  /*background-image: url("./assets/9.jpg");*/
  /*background-size: cover;*/
  /*background-position: center;*/
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
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>