<template>
  <div>
  <div id="first-top">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple" id="first-left">
          <div class="first-left-name">
          <span class="left-name">智慧一体系统</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light" id="first-right">
          <div class="first-right-name">
            <span class="right-name">林天</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div id="content-ard">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="content-ard-one">
            <div class="content-ard-img" >
              <img  src="../../imges/book-3-fill.png" alt="" width="50%" />
            </div>
            <span class="content-ard-typeface">新课程</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <div class="content-ard-tow">
            <div class="content-ard-img" >
              <img  src="../../imges/book-3-fill.png" alt="" width="50%" />
            </div>
            <span class="content-ard-typeface">新课程</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="content-ard-three">
            <div class="content-ard-img" >
              <img  src="../../imges/book-3-fill.png" alt="" width="50%"/>
            </div>
            <span class="content-ard-typeface">新课程</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <div class="content-ard-four">
            <div class="content-ard-img" >
              <img  src="../../imges/book-3-fill.png" alt="" width="50%" />
            </div>
            <span class="content-ard-typeface">新课程</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  </div>
<!--  <div>-->
<!--    <h2>顶部导航栏</h2>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

#first-top{
  background-color:#FBFBFB;
  border-radius: 15px;
  height: 60px;
  box-shadow:0px 0px 8px 0px #aaa;
}
#first-left{
}
.left-name{
  float: left;
  font-size: 28px;
  line-height: 60px;
  margin-left: 50px;
}
.first-right-name{
  text-align: center;
  width: 60px;
  height: 60px;
  background-color:#1CABB3;
  border-radius: 50%;
  float: right;
  margin-right: 50px;
}
.right-name{
  line-height: 58px;
  color: white;
  font-size: 25px;
}
#content-ard{
  width: 100%;
  height: 600px;
  margin-top: 30px;
  background-color:#FBFBFB;
  border-radius: 15px;
  box-shadow:0px 0px 8px 0px #aaa;
}
.content-ard-one{
  height: 230px;
  width: 70%;
  background-color: rgba(52, 218, 227, 0.3);
  border-radius: 15px;
  text-align: center;
  margin:32px 32px 32px 32px;
}

.content-ard-img{
  padding-top: 30px;
}
.content-ard-typeface{
  font-size: 25px;
}
.content-ard-tow{
  height: 230px;
  width: 70%;
  background-color: rgba(52, 137, 227, 0.3);
  border-radius: 15px;
  text-align: center;
  margin:32px 32px 32px 32px;
}
.content-ard-three{
  text-align: center;
  height: 230px;
  width: 70%;
  background-color: rgba(52, 177, 227, 0.42);
  border-radius: 15px;
  margin:32px 32px 32px 32px;
}
.content-ard-four{
  height: 230px;
  width: 70%;
  background-color: rgba(52, 110, 227, 0.3);
  border-radius: 15px;
  text-align: center;
  margin:32px 80px 32px 32px;
}
</style>
