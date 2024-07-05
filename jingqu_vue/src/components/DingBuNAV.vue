<template>   <!-- 三清山主页 -->
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
          <router-link to="/default-component"><li class="LI">首页</li></router-link>
          <router-link to="/" ><li class="LI">风景介绍</li></router-link>
          <router-link to="/"><li class="LI">制度详解</li></router-link>
<!--          <router-link to="/"><li class="LI">内容待定</li></router-link>-->
          <router-link to="/"> <li class="LI">游客留言板</li></router-link>
          <!--        <li class="LI">-->
          <!--           <ShanQingMenu v-if="isDropdownVisible"></ShanQingMenu>-->
          <!--         </li>-->

        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import ShanQingMenu from "@/views/ShanQingMenu";
export default {
  components:{
    // ShanQingMenu,
  },
  name: "DingbuNAV",
  data() {
    return {
      isDropdownVisible: true, // 设置下拉菜单初始可见状态为 true
    };
  },
  methods: {

  },
}
</script>

<style>

.wangye{
  background-image: url("@/assets/images/R.jpg");
  background-size: cover ;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow: auto;


  width: 100%;
  height: 100vh;
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