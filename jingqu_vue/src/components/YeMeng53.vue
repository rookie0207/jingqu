<template>
  <div class="yemeng53">
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

      <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          max-height="550px"
      >
      <el-table-column type="selection" width="55" />


                                     <!--                      显示评论数据-->
        <el-table-column fixed label="评论时间" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.time }}</span>
            </div>
          </template>
        </el-table-column>
<!--        <el-table-column label="评论id" width="180">-->
<!--          <template #default="scope">-->
<!--            <div style="display: flex; align-items: center">-->

<!--              <span style="margin-left: 10px">{{ scope.row.id }}</span>-->
<!--            </div>-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column label="用户id" width="80">
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <span style="margin-left: 10px">{{ scope.row.user_id }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="用户昵称" width="120">
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
            </div>
          </template>
        </el-table-column>
<!--        <el-table-column label="景区id" width="180">-->
<!--          <template #default="scope">-->
<!--            <div style="display: flex; align-items: center">-->

<!--              <span style="margin-left: 10px">{{ scope.row.attraction_id }}</span>-->
<!--            </div>-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column label="景区名称" width="120">
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <span style="margin-left: 10px">{{ scope.row.attraction_name }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="评论" width="300">
          <template #default="scope">
            <div style="display: flex; align-items: center">

              <span style="margin-left: 10px">{{ scope.row.comment }}</span>
            </div>
          </template>
        </el-table-column>


        <el-table-column  label="删除">
          <template #default="scope">

            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>

          </template>
        </el-table-column>



        <el-table-column  label="禁言">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">{{scope.row.jy}}</el-button>
          </template>
        </el-table-column>

      </el-table>

      <div style="margin-top: 20px;margin-left: 300px">

        <el-button @click="deleteSelectedRows">批量删除</el-button>

        <el-button @click="deleteID">删除指定用户全部评论（输入用户id）</el-button>

        <el-input v-model="input" style="width: 150px" placeholder="输入用户id" />
      </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng53",
  data() {
    return {
      tableData: [],//存放全部评论信息
      input:'',
      comments:[],//用来存放评论id
      jy1:'',
      jingyan:'禁言中',
    };
  },
  created(){
    axios.get(`http://localhost/Comments`)
        .then(res=> {
          this.tableData = res.data;
        })
  },
  methods: {
    //禁言功能
    handleEdit(index, row) {
      const user_id=row.user_id;//获取表格中的用户id
      axios.get(`http://localhost/Comments/jinyan/${user_id}`)
          .then(res=>{
            this.jy1=res.data;
            if(this.jy1===true){
              this.$message({
                message: '已禁言',
                type: 'success',
              });
              //发送一个后端请求，修改comments表中的jy为已禁言
              axios.get(`http://localhost/Comments/jy/${this.jingyan}/${user_id}`)
                  .then(()=>{

                  })
            }
            else {
              this.$message({
                message: '取消禁言',
                type: 'success',
              });
              //发送一个后端请求，修改comments表中的jy为未禁言
              this.jingyan='未禁言'
              axios.get(`http://localhost/Comments/jy/${this.jingyan}/${user_id}`)
                  .then(()=>{

                  })
            }
          })
      console.log("Edit operation clicked for row:", row);
    },
    //单个删除
    handleDelete(index, row) {
      // const user_id=row.user_id;//获取表格中的用户id
      const id=row.id;//获取评论id
      this.tableData.splice(index, 1);
      axios.get(`http://localhost/Comments/deleteid/${id}`)
          .then(res=>{
            if(res.data===true){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
            else {
              this.$message({
                message: '删除失败',
                type: 'false'
              });
            }
            console.log(res.data);
          })
      console.log("Delete operation clicked for row:", row);
      // console.log("删除的用户id为：",user_id);
      console.log("删除的评论id为：",id);
    },
    //删除指定用户全部评论
    deleteID(){
      axios.get(`http://localhost/Comments/delete/${this.input}`)
          .then(res=>{
            if(res.data===true){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
            else {
              this.$message({
                message: '删除失败',
                type: 'error'
              });
            }
          })
          .catch(()=>{
            this.$message({
              message: '请先输入',
              type: 'error'
            });
          })
    },
    handleSelectionChange(selection) {
      this.tableData.forEach((row) => {
        row.selected = selection.includes(row);
      });
    },
    //批量删除选中的数据
    deleteSelectedRows() {
      // Filter out the selected rows and update the data array
      // this.tableData = this.tableData.filter((row) => !row.selected);
      this.tableData = this.tableData.filter((row) => {
        if (row.selected) {
          // 这里可以将选中行的 ID 存储到一个数组中
          this.comments.push(row.id);

          console.log('Selected ID:', row.id); // 示例：打印选中行的 ID
          return false; // 过滤掉选中的行
        }

        return true; // 保留未选中的行
      });
      console.log('获取到的评论id：',this.comments);
      axios.post(`http://localhost/Comments/deleteIds`,this.comments)
          .then(res=>{
            if(res.data===true){
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }
            else {
              this.$message({
                message: '删除失败',
                type: 'error'
              });
            }
            console.log(res.data);
          })
    },

  },




}

</script>

<style scoped>
.yemeng53{

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