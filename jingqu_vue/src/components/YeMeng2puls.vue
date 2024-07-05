<template>
  <div class="container">
    <div class="left-div">
      <!--  排行榜-->
      <div class="ranking-list border border-success p-2 mb-2 border-opacity-25 shadow-lg paihang">
        <h2 style="text-align: center">热门景点点赞排行榜</h2>
        <!--    <ul>-->
        <!--      <li v-for="(place, index) in ranking" :key="place.id">-->
        <!--        <span class="place-name">{{ index + 1 }}. {{ place.name }}</span>-->
        <!--        <span class="likes">{{ place.likes }} Likes</span>-->
        <!--      </li>-->
        <!--    </ul>-->
        <!--    <p style="text-align: center">近七天热度排行</p>-->
        <ul>
          <li v-for="(item, index) in paihang" :key="index">
            <span class="name">{{ item.name }}</span>
            <span class="score">{{ item.likes }} 点赞数</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-div">
      <!--  排行榜-->
      <div class="ranking-list border border-success p-2 mb-2 border-opacity-25 shadow-lg paihang">
        <h2 style="text-align: center">热门景点讨论度排行榜</h2>
        <!--    <ul>-->
        <!--      <li v-for="(place, index) in ranking" :key="place.id">-->
        <!--        <span class="place-name">{{ index + 1 }}. {{ place.name }}</span>-->
        <!--        <span class="likes">{{ place.likes }} Likes</span>-->
        <!--      </li>-->
        <!--    </ul>-->
        <!--    <p style="text-align: center">近七天热度排行</p>-->
        <ul>
          <li v-for="(item, index) in paihang1" :key="index">
            <span class="name">{{ item.name }}</span>
            <span class="score">{{ item.comments }} 评论数</span>
          </li>
        </ul>
      </div>
    </div>
  </div>


                                                                     <!--  景区卡片-->
  <el-row :gutter="20">
                                                      <!--景点1-->
    <el-col :span="6"><div class="grid-content ep-bg-purple" />

      <div class="card" style="width: 28rem;">
        <img src="./assets/1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions1.name}}</h5>
          <p class="card-text">{{this.Attractions1.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image1');this.XQID=1">详细信息</a>

<!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions1.name;this.AttractionId=1;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions1.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions1.comments}}
          </span>
          </span>

                                                 <!--点赞按钮-->
          <span @click="changeColor();changeDian()" :class="{ 'clicked': isClicked }" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
          <span style="margin-left: 15px">
            {{this.Attractions1.likes}}
          </span>
        </div>
      </div>

    </el-col>

                                                                <!--景点2-->
    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />

      <div class="card" style="width: 28rem;">
        <img src="./assets/2.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions2.name}}</h5>
          <p class="card-text">{{this.Attractions2.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image2');this.XQID=2">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions2.name;this.AttractionId=2;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions2.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions2.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor1();changeDian1()" :class="{ 'clicked1': isClicked1 }" style="margin-left: 10px">

      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

          </span>
          <span style="margin-left: 15px">
            {{this.Attractions2.likes}}
          </span>
        </div>
      </div>

    </el-col>

<!--    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />-->

<!--      <div class="card" style="width: 28rem;">-->
<!--        <img src="./assets/1.jpg" class="card-img-top" alt="...">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">Card title</h5>-->
<!--          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
<!--          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image2')">Go somewhere</a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </el-col>-->



                                                              <!--景点3-->
    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />

      <div class="card" style="width: 28rem;">
        <img src="./assets/3.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions3.name}}</h5>
          <p class="card-text">{{this.Attractions3.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image3');this.XQID=3">详细信息</a>

          <!--          详情按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions3.name;this.AttractionId=3;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions3.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions3.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor2();changeDian2()" :class="{ 'clicked2': isClicked2 }" style="margin-left: 10px">

      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

          </span>
          <span style="margin-left: 15px">
            {{this.Attractions3.likes}}
          </span>
        </div>
      </div>

    </el-col>


  </el-row>



  <el-row :gutter="20">

                                          <!--景点4-->
    <el-col :span="6"><div class="grid-content ep-bg-purple" />
      <div class="card" style="width: 28rem;">
        <img src="./assets/4.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions4.name}}</h5>
          <p class="card-text">{{this.Attractions4.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image4');this.XQID=4">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions4.name;this.AttractionId=4;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions4.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions4.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor3();changeDian3()" :class="{ 'clicked3': isClicked3 }" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
            <!-- 点赞数-->
          <span style="margin-left: 15px">
            {{this.Attractions4.likes}}
          </span>
        </div>
      </div>
    </el-col>

                                                          <!--景点5-->
    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />
      <div class="card" style="width: 28rem;">
        <img src="./assets/5.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions5.name}}</h5>
          <p class="card-text">{{this.Attractions5.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image5');this.XQID=5">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions5.name;this.AttractionId=5;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions5.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions5.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor4();changeDian4()" :class="{ 'clicked4': isClicked4}" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
          <!-- 点赞数-->
          <span style="margin-left: 15px">
            {{this.Attractions5.likes}}
          </span>
        </div>
      </div>
    </el-col>

                                                           <!--景点6-->
    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />
      <div class="card" style="width: 28rem;">
        <img src="./assets/6.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions6.name}}</h5>
          <p class="card-text">{{this.Attractions6.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image6');this.XQID=6">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions6.name;this.AttractionId=6;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions6.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions6.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor5();changeDian5()" :class="{ 'clicked5': isClicked5 }" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
          <!-- 点赞数-->
          <span style="margin-left: 15px">
            {{this.Attractions6.likes}}
          </span>
        </div>
      </div>
    </el-col>


  </el-row>

  <el-row :gutter="20">
                                                           <!--景点7-->
    <el-col :span="6" ><div class="grid-content ep-bg-purple" />
      <div class="card" style="width: 28rem;">
        <img src="./assets/7.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions7.name}}</h5>
          <p class="card-text">{{this.Attractions7.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image7');this.XQID=7">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions7.name;this.AttractionId=7;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions7.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions7.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor6();changeDian6()" :class="{ 'clicked6': isClicked6 }" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
          <!-- 点赞数-->
          <span style="margin-left: 15px">
            {{this.Attractions7.likes}}
          </span>
        </div>
      </div>
    </el-col>

                                                            <!--景点8-->
    <el-col :span="6" :offset="2"><div class="grid-content ep-bg-purple" />
      <div class="card" style="width: 28rem;">
        <img src="./assets/8.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{this.Attractions8.name}}</h5>
          <p class="card-text">{{this.Attractions8.introduction}}</p>
          <a href="#" class="btn btn-primary" @click="FormVisible=true;changeImage('image8');this.XQID=8">详细信息</a>

          <!--          评论按钮-->
          <span style="margin-left: 150px" @click="Visible=true;this.AttractionName=this.Attractions8.name;this.AttractionId=8;this.CommentsInsert.attraction_id=this.AttractionId;this.CommentsInsert.attraction_name=this.Attractions8.name;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg><span style="margin-left: 15px">
            {{this.Attractions8.comments}}
          </span>
          </span>

          <!--点赞按钮-->
          <span @click="changeColor7();changeDian7()" :class="{ 'clicked7': isClicked7 }" style="margin-left: 10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
      </svg>

    </span>
          <!-- 点赞数-->
          <span style="margin-left: 15px">
            {{this.Attractions8.likes}}
          </span>
        </div>
      </div>
    </el-col>
  </el-row>



                                        <!--     景点详情展示窗口-->
  <el-dialog v-model="FormVisible" title="景点信息展示窗口">
    <div>
      <img v-if="currentImage === 'image1'" src="./assets/1.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image2'" src="./assets/2.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image3'" src="./assets/3.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image4'" src="./assets/4.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image5'" src="./assets/5.jpeg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image6'" src="./assets/6.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image7'" src="./assets/7.jpg" class="img-fluid" alt="...">
      <img v-if="currentImage === 'image8'" src="./assets/8.jpg" class="img-fluid" alt="...">
    </div>

<!--    <p style="text-align: center;font-size: 30px">在美好的风景中留下属于你的美好回忆吧！</p>-->
<!--    <el-input-->
<!--        v-model="inputText"-->
<!--        type="textarea"-->
<!--        :maxlength="200"-->
<!--        :show-word-limit="true"-->
<!--        placeholder="输入最多200字的信息"-->
<!--        rows="4"-->
<!--        resize="none"-->
<!--    ></el-input>-->
    <div v-for="item in xiangqing" :key="item.id">
      <p v-if="this.XQID===item.id" style="font-family: STXingkai ;font-size: 50px;color: black">
        {{item.name}}
      </p>
     <p v-if="this.XQID===item.id" style="font-family: STXingkai ;font-size: 25px;color: black;">
       {{item.description}}
     </p>

    </div>
  </el-dialog>



                                               <!--  评论区-->
  <el-dialog v-model="Visible" title="评论窗口" style="height: 600px">
    <h1 style="text-align: center">{{this.AttractionName}}</h1>            <!-- 提示是哪个景点的评论区-->
  <div style="height: 300px; overflow-y: auto;">

    <div v-for="comment in Comments" :key="comment.attraction_id">
      <div v-if="comment.attraction_id === this.AttractionId"> <!--只显示景区id为指定的评论-->
        <div>
          {{comment.user_name}}
          <span style="margin-left: 500px">{{comment.time}}</span>
        </div>
        <div style="margin-left: 100px;word-wrap: break-word;"><!--设置自动换行 -->
          {{comment.comment}}
        </div>
        <div style="margin-left: 550px">
<!--         <span>-->
<!--           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">-->
<!--  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>-->
<!--</svg>-->
<!--         </span>-->
        </div>
        <hr>
      </div>
    </div>
  </div>

    <p style="text-align: center;font-size: 30px">在美好的风景中留下属于你的美好回忆吧！</p>
    <el-input
        v-model="this.CommentsInsert.comment"
        type="text"
        :maxlength="200"
        :show-word-limit="true"
        placeholder="输入最多200字的信息"
        resize="none"
    ></el-input>
    <el-button type="primary" @click="InsertComment" style="margin-left: 600px">提交评论</el-button>
  </el-dialog>




</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng2puls",
  data(){
    return{
      FormVisible:false,
      Visible:false,
      currentImage:null,
      inputText:'',
      Keys:["Attractions1", "Attractions2", "Attractions3"],

      ranking: [],

      isClicked: false,
      isClicked1: false,
      isClicked2: false,
      isClicked3: false,
      isClicked4: false,
      isClicked5: false,
      isClicked6: false,
      isClicked7: false,

      Attractions:[],//存放全部景点信息
      Attractions1:[],//景点id为1的信息
      Attractions2:[],
      Attractions3:[],
      Attractions4:[],
      Attractions5:[],
      Attractions6:[],
      Attractions7:[],
      Attractions8:[],

      Comments:[],//评论区数据
      AttractionId:0,//景区id
      AttractionName:'',//景区名称
      //存放返回后端的评论数据
      CommentsInsert:{
        user_id:'',
        user_name:'',
        attraction_id:'',
        attraction_name:'',
        comment:'',
        time:'',
      },

      //存放每个景点的评论数
      data1:'',
      data2:'',
      data3:'',
      data4:'',
      data5:'',
      data6:'',
      data7:'',
      data8:'',
      //景点详情
      xiangqing:[],
      XQID:0,
      paihang:[],
      paihang1:[],
    }
  },
  created(){
    axios.get(`http://localhost/Attractions/getall`)
        .then(res=>{
          this.xiangqing=res.data;
        })
    axios.get(`http://localhost/Attractions/getAttractionsFromRedis`)
        .then(res=>{
          this.paihang=res.data;
          this.paihang.sort((a, b) => b.likes - a.likes);
        })
    axios.get(`http://localhost/Attractions/data_comments`)
        .then(res=>{
          this.paihang1=res.data;
          this.paihang1.sort((a, b) => b.comments - a.comments);
        })

    //向后端返回景点名称
    axios.post(`http://localhost/leaderboard/incrementScores`,this.Keys)
        .then(res=>{
          // 处理后端返回的数据
          console.log(res.data);
        })
        .catch(error=>{
          console.error('Request failed with status code', error.response.status);
        })
//获取景点排名信息
      axios.get(`http://localhost/leaderboard/get`)
          .then(res=>{
            this.ranking=res.data;
          })
          .catch(error=>{
            console.error('Request failed with status code', error.response.status);
          })
//获取景点信息
    axios.get(`http://localhost/Attractions`)
        .then(res=> {
          this.Attractions = res.data.data;

          this.Attractions1=this.Attractions.find(item => item.attraction_id===1);
          this.Attractions2=this.Attractions.find(item => item.attraction_id===2);
          this.Attractions3=this.Attractions.find(item => item.attraction_id===3);
          this.Attractions4=this.Attractions.find(item => item.attraction_id===4);
          this.Attractions5=this.Attractions.find(item => item.attraction_id===5);
          this.Attractions6=this.Attractions.find(item => item.attraction_id===6);
          this.Attractions7=this.Attractions.find(item => item.attraction_id===7);
          this.Attractions8=this.Attractions.find(item => item.attraction_id===8);


          //获取本地存储的用户id
          const savedId = localStorage.getItem('ID');
          //将字符转为整型
          const numericId = parseInt(savedId, 10);
          console.log('已保存的ID（数值类型）是:', numericId);



          //判断用户是否给景区1点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions1.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })
          //判断用户是否给景区2点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions2.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked1=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })

          //判断用户是否给景区3点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions3.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked2=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })
          //判断用户是否给景区4点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions4.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked3=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })
          //判断用户是否给景区5点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions5.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked4=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })
          //判断用户是否给景区6点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions6.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked5=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })

          //判断用户是否给景区7点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions7.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked6=true;
                }
              })
              .catch(error=>{

                console.log(error)
              })
          //判断用户是否给景区8点赞的
          axios.get(`http://localhost/Attractions/likes_start/${numericId}/${this.Attractions8.attraction_id}`)
              .then(res=>{
                if(res.data===true){
                  this.isClicked7=true;
                }
              })
              .catch(error=>{
                this.$message({
                  message: '请登入',
                  type: 'error',
                })
                console.log(error)
              })
        });


    //获取评论区评论
    axios.get(`http://localhost/Comments`)
        .then(res=>{
          this.Comments=res.data;

          //存放各个景点的评论数
            this.data1=this.Comments.filter(comment => comment.attraction_id === 1).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data1}/${this.Attractions1.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })



            this.data2=this.Comments.filter(comment => comment.attraction_id === 2).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data2}/${this.Attractions2.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })



            this.data3=this.Comments.filter(comment => comment.attraction_id === 3).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data3}/${this.Attractions3.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })


            this.data4=this.Comments.filter(comment => comment.attraction_id === 4).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data4}/${this.Attractions4.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })

            this.data5=this.Comments.filter(comment => comment.attraction_id === 5).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data5}/${this.Attractions5.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })


            this.data6=this.Comments.filter(comment => comment.attraction_id === 6).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data6}/${this.Attractions6.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })


            this.data7=this.Comments.filter(comment => comment.attraction_id === 7).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data7}/${this.Attractions7.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })


            this.data8=this.Comments.filter(comment => comment.attraction_id === 8).length;
            //更新景点的评论数
            axios.get(`http://localhost/Attractions/update/${this.data8}/${this.Attractions8.attraction_id}`)
                .then(()=>{

                })
                .catch(error=>{
                  console.error('Request failed with status code', error.response.status);
                })

        });



  },


  methods:{
    changeImage(imageName){
      this.currentImage=imageName;
    },

    changeColor() {
      this.isClicked = !this.isClicked;

    },
    changeColor1() {
      this.isClicked1 = !this.isClicked1;
    },
    changeColor2() {
      this.isClicked2 = !this.isClicked2;
    },
    changeColor3() {
      this.isClicked3 = !this.isClicked3;

    },
    changeColor4() {
      this.isClicked4 = !this.isClicked4;
    },
    changeColor5() {
      this.isClicked5 = !this.isClicked5;
    },
    changeColor6() {
      this.isClicked6 = !this.isClicked6;
    },
    changeColor7() {
      this.isClicked7 = !this.isClicked7;
    },




    //存放各个景点的评论数
    // attraction1CommentsCount1() {
    //   this.data1=this.Comments.filter(comment => comment.attraction_id === 1).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data1}/${this.Attractions1.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data1;
    // },
    // attraction1CommentsCount2(){
    //   this.data2=this.Comments.filter(comment => comment.attraction_id === 2).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data2}/${this.Attractions2.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data2;
    // },
    // attraction1CommentsCount3(){
    //   this.data3=this.Comments.filter(comment => comment.attraction_id === 3).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data3}/${this.Attractions3.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data3;
    // },
    // attraction1CommentsCount4(){
    //   this.data4=this.Comments.filter(comment => comment.attraction_id === 4).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data4}/${this.Attractions4.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data4;
    // },
    // attraction1CommentsCount5(){
    //   this.data5=this.Comments.filter(comment => comment.attraction_id === 5).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data5}/${this.Attractions5.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data5;
    // },
    // attraction1CommentsCount6(){
    //   this.data6=this.Comments.filter(comment => comment.attraction_id === 6).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data6}/${this.Attractions6.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data6;
    // },
    // attraction1CommentsCount7(){
    //   this.data7=this.Comments.filter(comment => comment.attraction_id === 7).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data7}/${this.Attractions7.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data7;
    // },
    // attraction1CommentsCount8(){
    //   this.data8=this.Comments.filter(comment => comment.attraction_id === 8).length;
    //   //更新景点的评论数
    //   axios.get(`http://localhost/Attractions/update/${this.data8}/${this.Attractions8.attraction_id}`)
    //       .then(()=>{
    //
    //       })
    //   return this.data8;
    // },

                                                            // 第一个景点点赞代码实现
    changeDian(){
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);
      //用户点赞或者取消点赞----景区1
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions1.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions1.likes++;
            }
            else if(res.data===false){
              this.Attractions1.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions1.likes}/${this.Attractions1.attraction_id}`)
                .then(res=>{

                  console.log(res);


                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });




    },
                                                     //第二个景点点赞代码实现
    changeDian1() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions2.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions2.likes++;
            }
            else if(res.data===false){
              this.Attractions2.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions2.likes}/${this.Attractions2.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },

                                                     //第3个景点点赞代码实现
    changeDian2() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions3.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions3.likes++;
            }
            else if(res.data===false){
              this.Attractions3.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions3.likes}/${this.Attractions3.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
                                                          //第4个景点点赞代码实现
    changeDian3() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions4.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions4.likes++;
            }
            else if(res.data===false){
              this.Attractions4.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions4.likes}/${this.Attractions4.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
                                                       //第5个景点点赞代码实现
    changeDian4() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions5.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions5.likes++;
            }
            else if(res.data===false){
              this.Attractions5.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions5.likes}/${this.Attractions5.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
                                                            //第6个景点点赞代码实现
    changeDian5() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions6.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions6.likes++;
            }
            else if(res.data===false){
              this.Attractions6.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions6.likes}/${this.Attractions6.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
                                                               //第7个景点点赞代码实现
    changeDian6() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions7.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions7.likes++;
            }
            else if(res.data===false){
              this.Attractions7.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions7.likes}/${this.Attractions7.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
                                                      //第8个景点点赞代码实现
    changeDian7() {
      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      //用户点赞或者取消点赞----景区2
      axios.get(`http://localhost/Attractions/likes_redis/${numericId}/${this.Attractions8.attraction_id}`)
          .then(res=>{

            if(res.data===true){
              this.Attractions8.likes++;
            }
            else if(res.data===false){
              this.Attractions8.likes--;
            }

            //更新数据库景点的点赞数
            axios.get(`http://localhost/Attractions/likes/${this.Attractions8.likes}/${this.Attractions8.attraction_id}`)
                .then(res=>{
                  console.log(res);

                })
                .catch(error=>{
                  console.log(error,"请求失败")
                });
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });
    },
    InsertComment(){


      //获取本地存储的用户id
      const savedId = localStorage.getItem('ID');
      //将字符转为整型
      const numericId = parseInt(savedId, 10);

      axios.get(`http://localhost/Comments/chajy/${numericId}`)
          .then(res=>{
            if(res.data===false){
              const Name=localStorage.getItem('Name');

              this.CommentsInsert.user_id=numericId;
              this.CommentsInsert.user_name=Name;

              // 创建一个新的 Date 对象
              const currentDate = new Date();

// 获取年、月、日
              const year = currentDate.getFullYear();
              const month = currentDate.getMonth() + 1; // 月份是从0开始的，需要加1
              const day = currentDate.getDate();

// 构建当天日期字符串（格式为 yyyy-MM-dd）
              const todayDateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
              this.CommentsInsert.time=todayDateString;

              axios.post(`http://localhost/Comments/insert`,this.CommentsInsert)
                  .then(()=>{

                    this.$message({
                      message: '评论成功',
                      type: 'success',

                    })
                  })
              // 处理数据的逻辑，例如将评论添加到评论列表
              // this.Comments.push({
              //   user_name: this.CommentsInsert.user_name,
              //   time: todayDateString,  // 你需要根据实际情况获取评论的时间
              //   comment: this.CommentsInsert.comment,
              // });

              console.log(this.Comments);
              // 清空输入框的值
              this.CommentsInsert.comment = '';
            }
            else {
              this.$message({
                message: '您已被禁止在景点评论',
                type: 'error',
              })
            }
          })
          .catch(()=>{
            this.$message({
              message: '您还没有登入',
              type: 'error',
            })
          });





    }
  }

}
</script>

<style scoped>
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


/*排行榜*/
.ranking-list {
  max-width: 600px;
  margin: 20px auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.name {
  font-weight: bold;
}

.score {
  /*color: #4CAF50;  !* 点赞数颜色可以根据需求自定义 *!*/
  color: white;
}

/*点赞按钮*/
.clicked svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked1 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked2 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked3 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked4 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked5 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked6 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.clicked7 svg {
  fill: red;
  transition: fill 0.3s ease; /* 添加一个过渡效果 */
  cursor: pointer;
}
.paihang{
  background-image: url("./assets/10.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* 禁止背景图片重复 */
}
.container {
  display: flex;
}

.left-div, .right-div {
  flex: 1;
}

</style>