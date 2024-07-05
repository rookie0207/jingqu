<template>
<div class="yemeng5">
  <div class="div1">
    <ul class="list-group shadow">
      <router-link to="/yemeng51"> <li class="list-group-item nav-link">游客信息</li></router-link>
      <li class="list-group-item">员工信息</li>
      <li class="list-group-item">开放时间信息</li>
      <li class="list-group-item">门票价格</li>
      <li class="list-group-item">注意事项</li>
    </ul>
  </div>
  <div class="div2">

  </div>
</div>
</template>

<script>
export default {
  name: "YeMeng5"
}
</script>

<style scoped>
.yemeng5{

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
  border: 1px solid #000; /* 边框样式，可根据需要修改 */
  height: auto;
}
</style>