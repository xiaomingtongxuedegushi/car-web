<!-- 左侧侧边栏 -->
<template>
  <div class="mc-page-left">
    <div class="mc-page-left-container">
      <div class="left-menu-layout" :style="{'background': theme.leftBar.background.color}">
        <!-- Logo -->
        <div class="product-logo">
          <span :style="{'color': theme.leftBar.title.color}" @click="test2">点慧</span>
        </div>

        <!-- 菜单部分 -->
        <div v-for="(item, index) in currentList" :key="index">
          <div class="menu-content">
            <div class="one-menu">
              <div class="one-menu-line"></div>
              <span :style="{'color': theme.leftBar.menu1.text.color}">{{ item.text }}</span>
              <div class="one-menu-line"></div>
            </div>
            <div v-for="(item2, index2) in item.childList" :key="index2">
              <div class="second-menu"> <!--v-if="isShowSoftware(item2)"-->
                <div
                  style="user-select: none"
                  :class="{'leftActive': iframeUrl === item2.url}"
                  @click="topPage(item2, index, index2)">
                  <i :class="item2.childIcon"></i>
                  <span>{{ item2.childText }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentMenu } from '../../data/menu'
import { loadTheme } from '../../data/theme'

export default {
  name: 'HomeLeftBar',
  data () {
    return {
      currentList: [],
      isIndex: null,
      isIndex2: null,
      canclick: true,
      clickList: []
    }
  },
  computed: {
    ...mapGetters([
      'iframeUrl',
      'baseUrl',
      'username',
      'password',
      'systemModel',
      'userName',
      'theme',
      'showSoftwareList',
      'menuClickList'
    ])
  },
  mounted () {
    getCurrentMenu(this.systemModel).then((menu) => {
      menu.forEach((item, index) => {
        if (item.text === '故障设置') {
          if (!this.showSoftwareList.includes('my_point')) {
            menu.splice(index, 1)
          }
        }

        if (item.text === '工单考试') {
          item.childList.forEach((item2, index2) => {
            if (!this.showSoftwareList.includes('my_machine')) {
              if (item2.childText === '机械装调') {
                item.childList.splice(index2, 1)
              }
            }
          })
        }
      })

      this.currentList = menu
    })

    getCurrentMenu(this.systemModel).then((menu) => {
      this.initMyTool(menu)
    })
  },
  methods: {
    // 根据配置文件判断工具的显示与隐藏
    initMyTool (menu) {
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].text === '我的工具') {
          let ccc = parseInt('' + menu[i].childList.length)
          for (let x = 0; x < menu[i].childList.length; x++) {
            if (!this.showSoftwareList.includes(menu[i].childList[x].url)) {
              menu[i].childList.splice(x, 1)
              x -= 1 // 灰常重要，让 x 一直于数组的长度保持一致
              ccc--
            }
          }
          if (ccc === 0) {
            // 删除一级菜单
            menu.splice(i, 1)
          }
        }
      }
    },
    test2 () {
      loadTheme('theme1')
      this.$store.commit('setIframeUrl', '')
    },
    // 切换页面
    topPage (item, i, i2) {
      this.isIndex = i
      this.isIndex2 = i2

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
    }
  }
}
</script>

<style scoped>
/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 6px;
}
/* 滚动条样式 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,0.3);
}
/* 滑道样式 */
::-webkit-scrollbar-track {
  margin: 7px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(255,255,255,0.5);
  border-radius: 5px;
}
</style>
