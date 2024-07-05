<template>
  <div  class="container">
    <div class="cbl box1">
      <ul class="list-group shadow">
        <router-link to="/yemeng31" class="link"><li class="list-group-item nav-link">门票信息</li></router-link>
        <router-link to="/yemeng32" class="link"><li class="list-group-item nav-link">开放时间</li></router-link>
        <router-link to="/yemeng33" class="link"><li class="list-group-item nav-link">注意事项</li></router-link>

      </ul>
    </div>

    <div class="yemeng31 box2">
      222
    </div>

  </div>
</template>

<script>
export default {
  name: "YeMeng32"
}
</script>

<style scoped>
.cbl{
  float: left;
  margin-top: 50px;
  width: 100px;
}
.list-group-item{
  text-align: center;
}
/*.yemeng31{*/
/*  margin-top: 50px;*/
/*  margin-left:150px ;*/
/*  padding-left: 100px;*/
/*}*/
.container {
  display: flex;
  margin-left: 38px;
}

.box1 {
  width: 200px;
}
.box2{
  flex: 1;
  border: 1px solid #000; /* 边框样式，可根据需要修改 */
  margin-top: 50px;
  margin-left: 100px;
  height: 500px;
}
/* 去除链接下划线 */
a.link {
  text-decoration: none;
}
</style>