<template>
  <div class="yemeng57">
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
      <el-row>
                                              <!--        留言-->

        <el-col :span="12"><div class="grid-content ep-bg-purple" />
          <h3 style="text-align: center">主留言</h3>
          <el-table :data="tableData" height="500" style="width: 100%">

            <el-table-column label="时间" width="150">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <el-icon><timer /></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="留言人" width="80">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="留言" width="220">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.comment}}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="Operations">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                  子留言
                </el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
                                                <!--        子留言-->
        <el-col :span="12"><div class="grid-content ep-bg-purple-light" />
          <h3 style="text-align: center">子留言</h3>
          <el-table :data="filteredData" height="500" style="width: 100%">
            <el-table-column label="时间" width="150">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <el-icon><timer /></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="回复人" width="120">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
                </div>
              </template>
            </el-table-column>

            <el-table-column label="子留言" width="180">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.comment }}</span>
                </div>
              </template>
            </el-table-column>


            <el-table-column label="Operations">
              <template #default="scope">

                <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete1(scope.$index, scope.row)"
                >
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng57",
  data(){
    return{
      tableData:[],
      tableData1:[],
      fatherid:'',
    }
  },
  created(){
    this.getfather();
    this.getson();
  },
  computed: {
    //只渲染对应主留言下的子留言
    filteredData() {
      return this.tableData1.filter(row => row.parent_comment_id === this.fatherid);
    }
  },

  methods:{
    getfather(){
      axios.get("http://localhost/message")
          .then(res=>{
            this.tableData=res.data;
          })
    },
    getson(){
      axios.get("http://localhost/message/sub_comments")
          .then(res=>{
            this.tableData1=res.data;
          })
    },
    handleEdit(index,row){
      this.fatherid=row.id;
      console.log(index,row);
    },


    handleDelete(index,row){
      const id=row.id;
      axios.get(`http://localhost/message/delete/${id}`)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '删除成功',
                type: 'success',
              })
              this.tableData.splice(index, 1); // 移除对应的行
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
              message: '该留言下存在子留言，请删除子留言后再删除',
              type: 'error',
            })
          });
    },

    handleDelete1(index,row){
      const id=row.id;
      axios.get(`http://localhost/message/delete1/${id}`)
          .then(res=>{
            if(res.data===true) {
              this.$message({
                message: '删除成功',
                type: 'success',
              })
              this.tableData1.splice(index, 1); // 移除对应的行
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
              message: '系统错误',
              type: 'error',
            })
          });
    },
  }
}
</script>

<style scoped>
.yemeng57{

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

</style>