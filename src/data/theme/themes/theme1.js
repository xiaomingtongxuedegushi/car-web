const template = {
  // 侧边栏
  leftBar: {
    // 侧边栏-标题
    title: {
      color: '#ffffff'
    },
    // 侧边栏-背景
    background: {
      color: '#409EFF'
    },
    // 侧边栏一级菜单配置
    menu1: {
      text: {
        color: null
      }
    },
    // 侧边栏二级菜单配置
    menu2: {
      // 二级菜单项初始颜色
      item: {
        text: {
          color: '#ffffff'
        },
        background: {
          color: '#66B1FF'
        }
      },
      // 鼠标悬浮后变化
      hover: {
        text: {
          color: '#007eff'
        },
        background: {
          color: '#ffffff'
        }
      },
      // 被激活的菜单
      active: {
        text: {
          color: '#ffffff'
        },
        background: {
          // color: 'rgba(91,91,227,0.71)'
          color: '#5305FA'
        }
      },
      // 最浅的颜色
      light: {
        text: {
          color: ''
        },
        background: {
          color: 'rgba(64, 158, 255, 0.2)'
        }
      }
    }
  }
}

export { template }
