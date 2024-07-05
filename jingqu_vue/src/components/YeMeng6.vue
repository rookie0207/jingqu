<template>
  <div class="yemeng61">
    <div v-if="showLogin" class="form-container">
      <h2>登入</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username"><i class="fas fa-user"></i> 昵称:</label>
          <input type="text" v-model="loginData.name" maxlength="10" required>
        </div>
        <div class="form-group">
          <label for="password"><i class="fas fa-lock"></i> 号码:</label>
          <input type="password" v-model="loginData.number"  maxlength="15"  required>
        </div>
        <button type="submit">登入</button>
      </form>
      <p @click="toggleForm">没有已有账号? <span class="link-text">注册.</span></p>
    </div>

    <div v-else class="form-container">
      <h2>注册</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="newUsername"><i class="fas fa-user"></i> 昵称:</label>
          <input type="text" v-model="registerData.name" required>
        </div>
        <div class="form-group">
          <label for="newPassword"><i class="fas fa-lock"></i> 号码:</label>
          <input type="password" v-model="registerData.number" required>
        </div>


        <div class="form-group">
          <label for="newPassword"><i class="fas fa-lock"></i> 确认号码:</label>
          <input type="password" v-model="registerData1.password1" required>
        </div>

        <div class="form-group">
          <div class="mb-2 flex items-center text-sm">

            <el-radio-group v-model="registerData.sex" class="ml-4">
              <el-radio label="男" size="large">男</el-radio>
              <el-radio label="女" size="large">女</el-radio>
            </el-radio-group>

          </div>
        </div>
        <div class="form-group">
          <label for="age"><i class="fas fa-user"></i> 年龄:</label>
          <input type="number" v-model="registerData.age" required>
        </div>
        <div class="form-group">
          <label for="email"><i class="fas fa-envelope"></i>邮箱:</label>
          <input type="email" v-model="registerData.email" required>
        </div>

        <button type="submit">注册</button>
      </form>
      <p @click="toggleForm">已有账号? <span class="link-text">登入.</span></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { eventBus } from '@/main';
// import { injectEventBus } from '@/EventBus.js';
export default {
  name: "YeMeng61",
  data() {
    return {
      showLogin: true,
      loginData: {
        name: "",
        number: ""
      },
      registerData: {
        name: "",
        number: "",
        sex:"",
        age: "",
        email: "",
      },
      registerData1:{
        password1: ""
      },
    };
  },
  methods: {
                                            //管理登入验证
    login() {
      axios.get(`http://localhost/controllerguangli/get/${this.loginData.name}/${this.loginData.number}`)
          .then(res=>{
            if(res.data.data===1){
              console.log("登入成功");
              this.$message({
                message:'登入成功',
                type:'success'
              })
              //使用vue的路由跳转至游客管理界面
              this.$router.push({name:'YeMeng51'});
              // // 发送成功登录的事件
              // eventBus.$emit('loginSuccess');
              // 触发事件
              // EventBus.$emit('show-li-event');
              // const eventBus = injectEventBus();
              // eventBus.emit('data-event', res.data.data);
            }
            else{
             this.Tourists();
            }
          })
    },
                                            //游客登入信息验证
    Tourists(){
      // 在请求前清除保存的用户数据
      localStorage.removeItem('ID');
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('Name');
      axios.get(`http://localhost/controllerTourists/jwt/${this.loginData.name}/${this.loginData.number}`)
          .then(res1=>{
          if(res1.data.token!==null){

            // 获取token
            const token = res1.data.token;
            console.log(token);
            //获取用户id
            const id=res1.data.data.id;
            console.log(id);
            //获取用户name
            const name=res1.data.data.name;
            console.log(name);

            // 将token保存到LocalStorage中
            localStorage.setItem('jwtToken', token);
            //保存用户id
            localStorage.setItem('ID',id);
            //保存用户name
            localStorage.setItem('Name',name);



            this.$message({
              message:'登入成功',
              type:'success'
            })
            this.$router.push({name:'YeMeng1'});
          }
            else{
            this.$message({
              message:'登入失败',
              type:'false'
            })
          }
          })
          .catch(()=>{
            this.$message({
              message:'账号或密码错误',
              type:'error'
            })
          })
    },
    register() {
      if (this.registerData.number !== this.registerData1.password1) {
        // 如果号码不相等，弹出错误提示框
        this.$message({
          message:'确认号码失败',
          type:'false'
        })
        return;
      }
      //注册用户
      axios.post(`http://localhost/controllerTourists`, this.registerData)
          .then(reponse =>{
            if(reponse.data.flag===true){
              this.$message({
                message: '注册成功',
                type: 'success'
              });
            }
            else {
              this.$message({
                message: '注册失败',
                type: 'false'
              });
            }
          })
          .catch(error=>{
            console.log('注册失败',error);
          });
    },
    toggleForm() {
      this.showLogin = !this.showLogin;
    },

  }
}
</script>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.css";
.yemeng61 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url("./assets/4.jpg");
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-size: cover;
  background-position: center;
}

.form-container {
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.link-text {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.link-text:hover {
  color: #0056b3;
}
h2{
  text-align: center;
}
</style>





