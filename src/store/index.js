import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeThemeId: 'theme1',
    baseUrl: 'http://www.car.com',
    // baseUrl: 'http://127.0.0.1:8000',
    iframeUrl: '', // page地址
    username: '', // 账号
    password: '', // 密码
    systemModel: '', // 系统模式
    userName: '', // 当前登录人姓名
    theme: null, // 主题内容
    showSoftwareList: [], // 需要显示的软件列表
    menuClickList: []
  },
  mutations: {
    setShowSoftwareList (state, value) {
      state.showSoftwareList = value
    },
    menuClickList (state, value) {
      state.menuClickList = value
    },
    setActiveThemeId (state, value) {
      state.activeThemeId = value
    },
    setTheme (state, value) {
      state.theme = value
    },
    setIframeUrl (state, value) {
      state.iframeUrl = value
    },
    setUserAccount (state, [param1, param2, param3, param4]) {
      state.username = param1
      state.password = param2
      state.systemModel = param3
      state.userName = param4
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    menuClickList (state) {
      return state.menuClickList
    },
    showSoftwareList (state) {
      return state.showSoftwareList
    },
    activeThemeId (state) {
      return state.activeThemeId
    },
    theme (state) {
      return state.theme
    },
    iframeUrl (state) {
      return state.iframeUrl
    },
    baseUrl (state) {
      return state.baseUrl
    },
    username (state) {
      return state.username
    },
    password (state) {
      return state.password
    },
    systemModel (state) {
      return state.systemModel
    },
    userName (state) {
      return state.userName
    }
  }
})
