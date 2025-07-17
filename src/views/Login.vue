<template>
<div>
  <div class="login-layout">
    <!-- 用户登录-卡片 -->
    <transition name="el-zoom-in-center" mode="out-in">
      <div class="login-card" v-if="loginCard">
        <!-- 登录与注册标题 -->
        <div class="login-regirect">
          <div
            @click="loginShow = true"
            :class="{titleActive : loginShow}"
            class="title-menu">
            登录
          </div>
          <span>·</span>
          <div
            @click="loginShow = false"
            :class="{titleActive : !loginShow}"
            class="title-menu">
            注册
          </div>
        </div>

        <transition name="el-zoom-in-center" mode="out-in">
          <!-- 登录 -->
          <div v-if="loginShow" id="my-login-card" key="a1">
            <div class="login-form">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="loginModel">
                  <el-select @change="checkModel(ruleForm.loginModel)" v-model="ruleForm.loginModel" style="width: 100%" placeholder="请选择模式">
                    <el-option
                      v-for="item in modelList"
                      :key="item.value"
                      :label="item.text"
                      :value="item.value"
                    >
                    </el-option>
                    <i slot="prefix" class="el-input__icon el-icon-set-up"></i>
                  </el-select>
                </el-form-item>
                <el-form-item prop="username">
                  <el-input
                    @keydown.native="keyDown($event, 'ruleForm')"
                    placeholder="请输入学号/工号"
                    v-model="ruleForm.username">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="logPassword">
                  <el-input
                    @keydown.native="keyDown($event, 'ruleForm')"
                    placeholder="请输入密码"
                    v-model="ruleForm.logPassword" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-init-info">
              <el-checkbox v-model="rememberPwd">记住我</el-checkbox>
              <span @click="showForgetPwdCard()" class="forget-pwd">忘记密码</span>
            </div>
            <div class="login-submit-btn">
              <el-button type="primary" @click="loginSubForm('ruleForm')" style="width: 100%" round>登 录</el-button>
            </div>
          </div>

          <!-- 注册 -->
          <div v-if="!loginShow" key="b2">
            <div class="register-form">
              <el-form :model="regRuleForm" :rules="regRules" ref="regRuleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="sid">
                  <el-input
                    placeholder="请输入学号"
                    v-model="regRuleForm.sid">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="name">
                  <el-input
                    placeholder="请输入您的姓名"
                    v-model="regRuleForm.name">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    placeholder="请输入您的密码"
                    v-model="regRuleForm.password" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                  </el-input>
                </el-form-item>
                <el-form-item style="width: 60%;float: left" prop="class">
                  <el-select v-model="regRuleForm.class" placeholder="请选择您的班级">
                    <el-option
                      v-for="item in classList"
                      :key="item.id"
                      :label="item.cl_name"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="float: left; margin-left: 20px" prop="sex">
                  <el-radio-group v-model="regRuleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
            </div>
            <div class="register-btn">
              <el-button type="primary" @click="regSubForm('regRuleForm')" style="width: 100%" round>注 册</el-button>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <!-- 忘记密码-卡片 -->
    <transition name="el-zoom-in-center" mode="out-in">
      <div class="forget-pwd-card" v-if="forgetPwd">
        <div style="padding: 0 80px">
          <div class="forget-title">
            重置密码
          </div>
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
          <div>
            <el-button type="primary" @click="forgetSubForm('forgetForm')" style="width: 100%" round>提 交</el-button>
            <div style="text-align: center; margin-top: 20px">
              <el-button @click="showLoginCard()" icon="el-icon-back" circle></el-button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import { getAPI, postAPI } from '@/api/postApi'

export default {
  name: 'Login',
  data () {
    return {
      checkAPI: 1, // 切换模式
      rememberPwd: false, // 记住密码
      loginShow: true, // 控制登录内容
      regirShow: false, // 控制注册内容
      loginCard: true, // 控制登录注册卡片
      forgetPwd: false, // 控制忘记密码卡片
      classList: [], // 班级列表
      userName: '', // 用户储存当前登录用户的姓名
      modelList: [
        { value: 1, text: '教学模式' },
        { value: 2, text: '训练模式' },
        { value: 3, text: '考核模式' },
        { value: 4, text: '竞赛模式' }
      ],
      ruleForm: { // 登录信息
        loginModel: '', // 登录模式
        username: '', // 账号
        logPassword: '' // 密码
      },
      rules: { // 登录验证
        loginModel: [
          { required: true, message: '请选择您的系统模式', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入您的学号/工号', trigger: 'blur' }
        ],
        logPassword: [
          { required: true, message: '请输入您的密码', trigger: 'blur' }
        ]
      },

      // 学生注册
      regRuleForm: {
        sid: '', // 学号
        password: '', // 密码
        name: '', // 姓名
        sex: '', // 性别
        class: '' // 班级
      },
      regRules: { // 登录验证
        sid: [
          { required: true, message: '请输入您的学号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择您的性别', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请选择您的班级', trigger: 'blur' }
        ]
      },
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
  mounted () {
    this.getClassInfo() // 获取班级列表信息
    // 绑定事件
    // window.addEventListener('keydown', this.keyDown)
    // console.log('上次记住的密码', window.bound && window.bound.get_last_password())
  },
  // 销毁事件
  destroyed () {
    // window.removeEventListener('keydown', this.keyDown, false)
  },
  methods: {
    // 显示忘记密码卡片
    showForgetPwdCard () {
      this.loginCard = false
      setTimeout(() => {
        this.forgetPwd = true
      }, 300)
    },
    // 显示登录卡片
    showLoginCard () {
      this.forgetPwd = false
      setTimeout(() => {
        this.loginCard = true
      }, 300)
    },
    // 记住密码
    setPwd (pwd) {
      // 主动给软件发消息
      window.bound.set_last_password(pwd)
    },
    // 登录
    loginSubForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.checkAPI !== 0) {
            // 教师登录
            postAPI('/login/', {
              username: this.ruleForm.username,
              password: this.ruleForm.logPassword
            }).then((res) => {
              if (res === 'None') {
                this.$message.error('账号不存在！')
              } else if (res === 'pwderr') {
                this.$message.error('密码错误！')
              } else {
                this.$store.commit('setUserAccount',
                  [
                    this.ruleForm.username,
                    this.ruleForm.logPassword,
                    this.ruleForm.loginModel,
                    res.name.slice(0, 1)
                  ])

                this.$store.commit('setIframeUrl', '')

                this.$router.push('/home')
                if (this.rememberPwd) {
                  this.setPwd(this.ruleForm.logPassword) // 记住密码
                }
                this.$notify({
                  title: '登录成功',
                  duration: '1500',
                  message: '欢迎回来 ' + res.name.slice(0, 1) + '老师',
                  type: 'success'
                })
              }
            })
          } else {
            // 学生登录
            postAPI('/stulogin/', {
              sid: this.ruleForm.username,
              password: this.ruleForm.logPassword
            }).then((res) => {
              if (res === 'None') {
                this.$message.error('账号不存在！')
              } else if (res === 'pwderr' || res === 'pwderror') {
                this.$message.error('密码错误！')
              } else {
                this.$store.commit('setUserAccount',
                  [
                    this.ruleForm.username,
                    this.ruleForm.logPassword,
                    this.ruleForm.loginModel,
                    res.name.slice(0, 1)
                  ])
                this.$router.push('/home')
                if (this.rememberPwd) {
                  this.setPwd(this.ruleForm.logPassword) // 记住密码
                }
                this.$notify({
                  title: '登录成功',
                  message: '欢迎回来 ' + res.name.slice(0, 1) + '同学',
                  type: 'success'
                })
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 回车登录
    keyDown (e, form) {
      // 如果是回车则执行登录方法
      if (e.keyCode === 13) {
        this.loginSubForm(form)
      }
    },
    // 获取班级信息
    getClassInfo () {
      getAPI('/registerstu/', {}).then((res) => {
        this.classList = res
      })
    },

    // 注册
    regSubForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          postAPI('/registerstu/', this.regRuleForm).then((res) => {
            if (res === 'register') {
              this.$message.success('注册成功！')
              this.$refs[formName].resetFields() // 清空注册表单
              this.loginShow = true // 切换为登录卡片
            } else if (res === 'same') {
              this.$message.error('该学号已存在')
            } else if (res === 'error') {
              this.$message.error('注册失败！')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 切换模式
    checkModel (item) {
      if (item === 1) {
        this.checkAPI = 1
      } else {
        this.checkAPI = 0
      }
    },

    // 忘记密码
    forgetSubForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          postAPI('/changepassword/', this.forgetForm).then((res) => {
            if (res === 'error') {
              this.$message.error('账号不存在！')
            } else if (res === 'olderror') {
              this.$message.error('旧密码错误！')
            } else if (res === 'ok') {
              this.$message.success('重置密码成功！')
              setTimeout(function () {
                location.reload()
              }, 500)
            }
          })
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
}
</style>
