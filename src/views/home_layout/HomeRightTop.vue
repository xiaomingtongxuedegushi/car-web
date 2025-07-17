<!-- 右侧顶部 -->
<template>
  <div class="mc-page-right-top">
    <div class="mc-page-right-top-container">
      <div class="top-nav-flex">
        <div class="top-nav-left">
          <div class="title" @click="$store.commit('setIframeUrl', '')">
            智慧一体化系统
          </div>
        </div>
        <div class="top-nav-right" @mouseleave="showMenu = false" style="height: 45px; padding: 20px 0">
          <div class="top-nav-action" id="top-nav-logout" @mouseenter="showMenu = true">
            <i class="el-icon-user-solid"/>
            {{ username }}
            <i class="el-icon-arrow-down"/>
            <transition name="el-zoom-in-top" mode="out-in">
              <div class="logout-child-menu" v-if="showMenu">
                <div class="user-menu" @click="dialogVisible = true">
                  <i class="el-icon-edit-outline"/>
                  修改密码
                </div>
                <div class="user-menu" @click="logOut">
                  <i class="el-icon-close"/>
                  注销
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!-- 修改密码对话框 -->
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <div>
        <div class="forget-pwd-card">
          <div style="padding: 0 80px">
            <el-form :model="forgetForm" :rules="forgetRules" ref="forgetForm" label-width="0px" class="demo-ruleForm">
              <el-form-item prop="sid">
                <el-input
                  placeholder="请输入学号"
                  v-model="forgetForm.sid">
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="oldpassword">
                <el-input
                  placeholder="请输入旧密码"
                  v-model="forgetForm.oldpassword" show-password>
                  <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  placeholder="请输入新密码"
                  v-model="forgetForm.password" show-password>
                  <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                </el-input>
              </el-form-item>
            </el-form>
            <div style="margin: 30px 0 10px 0">
              <el-button type="primary" @click="forgetSubForm('forgetForm')" style="width: 100%" round>提 交</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { postAPI } from '../../api/postApi'
// eslint-disable-next-line camelcase
import bgColor_List from '@/assets/data/bgColor.json'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeRightTop',
  data () {
    return {
      showMenu: false,
      dialogVisible: false,
      // 忘记密码
      forgetForm: {
        sid: '', // 学号
        oldpassword: '', // 旧密码
        password: '' // 新密码
      },
      forgetRules: { // 登录验证
        sid: [
          { required: true, message: '请输入您的学号', trigger: 'blur' }
        ],
        oldpassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'iframeUrl',
      'baseUrl',
      'username',
      'password',
      'systemModel',
      'userName'
    ])
  },
  mounted () {
    this.colorList = bgColor_List.colorList
    this.bagColor = bgColor_List.bagColor
    this.secondColor = bgColor_List.secondColor
  },
  methods: {
    // 改变主题背景色
    editMainColor (item) {
      this.bagColor = item.value
      this.secondColor = item.childValue
      this.$message.info(item.name)
    },
    // 修改密码对话框
    handleClose (done) {
      this.$confirm('确认关闭？关闭之后内容将会清空。')
        .then(_ => {
          done()
          this.forgetForm.oldpassword = ''
          this.forgetForm.sid = ''
          this.forgetForm.password = ''
        })
        .catch(_ => {})
    },
    // 忘记密码
    forgetSubForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          postAPI('/changepassword/', this.forgetForm).then((res) => {
            console.log(res)
            if (res === 'error') {
              this.$message.error('账号不存在！')
            } else if (res === 'olderror') {
              this.$message.error('旧密码错误！')
            } else if (res === 'ok') {
              this.$message.success('重置密码成功！')
              setTimeout(function () {
                location.reload()
              }, 500)
              this.$router.push('/login')
            }
          })
        }
      })
    },
    // 退出登录
    logOut () {
      this.$confirm('确定退出吗?, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        location.href = '/'
        // this.$store.commit('setIframeUrl', '')
        // this.$router.push('/login')
        // this.$notify({
        //   title: '退出成功',
        //   duration: '1500',
        //   type: 'success'
        // })
        // this.$message.success('退出登录')
        // setTimeout(() => {
        //   window.location.reload()
        //   this.$message.success('刷新成功')
        // }, 500)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消操作'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
