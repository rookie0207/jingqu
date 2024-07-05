<template>
  <div class="zero">
<div class="centered">
  <div class="left">
    <el-card style="width: 400px;height: 500px" shadow="always">
      <p class="p1">昵称：{{this.Personaldate.name}}</p>
      <p class="p1">性别：{{this.Personaldate.sex}}</p>
      <p class="p1">年龄：{{this.Personaldate.age}}</p>
      <p class="p1">电话：{{this.Personaldate.number}}</p>
      <p class="p1">邮箱：{{this.Personaldate.email}}</p>
      <el-button  style="margin-left: 80px;margin-top: 50px" type="success" plain @click="centerDialogVisible2=true">修改个人信息</el-button>
    </el-card>

  </div>

  <div class="right">
    <div style="margin-top: 50px">
     <h5> 发表的景点评论</h5>
      <div class="bordered" v-for="(comment, index) in filteredComments" :key="index">
        <p style="font-size: 17px">景点：{{ comment.attraction_name }}</p>
        <p style="font-size: 15px">发表的评论：{{ comment.comment }}</p>
        <p style="font-size: 10px">评论时间：{{ comment.time }}</p>
      </div>
      <el-button type="success" plain @click="centerDialogVisible = true">点击查看全部评论</el-button>
    </div>

    <div style="margin-top: 40px">
      留言板留言
      <el-button type="success" plain @click="centerDialogVisible1 = true">查看个人留言</el-button>
    </div>

  </div>



  <div style="clear: both;"></div>
<!--  显示全部评论-->
  <el-dialog v-model="centerDialogVisible" title="评论" width="500" center>
    <span style="text-align: center">
      以下是在各个景点发表的全部评论
    </span>

    <div class="bordered" v-for="(comment, index) in Personalcomment" :key="index">
      <p style="font-size: 17px">景点：{{ comment.attraction_name }}</p>
      <p style="font-size: 15px;word-wrap: break-word;">发表的评论：{{ comment.comment }}</p>   <!-- 为评论内容的 <p> 元素添加了 word-wrap: break-word; 属性，当评论内容过长时，会自动在单词边界处进行换行。-->
      <p style="font-size: 10px">评论时间：{{ comment.time }}</p>

      <el-button type="danger" @click="this.PLid=comment.id;deletePL()">删除</el-button>
    </div>

    <template #footer>
      <div class="dialog-footer">
<!--        <el-button @click="centerDialogVisible = false">Cancel</el-button>-->
        <el-button type="primary" @click="centerDialogVisible = false">
          关闭
        </el-button>


      </div>
    </template>

  </el-dialog>

<!--  显示留言板留言-->
  <el-dialog v-model="centerDialogVisible1" title="留言板留言" width="500" center>

    <div class="bordered" v-for="(comment, index) in Personalcomment1" :key="index">
      <p style="font-size: 20px;word-wrap: break-word;">留言内容：{{ comment.comment }}</p>   <!-- 为评论内容的 <p> 元素添加了 word-wrap: break-word; 属性，当评论内容过长时，会自动在单词边界处进行换行。-->
      <p style="font-size: 15px">时间：{{ comment.time }}</p>
      <div class="mb-4">
        <el-button type="primary" @click="this.huifuid=comment.id;this.centerDialogVisible3=true;">查看回复</el-button>
        <el-button type="danger"  @click="this.liuyangid=comment.id;deleteliuyang()">删除</el-button>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible1 = false">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>



  <!--  显示留言回复-->
  <el-dialog v-model="centerDialogVisible3" title="留言回复" width="500" center>


    <div  v-for="(comment, index) in Personalcomment2" :key="index">
      <div v-if="this.huifuid===comment.parent_comment_id">
        <div class="bordered">
        <p style="font-size: 20px;word-wrap: break-word;">留言内容：{{ comment.comment }}</p>   <!-- 为评论内容的 <p> 元素添加了 word-wrap: break-word; 属性，当评论内容过长时，会自动在单词边界处进行换行。-->
        <p style="font-size: 15px">时间：{{ comment.time }}</p>
        <p style="font-size: 15px">回复人：{{ comment.user_name}}</p>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible3 = false">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>





<!--  显示修改个人信息框-->
  <el-dialog v-model="centerDialogVisible2" title="修改个人信息" width="500" center>

    <el-form :model="Personaldate" label-width="auto" style="max-width: 600px">

      <el-form-item label="昵称">
        <el-input v-model="Personaldate.name" />
      </el-form-item>

      <el-form-item label="性别">
        <el-input v-model="Personaldate.sex" />
      </el-form-item>

      <el-form-item label="年龄">
        <el-input v-model="Personaldate.age" />
      </el-form-item>

      <el-form-item label="号码">
<!--        <el-input v-model="Personaldate.number" />-->
        {{this.Personaldate.number}}
      </el-form-item>

      <el-form-item label="邮件">
        <el-input v-model="Personaldate.email" />
      </el-form-item>

    </el-form>


    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible2 = false;update()">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>

</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonalDate",
  data(){
    return{
      Personaldate:[],//用户个人信息
      Personalcomment:[],//用户评论
      Personalcomment1:[],//用户留言
      Personalcomment2:[],//留言回复
      centerDialogVisible:false,
      centerDialogVisible1:false,
      centerDialogVisible2:false,
      centerDialogVisible3:false,
      PLid:'',
      huifuid:'',
      liuyangid:'',
    }
  },
  created(){
    const id=localStorage.getItem('ID');
    const name=localStorage.getItem('Name');
    axios.get(`http://localhost/controllerTourists/personal/${id}`)
        .then(res=>{
          this.Personaldate=res.data;
          console.log(this.Personaldate);
        })
        .catch(error=>{

          console.log(error)
        })
    axios.get(`http://localhost/Comments/personal/${id}`)
        .then(res=>{
          this.Personalcomment=res.data;
          console.log(this.Personalcomment);
        })
        .catch(error=>{
          this.$message({
            message: '请登入',
            type: 'error',
          })
          console.log(error)
        })
    axios.get(`http://localhost/message/personal/${name}`)
        .then(res=>{
          this.Personalcomment1=res.data;
          console.log(this.Personalcomment1);
        })
        .catch(error=>{
          this.$message({
            message: '请登入',
            type: 'error',
          })
          console.log(error)
        })
    this.huifu();
  },
  computed: {
    filteredComments() {
      // 返回前两条评论数据
      return this.Personalcomment.slice(0, 2);
    },
  },
methods:{
  update(){
    axios.put(`http://localhost/controllerTourists/${this.Personaldate.number}`,this.Personaldate)
        .then(()=>{
          this.$message({
            message: '修改成功',
            type: 'success',
          })
        })
        .catch(error=>{
          this.$message({
            message: '请重试',
            type: 'error',
          })
          console.log(error)
        })
  },
  deletePL(){
    axios.get(`http://localhost/Comments/deleteid/${this.PLid}`)
        .then(res=>{
          console.log(this.PLid)
          if(res.data===true) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          }
        })
        .catch(error=>{
          this.$message({
            message: '请重试',
            type: 'error',
          })
          console.log(error)
        })
  },
  huifu(){
    axios.get(`http://localhost/message/sub_comments`)
        .then(res=>{
          this.Personalcomment2=res.data;
          console.log( this.Personalcomment2)
        })
  },
  deleteliuyang(){
    axios.get(`http://localhost/message/delete/${this.liuyangid}`)
        .then(res=>{
          if(res.data===true) {
            this.$message({
              message: '删除成功',
              type: 'success',
            })
          }
          else {
            this.$message({
              message: '删除失败',
              type: 'error',
            })
          }
        })
        .catch(() => {
          this.$message({
            message: '该留言已被回复',
            type: 'error',
          })
        });
  }
}
}
</script>

<style scoped>
.zero{
  /*background-image: url("./assets/4.jpg");*/
  /*background-repeat: no-repeat; !* 禁止背景图片重复 *!*/
  /*background-size: cover;*/
  /*background-position: center;*/
  width: 100%;
  height: 100vh;
  background-image: url("./assets/4.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; /* 设置文本颜色为白色 */
}

.centered {
  position: absolute;
  /*margin-top: 5px;*/
  /*margin-left: 100px;*/
  height: 500px;
  width: 900px;
  color: black;
  background-color: white;
}
.p1{
  margin-left: 80px;
  margin-top: 50px;
}
.left {
  float: left;
  width: 50%; /* 左侧宽度为父容器的一半 */
}

.right {
  float: left;
  width: 50%; /* 右侧宽度为父容器的一半 */
}
.bordered {
  border: 2px solid #ccc; /* 边框样式：2px宽度、实线、灰色 */
  padding: 10px; /* 内边距：为了让内容不紧贴边框 */
}

</style>