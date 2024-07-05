<template>
<div class="yemeng2">
  <div class="left-content">
   <div class="left-content1">
     <ul class="list-group">
       <li class="list-group-item"><a href="#1">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#2">女娲补石</a></li>
       <li class="list-group-item"><a href="#3">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#4">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#5">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#6">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#7">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#8">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#9">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#10">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#11">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#12">巨蟒出山</a></li>
       <li class="list-group-item"><a href="#13">巨蟒出山</a></li>
     </ul>
     <button type="button" class="btn btn-outline-primary" @click="scrollToTop" v-show="showButton" id="scrollToTopBtn" >回到顶部</button>
   </div>
  </div>
  <div class="right-content">
    <div class="card mb-3" id="1">
      <img src="./assets/1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">标题</h5>
        <p class="card-text">景点介绍</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card mb-3" id="2">
      <img src="./assets/2.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card mb-3" id="3">
      <img src="./assets/3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="card mb-3" id="4">
      <img src="./assets/1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "YeMeng2",
  data() {
    return {
      showButton: false
    };
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // 在组件销毁前移除滚动事件监听器
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 当页面滚动超过一定高度时显示回到顶部按钮
      if (window.pageYOffset > 100) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    scrollToTop() {
      // 点击按钮实现平滑滚动回到顶部
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.yemeng2{
  display: flex;
  margin-top: 50px;
}
.left-content{
  width: 200px;
  margin-left: 80px;
}
.left-content1{
  width: 200px;
  margin-left: 10px;
  position: fixed;

}
.right-content{
  width: 800px;
  margin-left: 200px;
}
li{
  width: 150px;
  text-align: center;
}
a{
  text-decoration: none;
  color: black;
}
a:hover{
  color: #6268e5;
}
</style>