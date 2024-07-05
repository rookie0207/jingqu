<template>
  <div class="yemeng51">
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
                                                        <!--右侧内容显示框-->
    <div class="div2 shadow">
      <el-row class="mb-4">
        <el-button type="success" @click="getAll">查询全部信息</el-button>

        <el-button type="success" @click="getNumber">根据号码查询</el-button>
        <el-input
            v-model="input"
            class="w-50 m-2 input"
            size="large"
            placeholder="输入电话号码查询"
            @keyup.enter="getNumber"
        />
        <el-button type="success" @click="getDelete">删除信息</el-button>

        <el-input
            v-model="input1"
            class="w-50 m-2 input"
            size="large"
            placeholder="输入电话号码删除"
            @keyup.enter="getDelete"
        />
        <el-button type="success"  @click="FormVisible = true">
          添加游客信息
        </el-button>

        <el-button type="success" @click="FormVisible1=true">修改游客信息</el-button>

      </el-row>
      <el-table :data="currentData" style="width: 100% " height="500">
        <el-table-column prop="id" align="center" label="id"></el-table-column>
        <el-table-column prop="name" align="center" label="昵称"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center" />
        <el-table-column prop="sex" label="性别" align="center" />
        <el-table-column prop="number" label="电话号码" align="center"/>
        <el-table-column prop="email" label="邮箱" align="center"/>

<!--        &lt;!&ndash; 上传图片列 &ndash;&gt;-->
<!--        <el-table-column label="图像" align="center">-->
<!--          &lt;!&ndash;                  :src="require('@/assets/1.jpg')"&ndash;&gt;-->
<!--          <div class="demo-type" >-->
<!--            <div>-->
<!--              <el-avatar-->
<!--              :src="tuxiang"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-table-column>-->

      </el-table>

    </div>

  </div>

                                         <!--提交游客信息数据的表单（隐藏）-->
  <el-dialog v-model="FormVisible" title="添加框">
    <!--输入数据的输入框-->
    <el-form :model="form">

      <el-form-item label="昵称" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form.name" autocomplete="off" style="width: 200px"/>
      </el-form-item>

      <el-form-item label="年龄" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form.age" autocomplete="off" style="width: 100px"/>
      </el-form-item>

     <el-form-item label="性别" :label-width="formLabelWidth" style="margin-left: 150px" >
<!--        <el-input v-model="form.sex" autocomplete="off" style="width: 200px"/>-->
       <el-radio-group v-model="form.sex" class="ml-4">
         <el-radio label="男" size="large">男</el-radio>
         <el-radio label="女" size="large">女</el-radio>
       </el-radio-group>
      </el-form-item>

      <el-form-item label="电话号码" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form.number" autocomplete="off" style="width: 200px"/>
      </el-form-item>

      <el-form-item label="电子邮箱" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form.email" autocomplete="off" style="width: 200px"/>
      </el-form-item>

    </el-form>
    <!--表单的按钮-->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="FormVisible = false">取消</el-button>
        <!--   确认按钮绑定了两个功能，一个是让弹出框不可见和一个提交数据功能     -->
        <el-button   :disabled="isFormNumberEmpty"  type="primary" @click="FormVisible = false;insert();">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>


                                          <!--修改游客信息数据的表单（隐藏）-->
<!--  使用手册：不能修改电话号码，因为修改信息是传电话号码过去找到对应信息修改的，所以在页面不能修改电话号码！！！你问我为什么不能修改电话？如果电话号码有问题一开始你怎么注册成功的-->
  <el-dialog v-model="FormVisible1" title="修改框">
    <!--输入数据的输入框-->
    <el-form :model="form1">

      <el-form-item label="昵称" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form1.name" autocomplete="off" style="width: 200px"/>
      </el-form-item>

      <el-form-item label="年龄" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form1.age" autocomplete="off" style="width: 100px"/>
      </el-form-item>

      <el-form-item label="性别" :label-width="formLabelWidth" style="margin-left: 150px">
<!--        <el-input v-model="form1.sex" autocomplete="off" style="width: 200px"/>-->
        <el-radio-group v-model="form1.sex" class="ml-4">
          <el-radio label="男" size="large">男</el-radio>
          <el-radio label="女" size="large">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="电话号码" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form1.number" autocomplete="off" style="width: 200px"/>
      </el-form-item>

      <el-form-item label="电子邮箱" :label-width="formLabelWidth" style="margin-left: 150px">
        <el-input v-model="form1.email" autocomplete="off" style="width: 200px"/>
      </el-form-item>

    </el-form>
    <!--表单的按钮-->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="FormVisible1= false">取消</el-button>
        <!--   确认按钮绑定了两个功能，一个是让弹出框不可见和一个提交数据功能     -->
        <el-button :disabled="isForm1NumberEmpty" type="primary" @click="FormVisible1 = false;update();">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>


</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng51",
  data() {
    return {
      input: '',
      input1:'',
      tableData: [],
      getNumberData: [],
      delete:[],
      currentData:[],

      FormVisible:false,
      formLabelWidth : '140px',
      form: {
        name: '',
        age: '',
        sex: '',
        number:'',
        email:'',
      },

      FormVisible1:false,
      //存放用number获取到的游客信息
      form1: {
        name: '',
        age: '',
        sex: '',
        number:'',
        email:'',
      },
      // tuxiang:"https://th.bing.com/th/id/R.9f7932dd5abb5a528345eb658ca5db01?rik=bL0WP4rIX9XQEQ&riu=http%3a%2f%2fimg.mp.itc.cn%2fupload%2f20161116%2fbf24f9b097154202b78c532487cb6364_th.jpg&ehk=t4C9jsbW4B5KdUltcxwB9wr%2bnEeNbUAhdtdgGDNfZ8Y%3d&risl=&pid=ImgRaw&r=0",

    };
  },
  //如果form1.number为空则不能点击修改确认按钮
  computed: {
    isForm1NumberEmpty() {
      return !this.form1.number;
    },
    isFormNumberEmpty() {
      return !this.form.number||!this.form.name||!this.form.age||!this.form.email;
    }
  },

  methods: {
    //查询全部游客信息
    getAll() {
      axios.get('http://localhost/controllerTourists')
          .then(res => {
            this.tableData = res.data.data;//可以返回多个对象数据---后端代码不同
            this.currentData=this.tableData;
            console.log(this.tableData);
          })
    },
    //按电话号码来查询游客信息
    getNumber(){
      // 从localStorage中获取保存的token
      const token = localStorage.getItem('jwtToken');
      axios.get(`http://localhost/controllerTourists/getNumber/${this.input}`,{
        headers: {
          'token': `${token}`
        }
      })
          .then(response=>{

            this.getNumberData=[response.data.data];//只能返回一个对象数据
            this.currentData=this.getNumberData;
            //将获取到的游客信息存放进去，用于在修改游客信息的表单里面显示
            //判断后端返回值是否存在，若存在则将获取到的数据导入到修改表单当中，反之则不导入
            if(response.data.data!=null){
              this.form1=response.data.data;
            }

          })
          .catch(error=>{
            console.error("请求错误",error);
          })
    },
    //按电话号码来删除游客信息
    getDelete(){
      axios.get(`http://localhost/controllerTourists/delete/${this.input1}`)
          .then(res=>{
            if (res.data.flag === true) {
              // 如果删除成功后返回的数据为空，则弹出成功删除的提示框
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
          .catch(error => {
            this.$message({
              message: '请先删除该用户发表的评论后再删除该账号',
              type: 'error'
            }),
            console.error('Error deleting:', error);
            // 可以在这里处理请求失败的逻辑或者展示错误信息
          });
    },
    //插入游客信息
    insert(){
      axios.post(`http://localhost/controllerTourists`, this.form)
          .then(()=>{
            //点击确定按钮之后清空表单输入框里面的值
            this.form={
              name: '',
              age: '',
              sex: '',
              number:'',
              email:'',
            }
            this.$message({
              message: '添加成功',
              type: 'success'
            });
          })
          .catch(error => {
                console.error('Error deleting:', error);
          });
    },
    //修改游客信息
    update(){
      axios.put(`http://localhost/controllerTourists/${this.form1.number}`,this.form1)
          .then(()=>{
            this.$message({
              message: '修改成功',
              type: 'success'
            });
          })
          .catch(error => {
            console.error('Error deleting:', error);
          });
    }
  }
}
</script>

<style scoped>
.yemeng51{

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
.input{
  margin-top: 0!important;
  margin-left: 15px!important;
  width: 150px!important;
  height: 32px;
}
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

/*.demo-type > div:not(:last-child) {*/
/*  border-right: 1px solid var(--el-border-color);*/
/*}*/

</style>