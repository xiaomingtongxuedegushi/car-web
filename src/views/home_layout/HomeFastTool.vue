<template>
<div>
  <div class="tool-centext-layout">
    <div class="tool-card-layout" v-if="menu">
      <div
        class="tool-card"
        v-for="(item, index) in menu"
        @click="topPage(item)"
        :key="index"
      >
        <div class="tool-icon-layout">
          <i :style="{ color: theme.leftBar.background.color }" :class='item.childIcon'></i>
        </div>
        <div class="tool-name">{{ item.childText }}</div>
      </div>
      <div class="tool-card" @click="openDialog" style="display: flex; align-items: center; justify-content: center">
        <i @click="openDialog" :style="{ color: theme.leftBar.background.color }" class="el-icon-circle-plus-outline"></i>
      </div>
    </div>
  </div>

  <!-- 常用应用管理-抽屉 -->
  <el-drawer
    title="常用应用管理"
    :visible.sync="drawer"
    :direction="direction"
    size="38%">
    <!-- 应用块布局 -->
    <div class="add-tool-layout">
      <div v-for="(item, index) in userMenuList" :key="index">
        <div>{{ item.text }}</div>
        <div class="add-tool-centent" v-if="item.text !== '我的工具' || showSoftwareList !== 0">
          <div
            class="add-tool-card"
            v-for="(item2, index2) in item.childList"
            :class="{'stock': item2.isHas, 'noStock': !item2.isHas}"
            :key="index2"
          >
            <div class="add-tool-icon-layout">
              <i :class="item2.childIcon" :style="{color: item2.iconColor}"></i>
            </div>
            <div
              class="add-tool-name"
              :class="{'activeText': item2.isHas}"
            >
              {{ item2.childText }}
            </div>
            <div class="star">
              <div class="remove" @click="removeTool(item2)" v-if="item2.isHas">
                移出
              </div>
              <div class="add" @click="addTool(item2)">
                添加
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentTools } from '@/data/tool'
import { getCurrentMenu } from '@/data/menu'

export default {
  name: 'HomeFastTool',
  data () {
    return {
      active: '',
      drawer: false,
      direction: 'rtl',
      menu: [], // 常用工具数组
      userMenuList: [], // 用户默认写死的数组,
      loading: false,
      currentList: [], // 左侧菜单数组
      clickList: []
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'systemModel',
      'theme',
      'showSoftwareList',
      'menuClickList'
    ])
  },
  mounted () {
    // getCurrentMenu(this.systemModel).then((menu) => {
    //   this.currentList = menu
    // })

    if (this.systemModel === 1) {
      const teacherMenu = JSON.parse(window.bound && window.bound.get_user_menu('t_' + this.username))
      this.verifyMenu(teacherMenu)
    } else {
      const stuMenu = JSON.parse(window.bound && window.bound.get_user_menu('s_' + this.username))
      this.verifyMenu(stuMenu)
    }
  },
  methods: {
    verifyMenu (value) {
      // this.$message.info(JSON.stringify(value))
      if (value === '' || value === null || value.length === 0) {
        getCurrentTools(this.systemModel).then((menu) => {
          this.menu = menu[0].childList
        })
      } else {
        value.forEach((item, index) => {
          if (item.target === 'software') {
            if (!this.showSoftwareList.includes(item.url)) {
              value.splice(index, 1)
            }
          }
        })
        this.menu = value
      }
    },
    topPage (item) {
      if (item.target === 'iframe') {
        this.$store.commit('setIframeUrl', item.url)
      } else if (item.target === 'software') {
        if (!this.clickList.includes(item.url)) {
          window.bound.openSoftware(item.url)
          this.clickList.push(item.url)
          setTimeout(() => {
            this.clickList.forEach((clickItem, index) => {
              if (clickItem === item.url) {
                this.clickList.splice(index, 1)
              }
            })
          }, 1000)
        }
      }
    },
    // 打开对话框
    openDialog () {
      this.loading = this.$loading()
      this.selectAll()
    },
    // 过滤 我的工具
    isShowSoftware: function (item) {
      if (item.target !== 'software') {
        return true
      }
      // 判断如果显示返回true，否则返回false
      // item.url 是否在 showSoftwareList 中即可
      return this.showSoftwareList.includes(item.url)
    },
    // 获取全部应用
    selectAll () {
      getCurrentMenu(this.systemModel).then((menu) => {
        const menu2 = JSON.parse(JSON.stringify(menu))

        // 6个工具
        // this.$message.info(JSON.stringify(menu2))

        // 判断 target 等于 software 就移除掉
        menu2.forEach((value) => {
          value.childList.forEach((value2, index) => {
            if (value2.target === 'software') {
              if (!this.showSoftwareList.includes(value2.url)) {
                value.childList.splice(index, 1)
              }
            }
          })
        })

        const menuList = JSON.parse(JSON.stringify(menu2))

        // 6个
        // this.$message.info(JSON.stringify(menuList))

        menuList.forEach((item) => {
          item.childList.forEach((item2) => {
            let f = false
            this.menu.forEach((item3) => {
              if (item2.url === item3.url) {
                f = true
              }
            })
            item2.isHas = f
          })
        })

        this.userMenuList = menuList
        this.drawer = true
        this.loading.close()
      })
    },
    // 移除常用工具
    removeTool (item) {
      this.menu.forEach((value, index) => {
        if (value.url === item.url) {
          this.menu.splice(index, 1)
        }
      })
      this.selectAll()
      // 保存教学模式
      if (this.systemModel === 1) {
        window.bound.save_user_menu('t_' + this.username, JSON.stringify(this.menu))
      } else {
        window.bound.save_user_menu('s_' + this.username, JSON.stringify(this.menu))
      }
    },
    // 新增常用工具
    addTool (item) {
      if (this.menu.length >= 7) {
        this.$message.error('常用工具已达上限')
      } else {
        this.menu.push(item)
        this.selectAll()
        // 保存教学模式
        if (this.systemModel === 1) {
          window.bound.save_user_menu('t_' + this.username, JSON.stringify(this.menu))
        } else {
          window.bound.save_user_menu('s_' + this.username, JSON.stringify(this.menu))
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
