<template>
  <div class="yemeng54">
    <!--    左侧导航栏-->
    <div class="div1">
      <ul class="list-group shadow">
        <router-link to="/yemeng51"> <li class="list-group-item">游客信息管理</li></router-link>
        <router-link to="/yemeng52"> <li class="list-group-item">员工信息管理</li></router-link>
        <router-link to="/yemeng53"> <li class="list-group-item">景区评论管理</li></router-link>
        <!--        <li class="list-group-item">景点信息管理</li>-->
        <router-link to="/yemeng54"><li class="list-group-item">景点信息管理</li></router-link>
        <router-link to="/yemeng55"> <li class="list-group-item">公告管理</li></router-link>
        <router-link to="/yemeng56"> <li class="list-group-item">数据可视化</li></router-link>
        <router-link to="/yemeng57"> <li class="list-group-item">留言板管理</li></router-link>
      </ul>
    </div>


    <div class="div2 shadow">

<!--      <div class="demo-collapse" v-for="item in All" :key="item.id">-->
<!--        <el-collapse v-model="activeName" accordion>-->
<!--          <el-collapse-item :title="item.name">-->
<!--            <div>-->
<!--              {{item.description}}-->
<!--            </div>-->
<!--          </el-collapse-item>-->
<!--        </el-collapse>-->
<!--      </div>-->
      <h4 style="text-align: center">景点详情</h4>
      <div class="demo-collapse" v-for="item in All" :key="item.id">
        <el-collapse  accordion>
          <el-collapse-item  >
            <template #title >
              <p style="font-size: 25px;">{{item.name}}</p>

              <el-icon class="header-icon">
              <info-filled />
            </el-icon>

            </template>
            <div style="font-size: 20px">
              {{item.description}}
            </div>
          </el-collapse-item>

        </el-collapse>

      </div>
      <p style="text-align: center">点击对应景点的按钮</p>
      <div class="mb-4">
<!--        <el-button type="primary">{{ All.length > 0 ? All[0].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[1].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[2].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[3].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[4].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[5].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[6].name : '' }}</el-button>-->
<!--        <el-button type="primary">{{ All.length > 0 ? All[7].name : '' }}</el-button>-->

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[0]" style="margin-left: 150px">{{ All.length > 0 ? All[0].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[1]">{{ All.length > 0 ? All[1].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[2]">{{ All.length > 0 ? All[2].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[3]">{{ All.length > 0 ? All[3].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[4]">{{ All.length > 0 ? All[4].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[5]">{{ All.length > 0 ? All[5].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[6]">{{ All.length > 0 ? All[6].name : '' }}</el-button>
          </template>
        </el-popconfirm>

        <el-popconfirm
            title="你确定需要修改景点详情吗？"
            @confirm="handleConfirm"
            @cancel="handleCancel"
        >
          <template #reference>
            <el-button type="success" @click="this.fanghui=this.All[7]">{{ All.length > 0 ? All[7].name : '' }}</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>


    <el-dialog v-model="dialogTableVisible" title="修改景点名称和介绍" width="800">
     <h3 style="text-align: center"> {{this.fanghui.name}}</h3>
      <h5 style="margin-left: 80px">修改景点名称</h5>
      <el-input v-model="this.fanghui.name" style="width: 240px;margin-left: 80px" placeholder="请输入新景点名称" />
      <h5 style="margin-left: 80px">修改景点详情</h5>
      <el-input
          v-model="this.fanghui.description"
          style="width: 600px;height: 300px;margin-left: 80px"
          :rows="10"
          type="textarea"
          placeholder="请输入对应景点详情"
      />
      <div class="mb-4" style="margin-left: 300px">
        <el-button type="success" @click="this.dialogTableVisible=false">放弃</el-button>
        <el-button type="primary" @click="update">确认</el-button>

      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng54",
  data(){
    return{
      activeName:'1',
      All:[],
      dialogTableVisible:false,
      textarea:'',
      fanghui:{
        id:0,
        name:'',
        description:'',
      }
    }
  },
  created(){
    this.getAll();
  },
  methods:{
    getAll(){
      axios.get(`http://localhost/Attractions/getall`)
          .then(res=>{
            this.All=res.data;
            console.log(this.All);
          })
    },
//按钮弹出框中的按钮进行的操作
    handleConfirm() {
      // 处理确认操作的逻辑
      this.dialogTableVisible=true;
    },
    handleCancel() {
      // 处理取消操作的逻辑
      this.dialogTableVisible=false;
    },
   update(){
      axios.put(`http://localhost/Attractions/update1`,this.fanghui)
          .then(res=>{
            if (res.data === true) {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              this.dialogTableVisible=false;
            }
            else {
              this.$message({
                message: '修改失败',
                type: 'flash'
              });
            }

          })
   }
  }
}
</script>

<style scoped>
.yemeng54{

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
</style>