<template>
<!--  <div class="top">-->

<!--    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-height-wideth ">-->
<!--      <div class="container-fluid color">-->

<!--        <a class="navbar-brand" href="#">图标</a>-->


<!--        <div class="collapse navbar-collapse div-feft" id="navbarNav">-->
<!--          <ul class="navbar-nav">-->

<!--            <li class="nav-item">-->

<!--              <router-link to="/yemeng1" class="nav-link">-->

<!--                首页-->

<!--              </router-link>-->
<!--            </li>-->


<!--            <li class="nav-item">-->

<!--              <router-link to="/yemeng2puls" class="nav-link">景点介绍</router-link>-->
<!--            </li>-->


<!--            <li class="nav-item">-->

<!--              <router-link to="/yemeng3" class="nav-link">景区制度</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->

<!--              <router-link to="/yemeng4" class="nav-link">游客互动</router-link>-->
<!--            </li>-->
<!--            <li  v-if="showElement" class="nav-item">-->

<!--              <router-link to="/yemeng5" class="nav-link">信息管理</router-link>-->
<!--            </li>-->

<!--            <li class="nav-item nav-dengru">-->

<!--                <el-dropdown>-->
<!--    <span class="el-dropdown-link">-->
<!--      <el-icon :size="33"><Setting /></el-icon>-->
<!--    </span>-->
<!--                  <template #dropdown>-->
<!--                    <el-dropdown-menu>-->


<!--                      <el-dropdown-item> <router-link to="/personaldate" class="nav-link">个人信息</router-link></el-dropdown-item>-->

<!--                      <el-dropdown-item> <router-link to="/yemeng6" class="nav-link">登录/注册</router-link></el-dropdown-item>-->

<!--                      <el-dropdown-item>退出<el-icon :size="20"><SwitchButton /></el-icon></el-dropdown-item>-->

<!--                    </el-dropdown-menu>-->
<!--                  </template>-->
<!--                </el-dropdown>-->




<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->

<!--  </div>-->



  <div class="wangye">
    <div class="top">
      <diV class="tubiao">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-vimeo" viewBox="0 0 16 16">
          <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z"/>
        </svg>
        <strong><span style="font-size: 2rem ">欢迎</span></strong>
      </div>

      <div class="navtop">
        <ul>
          <router-link to="/yemeng1"><li class="LI">首页</li></router-link>
          <router-link to="/yemeng2puls" ><li class="LI">景点介绍</li></router-link>
          <router-link to="/yemeng3"><li class="LI">景区公告</li></router-link>
          <router-link to="/yemeng4"><li class="LI">游客互动</li></router-link>
<!--          <router-link to="/yemeng5"> <li class="LI">游客留言板</li></router-link>-->
          <!--        <li class="LI">-->
          <!--           <ShanQingMenu v-if="isDropdownVisible"></ShanQingMenu>-->
          <!--         </li>-->

          <li class="LI">
<!--                  <el-icon :size="33"><Setting /></el-icon>-->

                            <el-dropdown>
                <span class="el-dropdown-link">
                  <el-icon :size="33"><Setting /></el-icon>
                </span>
                              <template #dropdown>
                                <el-dropdown-menu>


                                  <el-dropdown-item> <router-link to="/personaldate" class="nav-link">个人信息</router-link></el-dropdown-item>

                                  <el-dropdown-item> <router-link to="/yemeng6" class="nav-link">登录/注册</router-link></el-dropdown-item>

                                  <el-dropdown-item @click="tuichu">退出<el-icon :size="20"><SwitchButton /></el-icon></el-dropdown-item>

                                </el-dropdown-menu>
                              </template>
                            </el-dropdown>
          </li>

        </ul>
      </div>
    </div>
<!--    <router-view></router-view>-->
  </div>

  <router-view></router-view>

</template>
<script>
export default {
  name:'DaohangMenu',
  data(){
    return{
      showElement:false,
    }
  },
  methods:{
    tuichu(){
      // 在请求前清除保存的用户数据
      localStorage.removeItem('ID');
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('Name');
      this.$message({
        message: '退出成功',
        type: 'success',
      })
    }
  }
}
</script>

<style scoped>
.nav-item{
  width: 150px;
}
.div-feft{
  margin-left: 100px;
}
.nav-height-wideth{
  height: 80px;
}
.color{
  background-color: #8181e5;
}
.nav-dengru{
  margin-left: 600px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;

  display: flex;
  align-items: center;
}
.font{
  font-size: 20px;
  color: white;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: black;
  display: flex;
  align-items: center;
}







.wangye{
  background-image: url("./assets/R.jpg");
  background-size: cover ;
  background-attachment:scroll;
  background-repeat: no-repeat;
  overflow: auto;
  width: 100%;
  height: 9vh;
  padding: 0;
  margin: 0;
}
.top{
  position: fixed;

  width: 1500px;
  height: 70px;
  margin: 0;
}
.top:hover{
  background-color: white;
}
.top:hover .navtop .LI{
  color: black;
}
.top:hover .navtop .LI .dropdown-btn{
  color: black;
}
.tubiao{
  width: 15%;
  padding-left: 50px;
  padding-top: 9px;
  float: left;
}
.LI{

  list-style-type: none;
  float: left;
  width: 150px;
  height: 60px;
  text-align: center;
  padding-top: 5px;
  color: white;
  font-size: 1rem;
}
li:hover{
  color: #ffc107!important;
}
.navtop{
}
.LI{
}
</style>
