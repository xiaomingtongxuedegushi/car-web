<template>
  <div id="app" :style="themeStyle">
    <router-view/>
  </div>
</template>

<script>
import { loadTheme } from './data/theme'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      path: '',
      themeStyle: null,
      toolArray: [] // 工具数组
    }
  },
  computed: {
    ...mapGetters([
      'theme',
      'showSoftwareList'
    ])
  },
  mounted () {
    this.path = this.$route.path

    // 加载主题
    this.initTheme()

    // 接收软件传递过来的消息，注意后面不加括号
    window.win_to_js = this.winToJs
    window.set_software_show = this.setSoftwareShow
  },
  watch: {
    $route (to) {
      this.path = to.path
    }
  },
  methods: {
    initThemeStyle () {
      this.themeStyle = {
        // 侧边栏-背景颜色
        '--theme-background-color': this.theme.leftBar.background.color,
        // 二级菜单初始背景颜色
        '--theme-second-menu-background-color': this.theme.leftBar.menu2.item.background.color,
        // 二级菜单初始文本颜色
        '--theme-second-menu-color': this.theme.leftBar.menu2.item.text.color,
        // 二级菜单鼠标悬浮后文本颜色
        '--theme-second-menu-hover-text-color': this.theme.leftBar.menu2.hover.text.color,
        // 二级菜单鼠标悬浮后背景颜色
        '--theme-second-menu-hover-background-color': this.theme.leftBar.menu2.hover.background.color,
        // 二级菜单被激活后的背景颜色
        '--left-active-background-color': this.theme.leftBar.menu2.active.background.color,
        // 二级菜单被激活后的文本颜色
        '--left-active-color': this.theme.leftBar.menu2.active.text.color,
        // 浅色背景文字
        '--light-text-color': this.theme.leftBar.menu2.light.text.color,
        // 最浅的蓝色背景
        '--light-background-color': this.theme.leftBar.menu2.light.background.color
      }
    },
    initTheme () {
      loadTheme().then((theme) => {
        this.$store.commit('setTheme', theme)
        this.initThemeStyle()
      })
    },
    getP () {
      const res = window.bound.getPointData()

      this.$message.info(res)
    },
    winToJs (data) {
      this.$message.success('来自软件的消息：' + data)
    },
    setSoftwareShow (id) {
      const tmp = JSON.parse(JSON.stringify(this.showSoftwareList))
      let f = true

      tmp.forEach((item) => {
        if (item === id) {
          f = false
        }
      })

      if (f) {
        tmp.push(id)
      }

      this.$store.commit('setShowSoftwareList', tmp)
    }
  }
}
</script>

<style>
body {
  position: relative;
}
.left-menu {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 20px;
}
</style>
