<template>
  <div class="yemeng52">
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
        <el-col :span="24"><div class="grid-content ep-bg-purple-dark" />
          <el-button  type="primary" @click="getAll">查询全部员工</el-button>
          <el-button  :disabled="isEmputy" type="primary" @click="getSelect">输入职工编号和姓名</el-button>
          <el-input
              v-model="input1"
              class="w-50 m-2 input"
              size="large"
              placeholder="编号"
          />
          <el-input
              v-model="input2"
              class="w-50 m-2 input"
              size="large"
              placeholder="姓名"
          />
<!--          <div class="dropdown">-->
          <el-button type="primary" style="margin-left: 20px;margin-right: 20px" @click="dialogTableVisible=true">增加职工</el-button>

          <el-dialog v-model="dialogTableVisible" title="新增职工" width="600">

            <el-form :model="staff" label-width="auto" style="max-width: 600px;">

              <el-form-item label="姓名" style="margin-left: 70px">
                <el-input v-model="staff.name" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="年龄" style="margin-left: 70px">
                <el-input v-model="staff.age" style="width: 50px;" />
              </el-form-item>
              <el-form-item label="性别" style="margin-left: 70px">
<!--                <el-input v-model="staff.sex" style="width: 300px;"/>-->
                <el-radio-group v-model="staff.sex" class="ml-4">
                  <el-radio label="男" size="large">男</el-radio>
                  <el-radio label="女" size="large">女</el-radio>
                </el-radio-group>

              </el-form-item>
              <el-form-item label="电话号码" style="margin-left: 70px">
                <el-input v-model="staff.number" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="电子邮箱" style="margin-left: 70px">
                <el-input v-model="staff.email" style="width: 200px;"/>
              </el-form-item>
              <el-form-item label="入职时间" style="margin-left: 70px">
                <el-input v-model="staff.ctime" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="在职/离职" style="margin-left: 70px">
                <el-input v-model="staff.ztime" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="家庭住址" style="margin-left: 70px">
                <el-input v-model="staff.haddress" style="width: 300px;"/>
              </el-form-item>
              <el-form-item label="离职时间" style="margin-left: 70px">
                <el-input v-model="staff.ltime" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="部门" style="margin-left: 70px">
<!--                <el-input v-model="staff.department" style="width: 300px;"/>-->
                <el-select
                    v-model="staff.department"
                    placeholder="所属部门"
                    size="large"
                    style="width: 240px"
                >
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  />
                </el-select>

              </el-form-item>
              <el-form-item label="工作分类" style="margin-left: 70px">
                <el-input v-model="staff.work" style="width: 150px;" />
              </el-form-item>
              <el-form-item label="月薪" style="margin-left: 70px">
                <el-input v-model="staff.salary" style="width: 150px;"/>
              </el-form-item>
              <el-form-item label="职位" style="margin-left: 70px">
<!--                <el-input v-model="staff.position" style="width: 300px;"/>-->

                <el-select
                    v-model="staff.position"
                    placeholder="职位"
                    size="large"
                    style="width: 240px"
                >
                  <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="身份照名称" style="margin-left: 70px">
                <el-input v-model="staff.imageName" style="width: 150px;"/>
              </el-form-item>
            </el-form>
            <div class="mb-4" style="margin-left: 400px">
              <el-button type="warning" @click="dialogTableVisible=false">取消</el-button>
              <el-button type="primary" @click="Insert">提交</el-button>
            </div>
          </el-dialog>


            <button class="btn btn-secondary dropdown-toggle department" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              部门分类
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" @click="GetAll_select1">IT</a></li>
              <li><a class="dropdown-item" @click="GetAll_select2">HR</a></li>
              <li><a class="dropdown-item" @click="GetAll_select3">保安</a></li>
              <li><a class="dropdown-item" @click="GetAll_select4">售票员</a></li>
              <li><a class="dropdown-item" @click="GetAll_select5">清洁工</a></li>
            </ul>
<!--          </div>-->

        </el-col>

      </el-row>
      <el-table :data="tableData" style="width: 100%" height="400">


        <el-table-column  label="职工编号" width="100" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
<!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.id }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="100" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="100" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.age }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="100" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.sex }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="是否在职" width="100" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.ztime }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="电话号码" width="150" align="center" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.number }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="电子邮箱" width="200" align="center" >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <!--              <el-icon><timer /></el-icon>-->
              <span style="margin-left: 10px;">{{ scope.row.email }}</span>
            </div>
          </template>
        </el-table-column>










        <el-table-column label="其它信息" width="100">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <div>在职时间: {{ scope.row.ctime}}</div>
                <div>离职时间: {{ scope.row.ltime }}</div>
                <div>所属部门: {{ scope.row.department}}</div>
                <div>工作分类: {{ scope.row.work }}</div>
                <div>薪资: {{ scope.row.salary}}</div>
                <div>职位: {{ scope.row.position}}</div>
                <div>头像: {{ scope.row.imageName}}</div>
              </template>

              <template #reference>
                <el-tag>{{ scope.row.name }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>


        <el-table-column     label="Operations">
          <template #default="scope">
            <el-button  size="small" @click="handleEdit(scope.$index, scope.row);dialogFormVisible = true"
            >编辑</el-button
            >
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
            >
          </template>
        </el-table-column>


      </el-table>


      <el-dialog v-model="dialogFormVisible" title="编辑员工信息" width="1400">


<!--        <div class="demo-fit">-->
<!--          <div  class="block">-->
<!--            <el-avatar shape="square" :size="200" :src="url" />-->
<!--          </div>-->
<!--        </div>-->
                                                       <!--        头像上传模块-->
<!--        <div id="app">-->
          <div class="item_bock head_p">
            <div class="head_img">
              <img :src="userInfo.avatar"/>
            </div>
            <div class="setting_right" @click.stop="uploadHeadImg">
              <div class="caption">更改头像</div>
            </div>
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
<!--          </div>-->
            <el-form :model="form" label-width="120px">
              <el-form-item label="职工编号">
<!--                <el-input v-model="form.id" class="inputform" />-->
                {{ this.form.id}}
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.name"  class="inputform" />
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="form.age" />
              </el-form-item>
              <el-form-item label="性别">
                <el-input v-model="form.sex" />
              </el-form-item>
              <el-form-item label="电话号码">
                <el-input v-model="form.number" />
              </el-form-item>


            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="电子邮箱">
                <el-input v-model="form.email"  class="inputform"/>
              </el-form-item>
              <el-form-item label="入职时间">
                <el-input v-model="form.ctime" />
              </el-form-item>
              <el-form-item label="是否在职">
                <el-input v-model="form.ztime" />
              </el-form-item>
              <el-form-item label="家庭住址">
                <el-input v-model="form.haddress" />
              </el-form-item>
              <el-form-item label="离职时间">
                <el-input v-model="form.ltime" />
              </el-form-item>

            </el-form>
            <el-form :model="form" label-width="120px">
              <el-form-item label="所属部门">
                <el-input v-model="form.department"  class="inputform"/>
              </el-form-item>
              <el-form-item label="工作分类">
                <el-input v-model="form.work" />
              </el-form-item>
              <el-form-item label="月薪">
                <el-input v-model="form.salary" />
              </el-form-item>
              <el-form-item label="职位">
                <el-input v-model="form.position" />
              </el-form-item>
              <el-form-item label="身份照编码">
<!--                <el-input v-model="form.imageName" />-->
                {{this.form.imageName}}
              </el-form-item>
            </el-form>
        </div>

        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;updateImage();updateAll();">
              确定
            </el-button>
          </div>
        </template>


      </el-dialog>
    </div>


  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "YeMeng52",
  data() {
    return {
      // 假设你有一个名为tableData的数据属性
      tableData: [],
      input1:'',
      input2:'',
      dialogFormVisible:false,
      image:'',                                // 用来存放后端返回数据头像的名称
      imagename:'',                            //用来存放新头像的名称
      ID:'',                                    //用来存放员工id
      userInfo: {
        // avatar:require('./assets/'+this.image)
        avatar:''                      //用来存放拼接好的图片url
      },
      form:{
        id:'',
        name:'',
        age:'',
        sex:'',
        number:'',
        email:'',
        ctime:'',
        ztime:'',
        haddress:'',
        ltime:'',
        department:'',
        work:'',
        salary:'',
        position:'',
        imageName:'',
      },
      staff:{
        name:'',
        age:'',
        sex:"",
        number:'',
        email:'',
        ctime:'',
        ztime:'',
        haddress:'',
        ltime:'',
        department:'',
        work:'',
        salary:'',
        position:'',
        imageName:'',
      },
      Department:'',//员工部门
      dialogTableVisible:false,
      options:[
        {
          value: 'IT',
          label: 'IT',
        },
        {
          value: 'HR',
          label: 'HR',
        },
        {
          value: '售票员',
          label: '售票员',
        },
        {
          value: '清洁工',
          label: '清洁工',
        },
      ],
      options1:[
        {
          value: '部门经理',
          label: '部门经理',
        },
        {
          value: '普通员工',
          label: '普通员工',
        },
      ],
    };
  },
  created(){
    this.getAll();
  },
  computed: {
    //设置输入框全部不为空按钮才能有用
    isEmputy(){
      return !this.input1 || !this.input2;
    },
  },
  methods: {
    getAll(){
      axios.get('http://localhost/controllerStaff')
          .then(res=>{
            this.tableData=res.data.data;
          })
    },
    getSelect(){
      axios.get(`http://localhost/controllerStaff/get/${this.input1}/${this.input2}`)
          .then(res1=>{
            this.tableData=[res1.data.data];//当返回的data数据集中只有一组数据时必须使用[]，否则会报错
            console.log(res1.data);

          })
          .catch(error=>{
            console.log("错误",error);
          })
    },
    handleEdit(index, row) {


      try {
        // 此处为可能抛出异常的代码
        // ...
        this.image = row.imageName;                                        //获取到需要编辑行的imageName字段数据
        this.userInfo.avatar = require('./assets/' + this.image);       //将获取到的图片名称就行拼接
        this.ID=row.id;                                                      //将表格中获取的id就行存放

        this.form.id=row.id;
        this.form.name=row.name;
        this.form.age=row.age;
        this.form.sex=row.sex;
        this.form.number=row.number;
        this.form.email=row.email;
        this.form.ctime=row.ctime;
        this.form.ztime=row.ztime;
        this.form.haddress=row.haddress;
        this.form.ltime=row.ltime;
        this.form.department=row.department;
        this.form.work=row.work;
        this.form.salary=row.salary;
        this.form.position=row.position;
        this.form.imageName=row.imageName;
      } catch (error) {
        console.error("An error occurred:", error);
        // 或者您可以不处理异常，如果您不希望在控制台上看到异常信息
      }
    },

    handleDelete(index, row) {
      // 在这里添加删除逻辑
      const deletedId = row.id;
      if(deletedId!==null){
        axios.get(`http://localhost/controllerStaff/del/${deletedId}`)
            .then(()=>{
              this.tableData.splice(index, 1); // 移除对应的行
              console.log('点击删除：', index, row, '被删除的id是：', deletedId);
            })
            .catch(error => {
              console.error('删除请求失败：', error);
            });
      }
    },


    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      // 获取文件名
      let fileName = file.name;

      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
        // 这里可以使用 fileName 变量，进行进一步的处理
        console.log('Selected file name:', fileName);
        this.imagename=fileName;                                    //将获取到的文件名称就行存放
      }
      reader.readAsDataURL(file);
    },

    updateImage(){
      axios.get(`http://localhost/controllerStaff/put/${this.imagename}/${this.ID}`)
          .then(res=>{
            console.log(res);
          })
          .catch(error => {
            console.error('修改身份照失败：', error);
          });

    },
    updateAll(){
      axios.put(`http://localhost/controllerStaff/${this.form.id}`,this.form)
          .then(()=>{

          })
    },
    //查询某一部门全部员工
    GetAll_select1(){
      this.Department='IT';
      axios.get(`http://localhost/controllerStaff/GetAll_select/${this.Department}`)
          .then(res=>{
            this.tableData=res.data;
            console.log('it员工',this.tableData);

          })
    },
    GetAll_select2(){
      this.Department='HR';
      axios.get(`http://localhost/controllerStaff/GetAll_select/${this.Department}`)
          .then(res=>{
            this.tableData=res.data;
            console.log('HR',this.tableData);

          })
    },
    GetAll_select3(){
      this.Department='保安';
      axios.get(`http://localhost/controllerStaff/GetAll_select/${this.Department}`)
          .then(res=>{
            this.tableData=res.data;
            console.log('保安',this.tableData);

          })
    },
    GetAll_select4(){
      this.Department='售票员';
      axios.get(`http://localhost/controllerStaff/GetAll_select/${this.Department}`)
          .then(res=>{
            this.tableData=res.data;
            console.log('售票员',this.tableData);

          })
    },
    GetAll_select5(){
      this.Department='清洁工';
      axios.get(`http://localhost/controllerStaff/GetAll_select/${this.Department}`)
          .then(res=>{
            this.tableData=res.data;
            console.log('清洁工',this.tableData);

          })
    },
    Insert(){
      axios.post('http://localhost/controllerStaff',this.staff)
          .then(res=>{
            if(res.data===true){
              this.$message({
                message: '添加成功',
                type: 'success',
              });
              this.staff={
                    name:'',
                    age:'',
                    sex:'',
                    number:'',
                    email:'',
                    ctime:'',
                    ztime:'',
                    haddress:'',
                    ltime:'',
                    department:'',
                    work:'',
                    salary:'',
                    position:'',
                    imageName:'',
              }
            }
            else {
              this.$message({
                message: '提交失败',
                type: 'error',
              });
            }
          })
    }
  },
}

</script>

<style scoped>
.yemeng52{

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
  margin-top: 9px!important;
  margin-left: 15px!important;
  width: 150px!important;
  height: 32px;
}



/*头像上传模块*/
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:94px;
  width: 300px;
  padding:0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  height: 90px;
}
.head_img img{
  width:190px;
  height:190px;
  /*border-radius:50px*/
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #8F8F8F;
  font-size: 26px;
  height: 37px;
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
.inputform{
  width: 200px;
}
.department{
  background-color: #2c7be5!important;
  width: 150px;
  height: 50px;

}
</style>