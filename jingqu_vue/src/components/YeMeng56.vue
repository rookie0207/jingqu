<template>
  <div class="yemeng56">
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



      <el-scrollbar height="500px">
        <div id="main" style="width: 1100px;height:400px ">
        </div>
        <div id="main1" style="width: 900px;height:400px;margin-left: 100px">
        </div>

        <el-row>
          <el-col :span="12"><div class="grid-content ep-bg-purple" />
            <div id="main2" style="width: 900px;height:400px;margin-left: 100px">
            </div>
          </el-col>
          <el-col :span="12"><div class="grid-content ep-bg-purple-light" />

          </el-col>
        </el-row>
        <div id="main3" style="width: 900px;height:400px;margin-left: 100px">
        </div>
      </el-scrollbar>



    </div>

  </div>
</template>

<script>
 import axios from "axios";
import * as echarts from 'echarts';
export default {
  name: "YeMeng56",
  data(){
    return{
      data_comments:[],
      data_likes:[],
      data_sum:[],
      chartLoaded: false,
      chartLoaded1: false,
      chartLoaded2: false,
    }
  },
  created(){
    axios.get(`http://localhost/Attractions/data_likes`)
        .then(res=>{
          this.data_likes=res.data;
          this.loadDataAndRenderChart();
        })
    axios.get(`http://localhost/Attractions/data_comments`)
        .then(res=>{
          this.data_comments=res.data;
          this.loadDataAndRenderChart();
        })
    axios.get(`http://localhost/message/sum`)
        .then(res=>{
          this.data_sum=res.data;
          console.log(res.data)
        })
  },
  methods:{
    loadDataAndRenderChart() {
      if (this.data_likes.length > 0 && this.data_comments.length > 0 && !this.chartLoaded && !this.chartLoaded1) {
                                                           // 第一个表
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option = {
          title: {
            text: '景点点赞数量统计',
            left: 'center'
          },
          xAxis: {
            type: 'category',
            data: this.data_likes.map(item => item.name)
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: this.data_likes.map(item => item.likes),
              type: 'bar'
            }
          ]
        };
        myChart.setOption(option);
        this.chartLoaded = true;



                                                         //第二个表
        var chartDom1 = document.getElementById('main1');
        var myChart1 = echarts.init(chartDom1);
        var option1 = {
          title: {
            text: '景点评论数量统计',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.data_comments.map(item => item.name)
          },
          series: [
            {
              name: '评论数量',
              type: 'pie',
              radius: '50%',
              data: this.data_comments.map(item => ({
                value: item.comments,
                name: item.name
              })),
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        myChart1.setOption(option1);
        this.chartLoaded1 = true;

        console.log(this.data_sum)



        //第3个表
        var chartDom2 = document.getElementById('main2');
        var myChart2 = echarts.init(chartDom2);
       var option2 = {
         title: {
           text: '留言与回复的数量对比',
           left: 'center'
         },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 10, name: '留言' }, // 将 data_sum[0] 作为 Category A 的值
                { value: 12, name: '回复' }, // 将 data_sum[1] 作为 Category B 的值
              ]
            }
          ]
        };
        myChart2.setOption(option2);
        this.chartLoaded2 = true; // 添加这一行


        //第4个表
        var chartDom3 = document.getElementById('main3');
        var myChart3= echarts.init(chartDom3);
       var  option3 = {
         title: {
           text: '游客与职工数量对比',
           left: 'center'
         },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['50%', '70%'],
              // adjust the start and end angle
              startAngle: 180,
              endAngle: 360,
              data: [
                { value: 8, name: '游客' },
                { value: 6, name: '职工' },

              ]
            }
          ]
        };
        myChart3.setOption(option3);



      }
    },
  },

}
</script>

<style scoped>
.yemeng56{

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